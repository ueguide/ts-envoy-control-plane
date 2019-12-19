import * as grpc from 'grpc'
import eds from '../eds'
import * as cache from './cache'
import { Server } from '../server'

const main = (): void => {
  const grpcServer = new grpc.Server()
  const server = new Server( cache, console )

  // xds.cds.registerServices( server, store )
  // xds.lds.registerServices( server, store )
  // xds.rds.registerServices( server, store )
  eds( grpcServer, server )

  grpcServer.bind( '0.0.0.0:5000', grpc.ServerCredentials.createInsecure() )
  grpcServer.start()
  console.log( 'grpc server started, listening on port 5000' )
}

main()
