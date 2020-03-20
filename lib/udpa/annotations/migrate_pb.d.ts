// package: udpa.annotations
// file: udpa/annotations/migrate.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class MigrateAnnotation extends jspb.Message { 
    getRename(): string;
    setRename(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MigrateAnnotation.AsObject;
    static toObject(includeInstance: boolean, msg: MigrateAnnotation): MigrateAnnotation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MigrateAnnotation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MigrateAnnotation;
    static deserializeBinaryFromReader(message: MigrateAnnotation, reader: jspb.BinaryReader): MigrateAnnotation;
}

export namespace MigrateAnnotation {
    export type AsObject = {
        rename: string,
    }
}

export const messageMigrate: jspb.ExtensionFieldInfo<MigrateAnnotation>;

export const fieldMigrate: jspb.ExtensionFieldInfo<MigrateAnnotation>;

export const enumMigrate: jspb.ExtensionFieldInfo<MigrateAnnotation>;

export const enumValueMigrate: jspb.ExtensionFieldInfo<MigrateAnnotation>;
