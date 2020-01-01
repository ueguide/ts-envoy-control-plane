import * as grpc from 'grpc'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { DiscoveryRequest, DiscoveryResponse, DeltaDiscoveryRequest, DeltaDiscoveryResponse } from '../../envoy/api/v2/discovery_pb'
import { CacheManager, Logger, Watcher, CacheResponse } from '../../types'

const createResponse = ( cacheResponse: CacheResponse, typeURL: string ): DiscoveryResponse => {
  // console.log( 'TYPE>>>', typeURL )
  const { version, resourcesList } = cacheResponse

  // build discovery response
  const response = new DiscoveryResponse()
  response.setVersionInfo( version.toString() )
  response.setTypeUrl( typeURL )
  const packedResources = resourcesList.map( ( msg ) => {
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
  cache: CacheManager;
  logger: null | Logger;

  constructor( cache: CacheManager, logger: null | Logger = null ) {
    this.cache = cache
    this.logger = logger
  }

  process( call: grpc.ServerDuplexStream<DiscoveryRequest, DiscoveryResponse> ): void {
    const { cache, logger } = this
    // unique nonce generator for req-resp pairs per xDS stream; the server
    // ignores stale nonces. nonce is only modified within send() function.
    let streamNonce = 0

    // store cancel watcher function
    let streamWatcher: null | Watcher
    // watcher setter function
    const assignWatcher = ( val: null | Watcher ): void => {
      // cancel current watcher if set
      if ( streamWatcher ) {
        streamWatcher.cancel()
      }

      streamWatcher = val
    }

    // sends a serialized protobuf response
    const send = ( cacheResponse: CacheResponse, request: DiscoveryRequest ): void => {
      // create DiscoveryResponse from cache service response
      const response = createResponse( cacheResponse, request.getTypeUrl() )

      // increment nonce
      streamNonce++
      response.setNonce( streamNonce.toString() )

      // write to stream
      call.write( response )
      // log
      if ( logger ) {
        const node = request.getNode()
        logger.info(
          '--RESPONSE--',
          `Node=${node && node.getId()}`,
          'T=EDS',
          `V=${response.getVersionInfo()}`,
          `N=${streamNonce.toString()}`,
          request.getResourceNamesList()
        )
      }
    }

    // On data received on stream
    call.on( 'data', async ( request: DiscoveryRequest ) => {
      // get the current request nonce
      const nonce = request.getResponseNonce()
      const node = request.getNode()
      // log the request
      if ( logger ) {
        logger.info(
          '--REQUEST--',
          `Node=${node && node.getId()}`,
          'T=EDS',
          `V=${request.getVersionInfo()}`,
          `N=${nonce}`,
          request.getResourceNamesList()
        )
      }

      // prevent responses to stale nonces
      // if request nonce or streamNonce are empty, this is a first time request for the envoy node
      // or the management server (eg a deployment rollover)
      if ( nonce === '' || streamNonce === 0 || nonce === streamNonce.toString() ) {
        // create watcher - returns cache response or watcher promise to return
        const { cacheResponse, watcher } = await cache.createWatch( request )
        // set watcher for this stream
        assignWatcher( watcher )

        if ( cacheResponse ) {
          send( cacheResponse, request )
        } else if ( watcher ) {
          if ( logger ) {
            logger.info(
              '--WAIT-FOR-RESPONSE--',
              `Node=${node && node.getId()}`,
              'T=EDS',
              `V=${request.getVersionInfo()}`,
              `N=${nonce}`,
              request.getResourceNamesList()
            )
          }
          const awaitedResponse = await watcher.watch()
          if ( awaitedResponse ) {
            // reset streamWatcher
            assignWatcher( null )
            // send response
            send( awaitedResponse, request )
          } else {
            // do nothing
          }
        }

      } else {
        // if stale and logger
        if ( logger ) {
          logger.info(
            `--STALE-NONCE(${streamNonce})--`,
            `Node=${node && node.getId()}`,
            'T=EDS',
            `V=${request.getVersionInfo()}`,
            `N=${nonce}`,
            request.getResourceNamesList()
          )
        }
      }

    })

    // On stream end
    call.on( 'end', () => {
      if ( logger ) {
        logger.info(
          `--END-STREAM(${streamNonce})--`
        )
      }
      // cancel current watcher if set
      if ( streamWatcher ) {
        streamWatcher.cancel()
      }
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
