// package: envoy.api.v2.core
// file: envoy/api/v2/core/protocol.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as validate_validate_pb from "../../../../validate/validate_pb";

export class TcpProtocolOptions extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TcpProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: TcpProtocolOptions): TcpProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TcpProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TcpProtocolOptions;
    static deserializeBinaryFromReader(message: TcpProtocolOptions, reader: jspb.BinaryReader): TcpProtocolOptions;
}

export namespace TcpProtocolOptions {
    export type AsObject = {
    }
}

export class HttpProtocolOptions extends jspb.Message { 

    hasIdleTimeout(): boolean;
    clearIdleTimeout(): void;
    getIdleTimeout(): google_protobuf_duration_pb.Duration | undefined;
    setIdleTimeout(value?: google_protobuf_duration_pb.Duration): void;


    hasMaxConnectionDuration(): boolean;
    clearMaxConnectionDuration(): void;
    getMaxConnectionDuration(): google_protobuf_duration_pb.Duration | undefined;
    setMaxConnectionDuration(value?: google_protobuf_duration_pb.Duration): void;


    hasMaxHeadersCount(): boolean;
    clearMaxHeadersCount(): void;
    getMaxHeadersCount(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxHeadersCount(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HttpProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: HttpProtocolOptions): HttpProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HttpProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HttpProtocolOptions;
    static deserializeBinaryFromReader(message: HttpProtocolOptions, reader: jspb.BinaryReader): HttpProtocolOptions;
}

export namespace HttpProtocolOptions {
    export type AsObject = {
        idleTimeout?: google_protobuf_duration_pb.Duration.AsObject,
        maxConnectionDuration?: google_protobuf_duration_pb.Duration.AsObject,
        maxHeadersCount?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
    }
}

export class Http1ProtocolOptions extends jspb.Message { 

    hasAllowAbsoluteUrl(): boolean;
    clearAllowAbsoluteUrl(): void;
    getAllowAbsoluteUrl(): google_protobuf_wrappers_pb.BoolValue | undefined;
    setAllowAbsoluteUrl(value?: google_protobuf_wrappers_pb.BoolValue): void;

    getAcceptHttp10(): boolean;
    setAcceptHttp10(value: boolean): void;

    getDefaultHostForHttp10(): string;
    setDefaultHostForHttp10(value: string): void;


    hasHeaderKeyFormat(): boolean;
    clearHeaderKeyFormat(): void;
    getHeaderKeyFormat(): Http1ProtocolOptions.HeaderKeyFormat | undefined;
    setHeaderKeyFormat(value?: Http1ProtocolOptions.HeaderKeyFormat): void;

    getEnableTrailers(): boolean;
    setEnableTrailers(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Http1ProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: Http1ProtocolOptions): Http1ProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Http1ProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Http1ProtocolOptions;
    static deserializeBinaryFromReader(message: Http1ProtocolOptions, reader: jspb.BinaryReader): Http1ProtocolOptions;
}

export namespace Http1ProtocolOptions {
    export type AsObject = {
        allowAbsoluteUrl?: google_protobuf_wrappers_pb.BoolValue.AsObject,
        acceptHttp10: boolean,
        defaultHostForHttp10: string,
        headerKeyFormat?: Http1ProtocolOptions.HeaderKeyFormat.AsObject,
        enableTrailers: boolean,
    }


    export class HeaderKeyFormat extends jspb.Message { 

        hasProperCaseWords(): boolean;
        clearProperCaseWords(): void;
        getProperCaseWords(): Http1ProtocolOptions.HeaderKeyFormat.ProperCaseWords | undefined;
        setProperCaseWords(value?: Http1ProtocolOptions.HeaderKeyFormat.ProperCaseWords): void;


        getHeaderFormatCase(): HeaderKeyFormat.HeaderFormatCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): HeaderKeyFormat.AsObject;
        static toObject(includeInstance: boolean, msg: HeaderKeyFormat): HeaderKeyFormat.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: HeaderKeyFormat, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): HeaderKeyFormat;
        static deserializeBinaryFromReader(message: HeaderKeyFormat, reader: jspb.BinaryReader): HeaderKeyFormat;
    }

    export namespace HeaderKeyFormat {
        export type AsObject = {
            properCaseWords?: Http1ProtocolOptions.HeaderKeyFormat.ProperCaseWords.AsObject,
        }


        export class ProperCaseWords extends jspb.Message { 

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): ProperCaseWords.AsObject;
            static toObject(includeInstance: boolean, msg: ProperCaseWords): ProperCaseWords.AsObject;
            static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
            static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
            static serializeBinaryToWriter(message: ProperCaseWords, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): ProperCaseWords;
            static deserializeBinaryFromReader(message: ProperCaseWords, reader: jspb.BinaryReader): ProperCaseWords;
        }

        export namespace ProperCaseWords {
            export type AsObject = {
            }
        }


        export enum HeaderFormatCase {
            HEADERFORMAT_NOT_SET = 0,
        
    PROPER_CASE_WORDS = 1,

        }

    }

}

