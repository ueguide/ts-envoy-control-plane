import { Message } from 'google-protobuf'
import { Subject } from 'rxjs'
import { DiscoveryRequest } from '../envoy/api/v2/discovery_pb'
import { Node } from '../envoy/api/v2/core/base_pb'

// aliases
export type Request = DiscoveryRequest
export type Resource = Message

// Cache types
export type ConfigWatcher = {
  createWatch( request: Request, subj: Subject<CacheResponse> ): null | CancelWatch;
}

export type CancelWatch = () => void;

export type Cache = ConfigWatcher & {
  fetch( request: Request ): CacheResponse;
}

export type CacheResponse = {
  request: Request;
  version: string;
  resources: Resource[];
}

// snapshot types
export type Resources = {
  version: string;
  items: {
    [key: string]: Resource;
  };
}

// Status
export type NodeHash = {
  Id: ( node: undefined | Node ) => string;
}

export type IStatusInfo = {
  getNode: () => Node;
  getNumWatches: () => number;
  getLastWatchRequestTime: () => Date;
  touch: () => void;
  addWatch: ( watchId: number, watch: IResponseWatch ) => void;
  deleteWatch: ( watchId: number ) => void;
}

export type IResponseWatch = {
  request: Request;
  response: ResponseSubject;
}

// server types
export type ResponseSubject = Subject<CacheResponse>
export type ServerStreamValues = {
  endpoints: ResponseSubject;
  clusters: ResponseSubject;
  routes: ResponseSubject;
  listeners: ResponseSubject;
  secrets: ResponseSubject;
  runtimes: ResponseSubject;

  endpointCancel: null | CancelWatch;
  clusterCancel: null | CancelWatch;
  routeCancel: null | CancelWatch;
  listenerCancel: null | CancelWatch;
  secretCancel: null | CancelWatch;
  runtimeCancel: null | CancelWatch;

  endpointNonce: number;
  clusterNonce: number;
  routeNonce: number;
  listenerNonce: number;
  secretNonce: number;
  runtimeNonce: number;
}





export interface Logger {
  info( ...args: any[] ): void;
  debug( ...args: any[] ): void;
  warn( ...args: any[] ): void;
}





