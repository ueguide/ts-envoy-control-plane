import { Message } from 'google-protobuf'
import { Subject } from 'rxjs'
import { DiscoveryRequest } from '../envoy/api/v2/discovery_pb'

// aliases
export type Request = DiscoveryRequest
export type Resource = Message

// Cache types

export type ConfigWatcher = {
  createWatch( request: Request, subj: Subject<CacheResponse> ): CancelWatch;
}

export type CancelWatch = () => void;

export type Cache = ConfigWatcher & {
  fetch( request: Request ): Promise<CacheResponse>;
}

export type CacheResponse = {
  request: Request;
  version: number;
  resources: Resource[];
}


export type ServerStreamValues = {
  // endpoints: null | Subject<CacheResponse>;
  // clusters: null | Subject<CacheResponse>;
  // routes: null | Subject<CacheResponse>;
  // listeners: null | Subject<CacheResponse>;
  // secrets: null | Subject<CacheResponse>;
  // runtimes: null | Subject<CacheResponse>;

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
}





