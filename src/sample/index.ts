import * as grpc from 'grpc'
import eds from '../pkg/server/eds'
import lds from '../pkg/server/lds'
import rds from '../pkg/server/rds'
import cds from '../pkg/server/cds'
import SnapshotCache from '../pkg/cache'
import Snapshot from '../pkg/cache/snapshot'
import { IdHash } from '../pkg/cache/status'
import { Server } from '../pkg/server'
import * as configs from './data'
import { envoy } from '../pkg/conversion'

const main = (): void => {
  const cache = new SnapshotCache( false, IdHash, console )

  // seed cache snapshots
  const prox1Snap = new Snapshot( '1', [ envoy.api.v2.ClusterLoadAssignment( configs._eds_bbc ), envoy.api.v2.ClusterLoadAssignment( configs._edge ) ] )
  cache.setSnapshot( 'proxy-1', prox1Snap )

  const prox2snap = new Snapshot( '1',
    [ envoy.api.v2.ClusterLoadAssignment( configs._edge ) ],
    [ envoy.api.v2.Cluster( configs._cluster1 ) ],
    [ envoy.api.v2.RouteConfiguration( configs._route1 ) ],
    [ envoy.api.v2.Listener( configs._listener1 ) ]
  )
  cache.setSnapshot( 'proxy-2', prox2snap )

  const grpcServer = new grpc.Server()
  const server = new Server( cache, console )

  eds( grpcServer, server )
  lds( grpcServer, server )
  rds( grpcServer, server )
  cds( grpcServer, server )

  grpcServer.bind( '0.0.0.0:5000', grpc.ServerCredentials.createInsecure() )
  grpcServer.start()
  console.log( 'grpc server started, listening on port 5000' )
}

main()
