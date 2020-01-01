import * as grpcServicePB from '../../../../../../envoy/api/v2/core/grpc_service_pb'
import { factory } from '../../../../factory'
import { Duration } from 'google-protobuf/google/protobuf/duration_pb'

export const EnvoyGrpc = factory( grpcServicePB.GrpcService.EnvoyGrpc, {})

export const GrpcService = factory( grpcServicePB.GrpcService, {
  setEnvoyGrpc: ( val: any ): grpcServicePB.GrpcService.EnvoyGrpc => {
    return EnvoyGrpc( val )
  },
  setTimeout: ( val: string ): Duration => {
    const duration = new Duration
    if ( ( /s/ ).test( val ) ) {
      duration.setSeconds( parseFloat( val.replace( /s/, '' ) ) )
    } else {
      duration.setNanos( parseFloat( val ) )
    }

    return duration
  }
})
