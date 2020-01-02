import SnapshotCache from '../pkg/cache'
import { IdHash } from '../pkg/cache/status'
import Snapshot from '../pkg/cache/snapshot'
import { EndpointType } from '../pkg/cache/resource'
import { createClusterLoadAssignment } from './fixtures'
import * as discoveryMessages from '../envoy/api/v2/discovery_pb'
import * as envoyCore from '../envoy/api/v2/core/base_pb'
import { Subject } from 'rxjs'
import { CacheResponse } from '../types'
import { ClusterLoadAssignment } from '../envoy/api/v2/eds_pb'

describe( 'SnapshotCache', () => {
  describe( 'createWatch', () => {
    test( 'it should fail if no node set', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const request = new discoveryMessages.DiscoveryRequest()
      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      try {
        cache.createWatch( request, subj )
        expect( true ).toBe( false )
      } catch ( e ) {
        expect( e.message ).toEqual( 'Node missing in request' )
      }
      expect( observer ).not.toHaveBeenCalled()
    })
    test( 'it responds to watch', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      subj.subscribe( response => {
        expect( response.version ).toEqual( '1' )
        expect( response.resources ).toHaveLength( 1 )
        expect( response.resources[0] instanceof ClusterLoadAssignment ).toBe( true )
      })

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()

    })
    test( 'it responds to watch ads', () => {
      const cache = new SnapshotCache( true, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()
      expect( observer ).toHaveBeenCalled()
    })

    test( 'it doesnt respond to watch ads if mismatch', () => {
      const cache = new SnapshotCache( true, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'different_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).toBeNull()
      expect( observer ).not.toHaveBeenCalled()
    })

    test( 'it creates watch if no snapshot', () => {
      const cache = new SnapshotCache( false, IdHash, console )

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).not.toBeNull()
      expect( typeof cancel ).toEqual( 'function' )
      expect( observer ).not.toHaveBeenCalled()
      expect( cache.status['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 1 )
    })

    test( 'it creates watch if snapshot of same version', () => {
      const cache = new SnapshotCache( false, IdHash, console )
      const snap = new Snapshot( '1', [ createClusterLoadAssignment() ] )
      cache.snapshots['test-node'] = snap

      const request = new discoveryMessages.DiscoveryRequest()
      const node = new envoyCore.Node()
      node.setId( 'test-node' )
      node.setCluster( 'test-cluster' )
      request.setNode( node )
      request.setVersionInfo( '1' )
      request.setTypeUrl( EndpointType )
      request.setResourceNamesList( [ 'remote_cluster' ] )

      const subj = new Subject<CacheResponse>()
      const observer = jest.fn()
      subj.subscribe( observer )

      // test
      const cancel = cache.createWatch( request, subj )
      expect( cancel ).not.toBeNull()
      expect( typeof cancel ).toEqual( 'function' )
      expect( observer ).not.toHaveBeenCalled()
      expect( cache.status['test-node'] ).not.toBeNull()
      expect( cache.status['test-node'].getNumWatches() ).toEqual( 1 )

    })
  }) // end createWatch

})
