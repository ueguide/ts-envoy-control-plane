/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
var validate_validate_pb = require('../../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.api.v2.core.HttpUri', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.envoy.api.v2.core.HttpUri = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.envoy.api.v2.core.HttpUri.oneofGroups_);
};
goog.inherits(proto.envoy.api.v2.core.HttpUri, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.envoy.api.v2.core.HttpUri.displayName = 'proto.envoy.api.v2.core.HttpUri';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.envoy.api.v2.core.HttpUri.oneofGroups_ = [[2]];

/**
 * @enum {number}
 */
proto.envoy.api.v2.core.HttpUri.HttpUpstreamTypeCase = {
  HTTP_UPSTREAM_TYPE_NOT_SET: 0,
  CLUSTER: 2
};

/**
 * @return {proto.envoy.api.v2.core.HttpUri.HttpUpstreamTypeCase}
 */
proto.envoy.api.v2.core.HttpUri.prototype.getHttpUpstreamTypeCase = function() {
  return /** @type {proto.envoy.api.v2.core.HttpUri.HttpUpstreamTypeCase} */(jspb.Message.computeOneofCase(this, proto.envoy.api.v2.core.HttpUri.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.api.v2.core.HttpUri.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.api.v2.core.HttpUri.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.api.v2.core.HttpUri} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.HttpUri.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cluster: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timeout: (f = msg.getTimeout()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.envoy.api.v2.core.HttpUri}
 */
proto.envoy.api.v2.core.HttpUri.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.api.v2.core.HttpUri;
  return proto.envoy.api.v2.core.HttpUri.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.api.v2.core.HttpUri} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.api.v2.core.HttpUri}
 */
proto.envoy.api.v2.core.HttpUri.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCluster(value);
      break;
    case 3:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setTimeout(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.envoy.api.v2.core.HttpUri.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.api.v2.core.HttpUri.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.api.v2.core.HttpUri} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.api.v2.core.HttpUri.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimeout();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.envoy.api.v2.core.HttpUri.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.envoy.api.v2.core.HttpUri.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string cluster = 2;
 * @return {string}
 */
proto.envoy.api.v2.core.HttpUri.prototype.getCluster = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.envoy.api.v2.core.HttpUri.prototype.setCluster = function(value) {
  jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.core.HttpUri.oneofGroups_[0], value);
};


proto.envoy.api.v2.core.HttpUri.prototype.clearCluster = function() {
  jspb.Message.setOneofField(this, 2, proto.envoy.api.v2.core.HttpUri.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.HttpUri.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Duration timeout = 3;
 * @return {?proto.google.protobuf.Duration}
 */
proto.envoy.api.v2.core.HttpUri.prototype.getTimeout = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 3));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.envoy.api.v2.core.HttpUri.prototype.setTimeout = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.envoy.api.v2.core.HttpUri.prototype.clearTimeout = function() {
  this.setTimeout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.envoy.api.v2.core.HttpUri.prototype.hasTimeout = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.envoy.api.v2.core);
