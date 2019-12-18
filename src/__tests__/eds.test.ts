import { Server } from '../server'
import { ClusterLoadAssignment } from '../envoy/api/v2/eds_pb'
import * as discoveryMessages from '../envoy/api/v2/discovery_pb'
import * as envoyCore from '../envoy/api/v2/core/base_pb'
import { createClusterLoadAssignment } from './fixtures'

describe( 'Endpoint Discovery Service', () => {

  const cla = createClusterLoadAssignment()

  describe( 'streamEndpoints', () => {
    let requestHandler: ( request: discoveryMessages.DiscoveryRequest ) => Promise<void>
    let callResponse: discoveryMessages.DiscoveryResponse
    let call: any

    beforeEach( () => {
      call = {
        on: jest.fn().mockImplementation( ( event, cb ) => {
          if ( event === 'data' ) {
            requestHandler = cb
          }
        }),
        write: jest.fn().mockImplementation( response => {
          callResponse = response
        })
      }
    })

    test( 'it writes response on found node', ( done ) => {
      const cache = {
        createWatch: jest.fn().mockImplementation( () => {
          return {
            cacheResponse: {
              version: '1',
              resourcesList: [ cla ]
            },
            watcher: null
          }
        })
      }

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.ClusterLoadAssignment' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamEndpoints( call )

      requestHandler( request )
        .then( () => {
          expect( call.write ).toHaveBeenCalled()
          expect( callResponse.getVersionInfo() ).toEqual( '1' )
          expect( callResponse.getNonce() ).toEqual( '1' )
          const [ resource ] = callResponse.getResourcesList()
          const clusterAssignment = resource.unpack(
            ClusterLoadAssignment.deserializeBinary,
            resource.getTypeName()
          )
          expect( clusterAssignment ).not.toBeNull()
          if ( clusterAssignment ) {
            expect( clusterAssignment.getClusterName() ).toEqual( 'remote_cluster' )
          }

          done()
        })
        .catch( err => {
          done.fail( err )
        })
    })

    test( 'calls watcher if no cache response, returns response once fulfilled', ( done ) => {
      const cache = {
        createWatch: jest.fn().mockImplementation( () => {
          return {
            cacheResponse: null,
            watcher: {
              watch: jest.fn().mockImplementation( () => {
                return {
                  version: '2',
                  resourcesList: [ cla ]
                }
              }),
              cancel: jest.fn()
            }
          }
        })
      }

      const request = new discoveryMessages.DiscoveryRequest()
      request.setVersionInfo( '1' )
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.ClusterLoadAssignment' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamEndpoints( call )

      requestHandler( request )
        .then( () => {
          expect( call.write ).toHaveBeenCalled()

          expect( callResponse.getVersionInfo() ).toEqual( '2' )
          const [ resource ] = callResponse.getResourcesList()
          const clusterAssignment = resource.unpack(
            ClusterLoadAssignment.deserializeBinary,
            resource.getTypeName()
          )
          expect( clusterAssignment ).not.toBeNull()
          if ( clusterAssignment ) {
            expect( clusterAssignment.getClusterName() ).toEqual( 'remote_cluster' )
          }
          done()
        })
        .catch( err => {
          done.fail( err )
        })
    })

  })

})

