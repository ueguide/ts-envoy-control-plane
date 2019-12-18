import { Any } from 'google-protobuf/google/protobuf/any_pb'

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/core/address.proto#envoy-api-msg-core-socketaddress
interface SocketAddress {
  protocol?: 'TCP' | 'UDP';
  address: string;
  port_value?: number;
  named_port?: string;
  resolver_name?: string;
  ipv4_compat?: boolean;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/core/address.proto#envoy-api-msg-core-address
interface Address {
  socket_address?: SocketAddress;
  pipe?: {
    path: string;
    mode?: number;
  };
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/core/base.proto#envoy-api-msg-core-locality
interface Locality {
  region?: string;
  zone?: string;
  sub_zone?: string;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/endpoint/endpoint.proto#envoy-api-msg-endpoint-endpoint
interface Endpoint {
  address: Address;
  health_check_config?: {
    port_value: number;
  };
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/endpoint/endpoint.proto#envoy-api-msg-endpoint-lbendpoint
interface LbEndpoint {
  endpoint: Endpoint;
  health_status?: 'UNKNOWN' | 'HEALTHY' | 'UNHEALTHY' | 'DRAINING' | 'TIMEOUT' | 'DEGRADED';
  metadata?: {
    filter_metadata: {
      [key: string]: any;
    };
  };
  load_balancing_weight?: number;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/endpoint/endpoint.proto#envoy-api-msg-endpoint-localitylbendpoints
interface LocalityLbEndpoints {
  locality?: Locality;
  lb_endpoints: LbEndpoint[];
  load_balancing_weight?: number;
  priority?: number;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/eds.proto#envoy-api-msg-clusterloadassignment-policy-dropoverload
interface DropOverload {
  category: string;
  drop_percentage: number;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/eds.proto#envoy-api-msg-clusterloadassignment-policy
interface Policy {
  drop_overloads?: DropOverload[];
  overprovisioning_factor?: number;
  endpoint_stale_after: number; // https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#duration
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/eds.proto#clusterloadassignment
interface ClusterLoadAssignment {
  cluster_name: string;
  endpoints: LocalityLbEndpoints[];
  policy?: Policy;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/core/base.proto#envoy-api-msg-core-transportsocket
interface TransportSocket {
  name: string;
  config?: any;
  typed_config?: Any;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/cds.proto#envoy-api-msg-cluster-transportsocketmatch
interface TransportSocketMatch {
  name?: string;
  match?: any;
  transport_socket?: TransportSocket;
}

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/cds.proto#envoy-api-enum-cluster-discoverytype
type DiscoveryType = 'STATIC' | 'STRICT_DNS' | 'LOGICAL_DNS' | 'EDS' | 'ORIGINAL_DST'

// https://www.envoyproxy.io/docs/envoy/latest/api-v2/api/v2/cds.proto#envoy-api-msg-cluster-customclustertype
interface CustomClusterType {
  name: string;
  typed_config?: Any;
}

interface Cluster {
  transport_socket_matches?: TransportSocketMatch[];
  name: string;
  alt_stat_name?: string;
  type?: DiscoveryType;
  cluster_type?: CustomClusterType;
}
