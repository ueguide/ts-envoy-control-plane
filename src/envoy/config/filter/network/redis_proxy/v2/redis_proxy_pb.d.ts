// package: envoy.config.filter.network.redis_proxy.v2
// file: envoy/config/filter/network/redis_proxy/v2/redis_proxy.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as envoy_api_v2_core_base_pb from "../../../../../../envoy/api/v2/core/base_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../../../../validate/validate_pb";

export class RedisProxy extends jspb.Message { 
    getStatPrefix(): string;
    setStatPrefix(value: string): void;

    getCluster(): string;
    setCluster(value: string): void;


    hasSettings(): boolean;
    clearSettings(): void;
    getSettings(): RedisProxy.ConnPoolSettings | undefined;
    setSettings(value?: RedisProxy.ConnPoolSettings): void;

    getLatencyInMicros(): boolean;
    setLatencyInMicros(value: boolean): void;


    hasPrefixRoutes(): boolean;
    clearPrefixRoutes(): void;
    getPrefixRoutes(): RedisProxy.PrefixRoutes | undefined;
    setPrefixRoutes(value?: RedisProxy.PrefixRoutes): void;


    hasDownstreamAuthPassword(): boolean;
    clearDownstreamAuthPassword(): void;
    getDownstreamAuthPassword(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setDownstreamAuthPassword(value?: envoy_api_v2_core_base_pb.DataSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisProxy.AsObject;
    static toObject(includeInstance: boolean, msg: RedisProxy): RedisProxy.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisProxy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisProxy;
    static deserializeBinaryFromReader(message: RedisProxy, reader: jspb.BinaryReader): RedisProxy;
}

export namespace RedisProxy {
    export type AsObject = {
        statPrefix: string,
        cluster: string,
        settings?: RedisProxy.ConnPoolSettings.AsObject,
        latencyInMicros: boolean,
        prefixRoutes?: RedisProxy.PrefixRoutes.AsObject,
        downstreamAuthPassword?: envoy_api_v2_core_base_pb.DataSource.AsObject,
    }


    export class ConnPoolSettings extends jspb.Message { 

        hasOpTimeout(): boolean;
        clearOpTimeout(): void;
        getOpTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setOpTimeout(value?: google_protobuf_duration_pb.Duration): void;

        getEnableHashtagging(): boolean;
        setEnableHashtagging(value: boolean): void;

        getEnableRedirection(): boolean;
        setEnableRedirection(value: boolean): void;

        getMaxBufferSizeBeforeFlush(): number;
        setMaxBufferSizeBeforeFlush(value: number): void;


        hasBufferFlushTimeout(): boolean;
        clearBufferFlushTimeout(): void;
        getBufferFlushTimeout(): google_protobuf_duration_pb.Duration | undefined;
        setBufferFlushTimeout(value?: google_protobuf_duration_pb.Duration): void;


        hasMaxUpstreamUnknownConnections(): boolean;
        clearMaxUpstreamUnknownConnections(): void;
        getMaxUpstreamUnknownConnections(): google_protobuf_wrappers_pb.UInt32Value | undefined;
        setMaxUpstreamUnknownConnections(value?: google_protobuf_wrappers_pb.UInt32Value): void;

        getEnableCommandStats(): boolean;
        setEnableCommandStats(value: boolean): void;

        getReadPolicy(): RedisProxy.ConnPoolSettings.ReadPolicy;
        setReadPolicy(value: RedisProxy.ConnPoolSettings.ReadPolicy): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): ConnPoolSettings.AsObject;
        static toObject(includeInstance: boolean, msg: ConnPoolSettings): ConnPoolSettings.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: ConnPoolSettings, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): ConnPoolSettings;
        static deserializeBinaryFromReader(message: ConnPoolSettings, reader: jspb.BinaryReader): ConnPoolSettings;
    }

    export namespace ConnPoolSettings {
        export type AsObject = {
            opTimeout?: google_protobuf_duration_pb.Duration.AsObject,
            enableHashtagging: boolean,
            enableRedirection: boolean,
            maxBufferSizeBeforeFlush: number,
            bufferFlushTimeout?: google_protobuf_duration_pb.Duration.AsObject,
            maxUpstreamUnknownConnections?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
            enableCommandStats: boolean,
            readPolicy: RedisProxy.ConnPoolSettings.ReadPolicy,
        }

        export enum ReadPolicy {
    MASTER = 0,
    PREFER_MASTER = 1,
    REPLICA = 2,
    PREFER_REPLICA = 3,
    ANY = 4,
        }

    }

