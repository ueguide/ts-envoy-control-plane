import * as edsPB from '../../../../envoy/api/v2/eds_pb'
import * as endpointPB from '../../../../envoy/api/v2/endpoint/endpoint_pb'
import { factory } from '../../../factory'
import { LocalityLbEndpoints } from './endpoint'

export const ClusterLoadAssignment = factory( edsPB.ClusterLoadAssignment, {
  setEndpointsList: ( values: any[] ): endpointPB.LocalityLbEndpoints[] => {
    return values.map( val => {
      return LocalityLbEndpoints( val )
    })
  }
})
