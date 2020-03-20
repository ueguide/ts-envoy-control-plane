// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var envoy_api_v2_cds_pb = require('../../../envoy/api/v2/cds_pb.js');
var envoy_api_v2_auth_cert_pb = require('../../../envoy/api/v2/auth/cert_pb.js');
var envoy_api_v2_cluster_circuit_breaker_pb = require('../../../envoy/api/v2/cluster/circuit_breaker_pb.js');
var envoy_api_v2_cluster_filter_pb = require('../../../envoy/api/v2/cluster/filter_pb.js');
var envoy_api_v2_cluster_outlier_detection_pb = require('../../../envoy/api/v2/cluster/outlier_detection_pb.js');
var envoy_api_v2_core_address_pb = require('../../../envoy/api/v2/core/address_pb.js');
var envoy_api_v2_core_base_pb = require('../../../envoy/api/v2/core/base_pb.js');
var envoy_api_v2_core_config_source_pb = require('../../../envoy/api/v2/core/config_source_pb.js');
var envoy_api_v2_core_health_check_pb = require('../../../envoy/api/v2/core/health_check_pb.js');
var envoy_api_v2_core_protocol_pb = require('../../../envoy/api/v2/core/protocol_pb.js');
var envoy_api_v2_discovery_pb = require('../../../envoy/api/v2/discovery_pb.js');
var envoy_api_v2_eds_pb = require('../../../envoy/api/v2/eds_pb.js');
var envoy_type_percent_pb = require('../../../envoy/type/percent_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var udpa_annotations_migrate_pb = require('../../../udpa/annotations/migrate_pb.js');
var validate_validate_pb = require('../../../validate/validate_pb.js');

function serialize_envoy_api_v2_DeltaDiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DeltaDiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.DeltaDiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DeltaDiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.DeltaDiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DeltaDiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DeltaDiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.DeltaDiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DeltaDiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.DeltaDiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DiscoveryRequest(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryRequest)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryRequest(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_envoy_api_v2_DiscoveryResponse(arg) {
  if (!(arg instanceof envoy_api_v2_discovery_pb.DiscoveryResponse)) {
    throw new Error('Expected argument of type envoy.api.v2.DiscoveryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_envoy_api_v2_DiscoveryResponse(buffer_arg) {
  return envoy_api_v2_discovery_pb.DiscoveryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// [#protodoc-title: Clusters]
//
// Return list of all clusters this proxy will load balance to.
var ClusterDiscoveryServiceService = exports.ClusterDiscoveryServiceService = {
  streamClusters: {
    path: '/envoy.api.v2.ClusterDiscoveryService/StreamClusters',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
  deltaClusters: {
    path: '/envoy.api.v2.ClusterDiscoveryService/DeltaClusters',
    requestStream: true,
    responseStream: true,
    requestType: envoy_api_v2_discovery_pb.DeltaDiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DeltaDiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DeltaDiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DeltaDiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DeltaDiscoveryResponse,
  },
  fetchClusters: {
    path: '/envoy.api.v2.ClusterDiscoveryService/FetchClusters',
    requestStream: false,
    responseStream: false,
    requestType: envoy_api_v2_discovery_pb.DiscoveryRequest,
    responseType: envoy_api_v2_discovery_pb.DiscoveryResponse,
    requestSerialize: serialize_envoy_api_v2_DiscoveryRequest,
    requestDeserialize: deserialize_envoy_api_v2_DiscoveryRequest,
    responseSerialize: serialize_envoy_api_v2_DiscoveryResponse,
    responseDeserialize: deserialize_envoy_api_v2_DiscoveryResponse,
  },
};

exports.ClusterDiscoveryServiceClient = grpc.makeGenericClientConstructor(ClusterDiscoveryServiceService);
