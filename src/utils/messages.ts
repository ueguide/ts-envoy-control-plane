import { Address, SocketAddress } from '../envoy/api/v2/core/address_pb'
import { ClusterLoadAssignment } from '../envoy/api/v2/eds_pb'
import { LocalityLbEndpoints, LbEndpoint, Endpoint } from '../envoy/api/v2/endpoint/endpoint_pb'
import * as t from '../types'

export const buildAddress = ( addressData: t.Address ): Address => {
	// create Address message 
  const address = new Address()

  // create SocketAddress message 
  if ( addressData.socket_address ) {
    const socketAddress = new SocketAddress()
    // assign values to socket address
    socketAddress.setAddress( addressData.socket_address.address )
    if ( addressData.socket_address.port_value ) {
      socketAddress.setPortValue( addressData.socket_address.port_value )
    }
    // assign socket address to address
    address.setSocketAddress( socketAddress )
  }
	
	return address
}

export const buildClusterLoadAssignment = ( loadAssignmentData: t.ClusterLoadAssignment ) => {
	// create ClusterLoadAssignment message
  const clusterLoadAssignment = new ClusterLoadAssignment()
  clusterLoadAssignment.setClusterName( loadAssignmentData.cluster_name )

  // build endpoints to assign
  const endpoints = loadAssignmentData.endpoints.map( function ( dataEndpoint ) {
    // create LocalityLbEndpoints message
    const localityLbEndpoints = new LocalityLbEndpoints()

    // build lbendpoints to assign 
    const lbEndpoints = dataEndpoint.lb_endpoints.map( function ( dataLbEndpoint ) {
      // create LbEndpoint message
      const lbEndpoint = new LbEndpoint()
      // create Endpoint message 
      const endpoint = new Endpoint()
      // create Address message 
      const address = buildAddress( dataLbEndpoint.endpoint.address )
      // assign address to endpoint
      endpoint.setAddress( address )
      // assign endpoint to lb endpoint
      lbEndpoint.setEndpoint( endpoint )

      return lbEndpoint
    })
    // assign lb endpoints to locality lb endpoint
    localityLbEndpoints.setLbEndpointsList( lbEndpoints )

    return localityLbEndpoints
  }) 

  // assign endpoints to cluster
	clusterLoadAssignment.setEndpointsList( endpoints )
	
	return clusterLoadAssignment
}
