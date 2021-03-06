// source: envoy/type/v3alpha/percent.proto
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

var udpa_annotations_versioning_pb = require('../../../udpa/annotations/versioning_pb.js');
goog.object.extend(proto, udpa_annotations_versioning_pb);
var validate_validate_pb = require('../../../validate/validate_pb.js');
goog.object.extend(proto, validate_validate_pb);
goog.exportSymbol('proto.envoy.type.v3alpha.FractionalPercent', null, global);
goog.exportSymbol('proto.envoy.type.v3alpha.FractionalPercent.DenominatorType', null, global);
goog.exportSymbol('proto.envoy.type.v3alpha.Percent', null, global);
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
proto.envoy.type.v3alpha.Percent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.type.v3alpha.Percent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.v3alpha.Percent.displayName = 'proto.envoy.type.v3alpha.Percent';
}
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
proto.envoy.type.v3alpha.FractionalPercent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.envoy.type.v3alpha.FractionalPercent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.envoy.type.v3alpha.FractionalPercent.displayName = 'proto.envoy.type.v3alpha.FractionalPercent';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.type.v3alpha.Percent.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.v3alpha.Percent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.v3alpha.Percent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.v3alpha.Percent.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.envoy.type.v3alpha.Percent}
 */
proto.envoy.type.v3alpha.Percent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.v3alpha.Percent;
  return proto.envoy.type.v3alpha.Percent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.v3alpha.Percent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.v3alpha.Percent}
 */
proto.envoy.type.v3alpha.Percent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
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
proto.envoy.type.v3alpha.Percent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.v3alpha.Percent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.v3alpha.Percent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.v3alpha.Percent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.envoy.type.v3alpha.Percent.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.type.v3alpha.Percent} returns this
 */
proto.envoy.type.v3alpha.Percent.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.envoy.type.v3alpha.FractionalPercent.prototype.toObject = function(opt_includeInstance) {
  return proto.envoy.type.v3alpha.FractionalPercent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.envoy.type.v3alpha.FractionalPercent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.v3alpha.FractionalPercent.toObject = function(includeInstance, msg) {
  var f, obj = {
    numerator: jspb.Message.getFieldWithDefault(msg, 1, 0),
    denominator: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.envoy.type.v3alpha.FractionalPercent}
 */
proto.envoy.type.v3alpha.FractionalPercent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.envoy.type.v3alpha.FractionalPercent;
  return proto.envoy.type.v3alpha.FractionalPercent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.envoy.type.v3alpha.FractionalPercent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.envoy.type.v3alpha.FractionalPercent}
 */
proto.envoy.type.v3alpha.FractionalPercent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumerator(value);
      break;
    case 2:
      var value = /** @type {!proto.envoy.type.v3alpha.FractionalPercent.DenominatorType} */ (reader.readEnum());
      msg.setDenominator(value);
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
proto.envoy.type.v3alpha.FractionalPercent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.envoy.type.v3alpha.FractionalPercent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.envoy.type.v3alpha.FractionalPercent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.envoy.type.v3alpha.FractionalPercent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumerator();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getDenominator();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.envoy.type.v3alpha.FractionalPercent.DenominatorType = {
  HUNDRED: 0,
  TEN_THOUSAND: 1,
  MILLION: 2
};

/**
 * optional uint32 numerator = 1;
 * @return {number}
 */
proto.envoy.type.v3alpha.FractionalPercent.prototype.getNumerator = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.envoy.type.v3alpha.FractionalPercent} returns this
 */
proto.envoy.type.v3alpha.FractionalPercent.prototype.setNumerator = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional DenominatorType denominator = 2;
 * @return {!proto.envoy.type.v3alpha.FractionalPercent.DenominatorType}
 */
proto.envoy.type.v3alpha.FractionalPercent.prototype.getDenominator = function() {
  return /** @type {!proto.envoy.type.v3alpha.FractionalPercent.DenominatorType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.envoy.type.v3alpha.FractionalPercent.DenominatorType} value
 * @return {!proto.envoy.type.v3alpha.FractionalPercent} returns this
 */
proto.envoy.type.v3alpha.FractionalPercent.prototype.setDenominator = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


goog.object.extend(exports, proto.envoy.type.v3alpha);
