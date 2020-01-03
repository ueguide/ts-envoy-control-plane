import { NodeHash, IResponseWatch, Request, ResponseSubject } from '../../types'
import { Node } from '../../envoy/api/v2/core/base_pb'

export const IdHash: NodeHash = {
  Id: ( node: undefined | Node ): string => {
    if ( !node ) {
      return ''
    }

    return node.getId()
  }
}

export class StatusInfo {
  node: Node;
  watches: {[id: number]: IResponseWatch}
  lastWatchRequestTime: Date

  constructor( node: Node ) {
    this.node = node
    this.watches = {}
    this.lastWatchRequestTime = new Date
  }

  getNode(): Node {
    return this.node
  }

  getNumWatches(): number {
    return Object.keys( this.watches ).length
  }

  getLastWatchRequestTime(): Date {
    return this.lastWatchRequestTime
  }

  touch(): void {
    this.lastWatchRequestTime = new Date
  }

  addWatch( watchId: number, watch: IResponseWatch ): void {
    this.watches[watchId] = watch
  }

  deleteWatch( watchId: number ): void {
    delete this.watches[watchId]
  }
}

export class ResponseWatch implements IResponseWatch {
  request: Request
  response: ResponseSubject

  constructor( request: Request, response: ResponseSubject ) {
    this.request = request
    this.response = response
  }
}
