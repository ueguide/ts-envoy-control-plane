const apiTypePrefix = 'type.googleapis.com/envoy.api.v2.'
const discoveryTypePrefix = 'type.googleapis.com/envoy.service.discovery.v2.'

export const EndpointType = apiTypePrefix + 'ClusterLoadAssignment'
export const ClusterType = apiTypePrefix + 'Cluster'
export const RouteType = apiTypePrefix + 'RouteConfiguration'
export const ListenerType = apiTypePrefix + 'Listener'
export const SecretType = apiTypePrefix + 'auth.Secret'
export const RuntimeType = discoveryTypePrefix + 'Runtime'
// AnyType is used only by ADS
export const AnyType = ''
