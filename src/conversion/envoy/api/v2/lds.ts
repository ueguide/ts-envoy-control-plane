import * as ldsPB from '../../../../envoy/api/v2/lds_pb'
import * as listenerPB from '../../../../envoy/api/v2/listener/listener_pb'
import * as addressPB from '../../../../envoy/api/v2/core/address_pb'
import { factory } from '../../../factory'
import { FilterChain } from './listener'
import { Address } from './core'

export const Listener = factory( ldsPB.Listener, {
  setAddress: ( val: any ): addressPB.Address => {
    return Address( val )
  },
  setFilterChainsList: ( values: any[] ): listenerPB.FilterChain[] => {
    return values.map( val => {
      return FilterChain( val )
    })
  }
})
