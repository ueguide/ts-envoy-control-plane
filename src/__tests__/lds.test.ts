import { Server } from '../pkg/server'
import { Listener } from '../envoy/api/v2/lds_pb'
import * as discoveryMessages from '../envoy/api/v2/discovery_pb'
import * as envoyCore from '../envoy/api/v2/core/base_pb'
import { createListener } from './fixtures'

describe( 'Listener Discovery Service', () => {

  const c = createListener()

  describe( 'streamListeners', () => {
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
      request.setTypeUrl( 'type.googleapis.com/envoy.api.v2.Listener' )
      request.setResponseNonce( '' )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const server = new Server( cache, console )
      server.streamListeners( call )

      requestHandler( request )
        .then( () => {
          expect( call.write ).toHaveBeenCalled()
          expect( callResponse.getVersionInfo() ).toEqual( '1' )
          expect( callResponse.getNonce() ).toEqual( '1' )
          const [ resource ] = callResponse.getResourcesList()
          const listener = resource.unpack(
            Listener.deserializeBinary,
            resource.getTypeName()
          )
          expect( listener ).not.toBeNull()
          if ( listener ) {
            expect( listener.getName() ).toEqual( 'test-listener' )
          }
          done()
        })
        .catch( err => {
          done.fail( err )
        })
    })

  })

})

