import * as rds_pb from '../../../../../envoy/api/v2/rds_pb'
import { factory } from '../../../factory'
import { VirtualHost } from './route'

export const RouteConfiguration = factory( rds_pb.RouteConfiguration, {
  setVirtualHostsList: ( values: any[] ) => {
    return values.map( val => {
      return VirtualHost( val )
    })
  }
})
