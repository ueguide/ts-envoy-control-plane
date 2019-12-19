import * as fs from 'fs'
import { DiscoveryRequest } from '../envoy/api/v2/discovery_pb'
import { CreateWatchResponse } from '../types'
import { envoy } from '../conversion'

const data = JSON.parse( fs.readFileSync( __dirname + '/data.json', 'utf8' ) )

const get = async ( requestParams: any ) => {
  switch ( requestParams.typeUrl ) {
    case 'type.googleapis.com/envoy.api.v2.Cluster': {
      return data.cds && data.cds[ requestParams.node.id ] || undefined
    }
    case 'type.googleapis.com/envoy.api.v2.Listener': {
      return data.lds && data.lds[ requestParams.node.id ] || undefined
    }
    case 'type.googleapis.com/envoy.api.v2.RouteConfiguration': {
      const nodeId = requestParams.node.id
      const routeNames = requestParams.resourceNamesList
      if ( !data.rds || !data.rds[ nodeId] ) {
        return undefined
      }

      const resourcesList = data.rds[ nodeId].resourcesList.filter( ( resource: any ) => {
        return routeNames.indexOf( resource.name ) > -1
      })

      if ( resourcesList.length > 0 ) {
        return {
          nonce: data.rds[ nodeId].nonce,
          resourcesList
        }
      }

      return undefined
    }
    case 'type.googleapis.com/envoy.api.v2.ClusterLoadAssignment': {
      const routeNames = requestParams.resourceNamesList

      const filtered = data.eds.filter( ( resource: any ) => {
        return routeNames.indexOf( resource.cluster_name ) > -1
      })

      const resourcesList = filtered.map( ( resource: any ) => {
        return envoy.api.v2.ClusterLoadAssignment( resource )
      })

      if ( resourcesList.length > 0 ) {
        return {
          version: '1',
          resourcesList
        }
      }

      return undefined
    }
    default:
      return undefined
  }
}

export const createWatch = async ( request: DiscoveryRequest ): Promise<CreateWatchResponse> => {
  const snapshot = await get( request.toObject() )

  if ( !snapshot || snapshot.version === request.getVersionInfo() ) {
    return {
      cacheResponse: null,
      watcher: {
        watch: () => {
          return new Promise( resolve => {
            resolve( null )
          })
        },
        cancel: () => {
          //
        }
      }
    }
  }

  return {
    cacheResponse: snapshot,
    watcher: null
  }
}
