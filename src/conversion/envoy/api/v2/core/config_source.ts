import * as configSourcePB from '../../../../../envoy/api/v2/core/config_source_pb'
import * as grpcServicePB from '../../../../../envoy/api/v2/core/grpc_service_pb'
import { factory } from '../../../../factory'
import { GrpcService } from './grpc_service'

export const ApiConfigSource = factory( configSourcePB.ApiConfigSource, {
  setGrpcServicesList: ( values: any[] ): grpcServicePB.GrpcService[] => {
    return values.map( val => {
      return GrpcService( val )
    })
  }
})

export const ConfigSource = factory( configSourcePB.ConfigSource, {
  setApiConfigSource: ( val: any ): configSourcePB.ApiConfigSource => {
    return ApiConfigSource( val )
  }
})
