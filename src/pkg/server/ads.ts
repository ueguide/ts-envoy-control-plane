import * as grpc from 'grpc'
import { AggregatedDiscoveryServiceService, IAggregatedDiscoveryServiceServer } from '../../envoy/service/discovery/v2/ads_grpc_pb'
import { Server } from '.'

export const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IAggregatedDiscoveryServiceServer>(
    AggregatedDiscoveryServiceService,
    {
      streamAggregatedResources: server.streamAggregatedResources,
      deltaAggregatedResources: server.deltaAggregatedResources
    }
  )
}

export default registerServices
