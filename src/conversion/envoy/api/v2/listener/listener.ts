import * as listenerPB from '../../../../../envoy/api/v2/listener/listener_pb'
import * as http_connection_manager_pb from '../../../../../envoy/config/filter/network/http_connection_manager/v2/http_connection_manager_pb'
import { factory } from '../../../../factory'
import { Any } from 'google-protobuf/google/protobuf/any_pb'
import { filter } from '../../../config'

export const Filter = factory( listenerPB.Filter, {
  setTypedConfig: ( val: any ): Any => {
    const any = new Any

    switch ( val['@type'] ) {
      case 'type.googleapis.com/envoy.config.filter.network.http_connection_manager.v2.HttpConnectionManager': {
        const msg: http_connection_manager_pb.HttpConnectionManager = filter.network.http_connection_manager.v2.HttpConnectionManager( val )
        const packType = val['@type'].replace( 'type.googleapis.com/', '' )
        any.pack( msg.serializeBinary(), packType )
        break
      }
      default: {
        // do nothing
      }
    }

    return any
  }
})

export const FilterChain = factory( listenerPB.FilterChain, {
  setFiltersList: ( values: any[] ): listenerPB.Filter[] => {
    return values.map( val => {
      return Filter( val )
    })
  }
})
