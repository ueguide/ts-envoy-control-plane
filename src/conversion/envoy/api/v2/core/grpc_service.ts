import * as grpcServicePB from '../../../../../envoy/api/v2/core/grpc_service_pb'
import { factory } from '../../../../factory'

export const EnvoyGrpc = factory( grpcServicePB.GrpcService.EnvoyGrpc, {})

export const GrpcService = factory( grpcServicePB.GrpcService, {
  setEnvoyGrpc: ( val: any ): grpcServicePB.GrpcService.EnvoyGrpc => {
    return EnvoyGrpc( val )
  }
})