export class Http2ProtocolOptions extends jspb.Message { 

    hasHpackTableSize(): boolean;
    clearHpackTableSize(): void;
    getHpackTableSize(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setHpackTableSize(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMaxConcurrentStreams(): boolean;
    clearMaxConcurrentStreams(): void;
    getMaxConcurrentStreams(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxConcurrentStreams(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasInitialStreamWindowSize(): boolean;
    clearInitialStreamWindowSize(): void;
    getInitialStreamWindowSize(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setInitialStreamWindowSize(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasInitialConnectionWindowSize(): boolean;
    clearInitialConnectionWindowSize(): void;
    getInitialConnectionWindowSize(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setInitialConnectionWindowSize(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getAllowConnect(): boolean;
    setAllowConnect(value: boolean): void;

    getAllowMetadata(): boolean;
    setAllowMetadata(value: boolean): void;


    hasMaxOutboundFrames(): boolean;
    clearMaxOutboundFrames(): void;
    getMaxOutboundFrames(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxOutboundFrames(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMaxOutboundControlFrames(): boolean;
    clearMaxOutboundControlFrames(): void;
    getMaxOutboundControlFrames(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxOutboundControlFrames(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMaxConsecutiveInboundFramesWithEmptyPayload(): boolean;
    clearMaxConsecutiveInboundFramesWithEmptyPayload(): void;
    getMaxConsecutiveInboundFramesWithEmptyPayload(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxConsecutiveInboundFramesWithEmptyPayload(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMaxInboundPriorityFramesPerStream(): boolean;
    clearMaxInboundPriorityFramesPerStream(): void;
    getMaxInboundPriorityFramesPerStream(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxInboundPriorityFramesPerStream(value?: google_protobuf_wrappers_pb.UInt32Value): void;


    hasMaxInboundWindowUpdateFramesPerDataFrameSent(): boolean;
    clearMaxInboundWindowUpdateFramesPerDataFrameSent(): void;
    getMaxInboundWindowUpdateFramesPerDataFrameSent(): google_protobuf_wrappers_pb.UInt32Value | undefined;
    setMaxInboundWindowUpdateFramesPerDataFrameSent(value?: google_protobuf_wrappers_pb.UInt32Value): void;

    getStreamErrorOnInvalidHttpMessaging(): boolean;
    setStreamErrorOnInvalidHttpMessaging(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Http2ProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: Http2ProtocolOptions): Http2ProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Http2ProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Http2ProtocolOptions;
    static deserializeBinaryFromReader(message: Http2ProtocolOptions, reader: jspb.BinaryReader): Http2ProtocolOptions;
}

export namespace Http2ProtocolOptions {
    export type AsObject = {
        hpackTableSize?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        maxConcurrentStreams?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        initialStreamWindowSize?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        initialConnectionWindowSize?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        allowConnect: boolean,
        allowMetadata: boolean,
        maxOutboundFrames?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        maxOutboundControlFrames?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        maxConsecutiveInboundFramesWithEmptyPayload?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        maxInboundPriorityFramesPerStream?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        maxInboundWindowUpdateFramesPerDataFrameSent?: google_protobuf_wrappers_pb.UInt32Value.AsObject,
        streamErrorOnInvalidHttpMessaging: boolean,
    }
}

export class GrpcProtocolOptions extends jspb.Message { 

    hasHttp2ProtocolOptions(): boolean;
    clearHttp2ProtocolOptions(): void;
    getHttp2ProtocolOptions(): Http2ProtocolOptions | undefined;
    setHttp2ProtocolOptions(value?: Http2ProtocolOptions): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GrpcProtocolOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GrpcProtocolOptions): GrpcProtocolOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GrpcProtocolOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GrpcProtocolOptions;
    static deserializeBinaryFromReader(message: GrpcProtocolOptions, reader: jspb.BinaryReader): GrpcProtocolOptions;
}

export namespace GrpcProtocolOptions {
    export type AsObject = {
        http2ProtocolOptions?: Http2ProtocolOptions.AsObject,
    }
}
