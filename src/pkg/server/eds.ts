import * as grpc from 'grpc'
import { EndpointDiscoveryServiceService, IEndpointDiscoveryServiceServer } from '../../envoy/api/v2/eds_grpc_pb'
import { Server } from '.'

export const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IEndpointDiscoveryServiceServer>(
    EndpointDiscoveryServiceService,
    {
      streamEndpoints: server.streamEndpoints,
      fetchEndpoints: server.fetchEndpoints,
      deltaEndpoints: server.deltaEndpoints
    }
  )
}

export default registerServices