    export class PrefixRoutes extends jspb.Message { 
        clearRoutesList(): void;
        getRoutesList(): Array<RedisProxy.PrefixRoutes.Route>;
        setRoutesList(value: Array<RedisProxy.PrefixRoutes.Route>): void;
        addRoutes(value?: RedisProxy.PrefixRoutes.Route, index?: number): RedisProxy.PrefixRoutes.Route;

        getCaseInsensitive(): boolean;
        setCaseInsensitive(value: boolean): void;

        getCatchAllCluster(): string;
        setCatchAllCluster(value: string): void;


        hasCatchAllRoute(): boolean;
        clearCatchAllRoute(): void;
        getCatchAllRoute(): RedisProxy.PrefixRoutes.Route | undefined;
        setCatchAllRoute(value?: RedisProxy.PrefixRoutes.Route): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): PrefixRoutes.AsObject;
        static toObject(includeInstance: boolean, msg: PrefixRoutes): PrefixRoutes.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: PrefixRoutes, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): PrefixRoutes;
        static deserializeBinaryFromReader(message: PrefixRoutes, reader: jspb.BinaryReader): PrefixRoutes;
    }

    export namespace PrefixRoutes {
        export type AsObject = {
            routesList: Array<RedisProxy.PrefixRoutes.Route.AsObject>,
            caseInsensitive: boolean,
            catchAllCluster: string,
            catchAllRoute?: RedisProxy.PrefixRoutes.Route.AsObject,
        }


        export class Route extends jspb.Message { 
            getPrefix(): string;
            setPrefix(value: string): void;

            getRemovePrefix(): boolean;
            setRemovePrefix(value: boolean): void;

            getCluster(): string;
            setCluster(value: string): void;

            clearRequestMirrorPolicyList(): void;
            getRequestMirrorPolicyList(): Array<RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy>;
            setRequestMirrorPolicyList(value: Array<RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy>): void;
            addRequestMirrorPolicy(value?: RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy, index?: number): RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy;


            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): Route.AsObject;
            static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): Route;
            static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
        }

        export namespace Route {
            export type AsObject = {
                prefix: string,
                removePrefix: boolean,
                cluster: string,
                requestMirrorPolicyList: Array<RedisProxy.PrefixRoutes.Route.RequestMirrorPolicy.AsObject>,
            }


            export class RequestMirrorPolicy extends jspb.Message { 
                getCluster(): string;
                setCluster(value: string): void;


                hasRuntimeFraction(): boolean;
                clearRuntimeFraction(): void;
                getRuntimeFraction(): envoy_api_v2_core_base_pb.RuntimeFractionalPercent | undefined;
                setRuntimeFraction(value?: envoy_api_v2_core_base_pb.RuntimeFractionalPercent): void;

                getExcludeReadCommands(): boolean;
                setExcludeReadCommands(value: boolean): void;


                serializeBinary(): Uint8Array;
                toObject(includeInstance?: boolean): RequestMirrorPolicy.AsObject;
                static toObject(includeInstance: boolean, msg: RequestMirrorPolicy): RequestMirrorPolicy.AsObject;
                static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
                static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
                static serializeBinaryToWriter(message: RequestMirrorPolicy, writer: jspb.BinaryWriter): void;
                static deserializeBinary(bytes: Uint8Array): RequestMirrorPolicy;
                static deserializeBinaryFromReader(message: RequestMirrorPolicy, reader: jspb.BinaryReader): RequestMirrorPolicy;
            }

            export namespace RequestMirrorPolicy {
                export type AsObject = {
                    cluster: string,
                    runtimeFraction?: envoy_api_v2_core_base_pb.RuntimeFractionalPercent.AsObject,
                    excludeReadCommands: boolean,
                }
            }

        }

    }

}

export class RedisProtocolOptions extends jspb.Message { 

    hasAuthPassword(): boolean;
    clearAuthPassword(): void;
    getAuthPassword(): envoy_api_v2_core_base_pb.DataSource | undefined;
    setAuthPassword(value?: envoy_api_v2_core_base_pb.DataSource): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RedisProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: RedisProtocolOptions): RedisProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RedisProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RedisProtocolOptions;
    static deserializeBinaryFromReader(message: RedisProtocolOptions, reader: jspb.BinaryReader): RedisProtocolOptions;
}

export namespace RedisProtocolOptions {
    export type AsObject = {
        authPassword?: envoy_api_v2_core_base_pb.DataSource.AsObject,
    }
}
