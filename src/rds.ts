import * as grpc from 'grpc'
import { RouteDiscoveryServiceService, IRouteDiscoveryServiceServer } from './envoy/api/v2/rds_grpc_pb'
import { Server } from './server'

export const registerServices = ( grpcServer: grpc.Server, server: Server ): void => {
  grpcServer.addService<IRouteDiscoveryServiceServer>(
    RouteDiscoveryServiceService,
    {
      streamRoutes: server.streamRoutes,
      fetchRoutes: server.fetchRoutes,
      deltaRoutes: server.deltaRoutes
    }
  )
}

export default registerServices
