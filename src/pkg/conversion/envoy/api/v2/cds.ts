import * as cdsPB from '../../../../../../lib/envoy/api/v2/cds_pb'
import * as edsPB from '../../../../../../lib/envoy/api/v2/eds_pb'
import * as circuitBreakerPB from '../../../../../../lib/envoy/api/v2/cluster/circuit_breaker_pb'
import * as protocolPB from '../../../../../../lib/envoy/api/v2/core/protocol_pb'
import * as addressPB from '../../../../../../lib/envoy/api/v2/core/address_pb'
import * as configSourcePB from '../../../../../../lib/envoy/api/v2/core/config_source_pb'
import * as certPB from '../../../../../../lib/envoy/api/v2/auth/cert_pb'
import { factory, duration } from '../../../factory'
import { ClusterLoadAssignment } from './eds'
import { Http2ProtocolOptions, TcpKeepalive, ConfigSource } from './core'
import { UpstreamTlsContext } from './auth'
import { CircuitBreakers } from './cluster'

export const UpstreamConnectionOptions = factory( cdsPB.UpstreamConnectionOptions, {
  setTcpKeepalive: ( val: any ): addressPB.TcpKeepalive => {
    return TcpKeepalive( val )
  }
})

export const EdsClusterConfig = factory( cdsPB.Cluster.EdsClusterConfig, {
  setEdsConfig:( val: any ): configSourcePB.ConfigSource => {
    return ConfigSource( val )
  }
})

export const Cluster = factory( cdsPB.Cluster, {
  setConnectTimeout: duration,
  setLbPolicy: ( val: string ) => {
    const types = cdsPB.Cluster.LbPolicy as any

    return types[val.toUpperCase()]
  },
  setType: ( val: string ) => {
    const types = cdsPB.Cluster.DiscoveryType as any

    return types[val.toUpperCase()]
  },
  setHttp2ProtocolOptions: ( val: any ): protocolPB.Http2ProtocolOptions => {
    return Http2ProtocolOptions( val )
  },
  setUpstreamConnectionOptions: ( val: any ): cdsPB.UpstreamConnectionOptions => {
    return UpstreamConnectionOptions( val )
  },
  setLoadAssignment: ( val: any ): edsPB.ClusterLoadAssignment => {
    return ClusterLoadAssignment( val )
  },
  setCircuitBreakers: ( val: any ): circuitBreakerPB.CircuitBreakers => {
    return CircuitBreakers( val )
  },
  setEdsClusterConfig: ( val: any ): cdsPB.Cluster.EdsClusterConfig => {
    return EdsClusterConfig( val )
  },
  setTlsContext: ( val: any ): certPB.UpstreamTlsContext => {
    return UpstreamTlsContext( val )
  }
})
