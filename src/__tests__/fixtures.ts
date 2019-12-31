import { ClusterLoadAssignment } from '../envoy/api/v2/eds_pb'
import { LocalityLbEndpoints, LbEndpoint, Endpoint } from '../envoy/api/v2/endpoint/endpoint_pb'
import { Address, SocketAddress } from '../envoy/api/v2/core/address_pb'
import { Cluster } from '../envoy/api/v2/cds_pb'
import { Listener } from '../envoy/api/v2/lds_pb'
import { envoy } from '../conversion'

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

export const createListener = (): Listener => {
  const data = {
    'name': 'test-listener',
    'address': {
      'socket_address': {
        'address': '0.0.0.0',
        'port_value': '80'
      }
    },
    'filter_chains': [
      {
        'filters': [
          {
            'name': 'envoy.http_connection_manager',
            'typed_config': {
              '@type': 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager',
              'codec_type': 'AUTO',
              'stat_prefix': 'ingress_http',
              'use_remote_address': true,
              'idle_timeout': '1s',
              'http_filters': [
                {
                  'name': 'envoy.router',
                  'config': {}
                }
              ],
              'route_config': {
                'name': 'local_route',
                'virtual_hosts': [
                  {
                    'name': 'service',
                    'domains': [ '*' ],
                    'routes': [
                      {
                        'match': {
                          'prefix': '/route/a',
                          'grpc': {}
                        },
                        'route': {
                          'cluster': 'service-a'
                        }
                      }
                    ]
                  }
                ]
              }
            }
          }
        ]
      }
    ]
  }
  const msg: Listener = envoy.api.v2.Listener( data )

  return msg
}
