import { Server } from '../server'
import { RouteConfiguration } from '../envoy/api/v2/rds_pb'
import * as discoveryMessages from '../envoy/api/v2/discovery_pb'
import * as envoyCore from '../envoy/api/v2/core/base_pb'
import { createRoute } from './fixtures'

describe( 'Route Discovery Service', () => {

  const c = createRoute()

  describe( 'streamRoutes', () => {
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
              resourcesList: [ c ]
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
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.Route' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamRoutes( call )

      requestHandler( request )
        .then( () => {
          expect( call.write ).toHaveBeenCalled()
          expect( callResponse.getVersionInfo() ).toEqual( '1' )
          expect( callResponse.getNonce() ).toEqual( '1' )
          const [ resource ] = callResponse.getResourcesList()
          const routeConfig = resource.unpack(
            RouteConfiguration.deserializeBinary,
            resource.getTypeName()
          )
          expect( routeConfig ).not.toBeNull()
          if ( routeConfig ) {
            expect( routeConfig.getName() ).toEqual( 'local_route' )
          }
          done()
        })
        .catch( err => {
          done.fail( err )
        })
    })

  })

})

