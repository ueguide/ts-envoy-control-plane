import * as route_pb from '../../../../../envoy/api/v2/route/route_pb'
import { factory } from '../../../../factory'
import { UInt32Value } from 'google-protobuf/google/protobuf/wrappers_pb'
import * as jspb from 'google-protobuf'
import { Struct } from 'google-protobuf/google/protobuf/struct_pb'
import { Any } from 'google-protobuf/google/protobuf/any_pb'

// https://github.com/protocolbuffers/protobuf/blob/master/js/map.js#L59
class ExtendedRoute extends route_pb.Route {
  setPerFilterConfig( value: jspb.Map<string, Struct> ): void {
    jspb.Message.setWrapperField<route_pb.Route>( this, 8, value )
  }
  setTypedPerFilterConfig( value: jspb.Map<string, Any> ): void {
    jspb.Message.setWrapperField( this, 13, value )
  }
}

export const GrpcRouteMatchOptions = factory( route_pb.RouteMatch.GrpcRouteMatchOptions, {})

export const RouteMatch = factory( route_pb.RouteMatch, {
  setGrpc: ( val: any ) => {
    return GrpcRouteMatchOptions( val )
  }
})

export const RouteAction = factory( route_pb.RouteAction, {})

export const Route = factory( ExtendedRoute, {
  setMatch: ( val: any ) => {
    return RouteMatch( val )
  },
  setRoute: ( val: any ) => {
    return RouteAction( val )
  },
  setPerFilterConfig: ( val: any ) => {
    const m = new jspb.Map<string, Struct>( [], Struct )
    for ( const key in val ) {
      const s = Struct.fromJavaScript( val[key] )
      m.set( key, s )
    }

    return m
  }

})

export const RetryPolicy = factory( route_pb.RetryPolicy, {
  setNumRetries: ( val: number ) => {
    const i = new UInt32Value
    i.setValue( val )

    return i
  }
})

export const VirtualHost = factory( route_pb.VirtualHost, {
  setDomainsList: ( values: string[] ) => {
    return values
  },
  setRetryPolicy: ( val: any ) => {
    return RetryPolicy( val )
  },
  setRoutesList: ( values: any[] ) => {
    return values.map( val => {
      return Route( val )
    })
  }
})
