import * as grpc from 'grpc'
import eds from '../eds'
import * as cache from './cache'

const main = (): void => {
  const server = new grpc.Server()

  // xds.cds.registerServices( server, store )
  // xds.lds.registerServices( server, store )
  // xds.rds.registerServices( server, store )
  eds( server, cache, console )

  server.bind( '0.0.0.0:5000', grpc.ServerCredentials.createInsecure() )
  server.start()
  console.log( 'grpc server started, listening on port 5000' )
}

main()
