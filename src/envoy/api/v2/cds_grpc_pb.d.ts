// package: envoy.api.v2
// file: envoy/api/v2/cds.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as envoy_api_v2_cds_pb from "../../../envoy/api/v2/cds_pb";
import * as envoy_api_v2_auth_cert_pb from "../../../envoy/api/v2/auth/cert_pb";
import * as envoy_api_v2_cluster_circuit_breaker_pb from "../../../envoy/api/v2/cluster/circuit_breaker_pb";
import * as envoy_api_v2_cluster_filter_pb from "../../../envoy/api/v2/cluster/filter_pb";
import * as envoy_api_v2_cluster_outlier_detection_pb from "../../../envoy/api/v2/cluster/outlier_detection_pb";
import * as envoy_api_v2_core_address_pb from "../../../envoy/api/v2/core/address_pb";
import * as envoy_api_v2_core_base_pb from "../../../envoy/api/v2/core/base_pb";
import * as envoy_api_v2_core_config_source_pb from "../../../envoy/api/v2/core/config_source_pb";
import * as envoy_api_v2_core_health_check_pb from "../../../envoy/api/v2/core/health_check_pb";
import * as envoy_api_v2_core_protocol_pb from "../../../envoy/api/v2/core/protocol_pb";
import * as envoy_api_v2_discovery_pb from "../../../envoy/api/v2/discovery_pb";
import * as envoy_api_v2_eds_pb from "../../../envoy/api/v2/eds_pb";
import * as envoy_type_percent_pb from "../../../envoy/type/percent_pb";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as udpa_annotations_migrate_pb from "../../../udpa/annotations/migrate_pb";
import * as validate_validate_pb from "../../../validate/validate_pb";

interface IClusterDiscoveryServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    streamClusters: IClusterDiscoveryServiceService_IStreamClusters;
    deltaClusters: IClusterDiscoveryServiceService_IDeltaClusters;
    fetchClusters: IClusterDiscoveryServiceService_IFetchClusters;
}

interface IClusterDiscoveryServiceService_IStreamClusters extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ClusterDiscoveryService/StreamClusters"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}
interface IClusterDiscoveryServiceService_IDeltaClusters extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse> {
    path: string; // "/envoy.api.v2.ClusterDiscoveryService/DeltaClusters"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
}
interface IClusterDiscoveryServiceService_IFetchClusters extends grpc.MethodDefinition<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse> {
    path: string; // "/envoy.api.v2.ClusterDiscoveryService/FetchClusters"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    requestDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryRequest>;
    responseSerialize: grpc.serialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
    responseDeserialize: grpc.deserialize<envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export const ClusterDiscoveryServiceService: IClusterDiscoveryServiceService;

export interface IClusterDiscoveryServiceServer {
    streamClusters: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaClusters: grpc.handleBidiStreamingCall<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchClusters: grpc.handleUnaryCall<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
}

export interface IClusterDiscoveryServiceClient {
    streamClusters(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamClusters(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    streamClusters(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    deltaClusters(): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaClusters(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    deltaClusters(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}

export class ClusterDiscoveryServiceClient extends grpc.Client implements IClusterDiscoveryServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public streamClusters(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public streamClusters(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DiscoveryRequest, envoy_api_v2_discovery_pb.DiscoveryResponse>;
    public deltaClusters(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public deltaClusters(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<envoy_api_v2_discovery_pb.DeltaDiscoveryRequest, envoy_api_v2_discovery_pb.DeltaDiscoveryResponse>;
    public fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
    public fetchClusters(request: envoy_api_v2_discovery_pb.DiscoveryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: envoy_api_v2_discovery_pb.DiscoveryResponse) => void): grpc.ClientUnaryCall;
}
