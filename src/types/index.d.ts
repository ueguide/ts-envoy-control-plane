import { Message } from 'google-protobuf'
import { DiscoveryRequest } from '../envoy/api/v2/discovery_pb'

export type ResourcesList = Message[]

export interface CacheResponse {
  version: number;
  resourcesList: ResourcesList;
}

export interface Watcher {
  watch(): Promise<null | CacheResponse>;
  cancel(): void;
}

export interface CreateWatchResponse {
  cacheResponse: null | CacheResponse;
  watcher: null | Watcher;
}

export interface CacheManager {
  createWatch( request: DiscoveryRequest ): Promise<CreateWatchResponse>;
}

export interface Logger {
  info( ...args: any[] ): void;
}





