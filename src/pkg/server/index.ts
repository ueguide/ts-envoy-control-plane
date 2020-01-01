import { Subject } from 'rxjs'
import * as grpc from 'grpc'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { DiscoveryRequest, DiscoveryResponse, DeltaDiscoveryRequest, DeltaDiscoveryResponse } from '../../envoy/api/v2/discovery_pb'
import { Cache, Logger, ServerStreamValues, CacheResponse } from '../../types'
import * as resourceTypes from '../cache/resource'

const createResponse = ( cacheResponse: CacheResponse, typeURL: string ): DiscoveryResponse => {
  // console.log( 'TYPE>>>', typeURL )
  const { version, resources } = cacheResponse

  // build discovery response
  const response = new DiscoveryResponse()
  response.setVersionInfo( version.toString() )
  response.setTypeUrl( typeURL )
  const packedResources = resources.map( ( msg ) => {
    // for each resource, great a google protobuf Any buffer message
    const any = new Any()
    const packType = typeURL.replace( 'type.googleapis.com/', '' )
    // pack cluster load assignment message into any
    any.pack( msg.serializeBinary(), packType )

    return any
  })
  response.setResourcesList( packedResources )

  return response
}

export class Server {
  cache: Cache;
  logger: null | Logger;

  constructor( cache: Cache, logger: null | Logger = null ) {
    this.cache = cache
    this.logger = logger
  }

  process( call: grpc.ServerDuplexStream<DiscoveryRequest, DiscoveryResponse> ): void {
    const { cache, logger } = this
    // unique nonce generator for req-resp pairs per xDS stream; the server
    // ignores stale nonces. nonce is only modified within send() function.
    let streamNonce = 0

    const values: ServerStreamValues = {
      endpointCancel: null,
      clusterCancel: null,
      routeCancel: null,
      listenerCancel: null,
      secretCancel: null,
      runtimeCancel: null,

      endpointNonce: 0,
      clusterNonce: 0,
      routeNonce: 0,
      listenerNonce: 0,
      secretNonce: 0,
      runtimeNonce: 0
    }

    // sends a serialized protobuf response
    const send = ( response: CacheResponse, typeURL: string ): number => {
      // create DiscoveryResponse from cache service response
      const out = createResponse( response, typeURL )
      // increment nonce
      streamNonce++
      out.setNonce( streamNonce.toString() )

      // log
      if ( logger ) {
        const { request } = response
        const node = request.getNode()
        logger.info(
          '--RESPONSE--',
          `Node=${node && node.getId()}`,
          `T=${typeURL}`,
          `V=${out.getVersionInfo()}`,
          `N=${streamNonce.toString()}`,
          request.getResourceNamesList()
        )
      }

      // write to stream
      call.write( out )

      return streamNonce
    }

    // On data received on stream
    call.on( 'data', async ( request: DiscoveryRequest ) => {
      // get request type url
      const typeURL = request.getTypeUrl()

      // get the current request nonce
      const nonce = request.getResponseNonce()
      const node = request.getNode()

      // log the request
      if ( logger ) {
        logger.info(
          '--REQUEST--',
          `Node=${node && node.getId()}`,
          `T=${typeURL}`,
          `V=${request.getVersionInfo()}`,
          `N=${nonce}`,
          request.getResourceNamesList()
        )
      }

      if ( typeURL === resourceTypes.EndpointType && ( values.endpointNonce === 0 || values.endpointNonce.toString() === nonce ) ) {
        if ( values.endpointCancel ) {
          values.endpointCancel()
        }
        const subj = new Subject<CacheResponse>()
        subj.subscribe( ( response ) => {
          values.endpointNonce = send( response, resourceTypes.EndpointType )
        })
        cache.createWatch( request, subj )
      } else if ( typeURL === resourceTypes.ClusterType && ( values.clusterNonce === 0 || values.clusterNonce.toString() === nonce ) ) {
        if ( values.clusterCancel ) {
          values.clusterCancel()
        }
        const subj = new Subject<CacheResponse>()
        subj.subscribe( ( response ) => {
          values.clusterNonce = send( response, resourceTypes.ClusterType )
        })
        cache.createWatch( request, subj )
      } else if ( typeURL === resourceTypes.RouteType && ( values.routeNonce === 0 || values.routeNonce.toString() === nonce ) ) {
        if ( values.routeCancel ) {
          values.routeCancel()
        }
        const subj = new Subject<CacheResponse>()
        subj.subscribe( ( response ) => {
          values.routeNonce = send( response, resourceTypes.RouteType )
        })
        cache.createWatch( request, subj )
      } else if ( typeURL === resourceTypes.ListenerType && ( values.listenerNonce === 0 || values.listenerNonce.toString() === nonce ) ) {
        if ( values.listenerCancel ) {
          values.listenerCancel()
        }
        const subj = new Subject<CacheResponse>()
        subj.subscribe( ( response ) => {
          values.listenerNonce = send( response, resourceTypes.ListenerType )
        })
        cache.createWatch( request, subj )
      } else {
        // @TODO return error
        console.log( 'DID NOT CATCH_____', typeURL )
      }

    })

    // On stream end
    call.on( 'end', () => {
      if ( logger ) {
        logger.info(
          `--END-STREAM(${streamNonce})--`
        )
      }
      // cancel watchers
      call.end()
    })
  }

  // EDS methods
  streamEndpoints: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call )
  }

  fetchEndpoints: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaEndpoints: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // CDS methods
  streamClusters: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call )
  }

  fetchClusters: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaClusters: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // LDS methods
  streamListeners: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call )
  }

  fetchListeners: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaListeners: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }

  // RDS methods
  streamRoutes: grpc.handleBidiStreamingCall<DiscoveryRequest, DiscoveryResponse> = ( call ) => {
    return this.process( call )
  }

  fetchRoutes: grpc.handleUnaryCall<DiscoveryRequest, DiscoveryResponse> = () => {
    //
  }

  deltaRoutes: grpc.handleBidiStreamingCall<DeltaDiscoveryRequest, DeltaDiscoveryResponse> = () => {
    //
  }
}
