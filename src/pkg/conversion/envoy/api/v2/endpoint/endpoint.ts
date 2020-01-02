import * as endpointPB from '../../../../../../envoy/api/v2/endpoint/endpoint_pb'
import * as addressPB from '../../../../../../envoy/api/v2/core/address_pb'
import { factory } from '../../../../factory'
import { Address } from '../core'

export const Endpoint = factory( endpointPB.Endpoint, {
  setAddress: ( val: any ): addressPB.Address => {
    return Address( val )
  }
})

export const LbEndpoint = factory( endpointPB.LbEndpoint, {
  setEndpoint: ( val: any ): endpointPB.Endpoint => {
    return Endpoint( val )
  }
})

export const LocalityLbEndpoints = factory( endpointPB.LocalityLbEndpoints, {
  setLbEndpointsList: ( values: any[] ): endpointPB.LbEndpoint[] => {
    return values.map( val => {
      return LbEndpoint( val )
    })
  }
})