import * as grpc from 'grpc'
import { ListenerDiscoveryServiceService, IListenerDiscoveryServiceServer } from '../../envoy/api/v2/lds_grpc_pb'
import { Server } from '.'

export const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IListenerDiscoveryServiceServer>(
    ListenerDiscoveryServiceService,
    {
      streamListeners: server.streamListeners,
      fetchListeners: server.fetchListeners,
      deltaListeners: server.deltaListeners
    }
  )
}

export default registerServices
