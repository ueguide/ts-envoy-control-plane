import { ClusterLoadAssignment } from '../envoy/api/v2/eds_pb'
import { LocalityLbEndpoints, LbEndpoint, Endpoint } from '../envoy/api/v2/endpoint/endpoint_pb'
import { Address, SocketAddress } from '../envoy/api/v2/core/address_pb'
import { Cluster } from '../envoy/api/v2/cds_pb'

export const createClusterLoadAssignment = (): ClusterLoadAssignment => {
  const cla = new ClusterLoadAssignment
  cla.setClusterName( 'remote_cluster' )
  const sa = new SocketAddress
  sa.setAddress( '127.0.0.1' )
  sa.setPortValue( 3000 )
  const a = new Address
  a.setSocketAddress( sa )
  const e = ( new Endpoint )
  e.setAddress( a )
  const lb = ( new LbEndpoint )
  lb.setEndpoint( e )
  const lbs = ( new LocalityLbEndpoints )
  lbs.setLbEndpointsList( [ lb ] )
  cla.setEndpointsList( [ lbs ] )

  return cla
}

export const createCluster = (): Cluster => {
  const c = new Cluster
  c.setName( 'remote_cluster' )
  c.setType( Cluster.DiscoveryType.STRICT_DNS )
  c.setLbPolicy( Cluster.LbPolicy.ROUND_ROBIN )
  c.setLoadAssignment( createClusterLoadAssignment() )

  return c
}
