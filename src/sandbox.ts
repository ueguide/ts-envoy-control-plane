import { envoy } from './conversion'

const data = {
  'cluster_name': 'bbc',
  'endpoints': [
    {
      'lb_endpoints': [
        {
          'endpoint': {
            'address': {
              'socket_address': {
                'address': '199.232.32.81',
                'port_value': '80'
              }
            }
          }
        }
      ]
    }
  ]
}

console.log( JSON.stringify( envoy.api.v2.ClusterLoadAssignment( data ).toObject(), null, 2 ) )
