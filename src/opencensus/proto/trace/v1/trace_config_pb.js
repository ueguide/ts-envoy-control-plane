// source: opencensus/proto/trace/v1/trace_config.proto
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

goog.exportSymbol('proto.opencensus.proto.trace.v1.ConstantSampler', null, global);
goog.exportSymbol('proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision', null, global);
goog.exportSymbol('proto.opencensus.proto.trace.v1.ProbabilitySampler', null, global);
goog.exportSymbol('proto.opencensus.proto.trace.v1.RateLimitingSampler', null, global);
goog.exportSymbol('proto.opencensus.proto.trace.v1.TraceConfig', null, global);
goog.exportSymbol('proto.opencensus.proto.trace.v1.TraceConfig.SamplerCase', null, global);
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
proto.opencensus.proto.trace.v1.TraceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_);
};
goog.inherits(proto.opencensus.proto.trace.v1.TraceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opencensus.proto.trace.v1.TraceConfig.displayName = 'proto.opencensus.proto.trace.v1.TraceConfig';
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
proto.opencensus.proto.trace.v1.ProbabilitySampler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opencensus.proto.trace.v1.ProbabilitySampler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opencensus.proto.trace.v1.ProbabilitySampler.displayName = 'proto.opencensus.proto.trace.v1.ProbabilitySampler';
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
proto.opencensus.proto.trace.v1.ConstantSampler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opencensus.proto.trace.v1.ConstantSampler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opencensus.proto.trace.v1.ConstantSampler.displayName = 'proto.opencensus.proto.trace.v1.ConstantSampler';
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
proto.opencensus.proto.trace.v1.RateLimitingSampler = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.opencensus.proto.trace.v1.RateLimitingSampler, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.opencensus.proto.trace.v1.RateLimitingSampler.displayName = 'proto.opencensus.proto.trace.v1.RateLimitingSampler';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.opencensus.proto.trace.v1.TraceConfig.SamplerCase = {
  SAMPLER_NOT_SET: 0,
  PROBABILITY_SAMPLER: 1,
  CONSTANT_SAMPLER: 2,
  RATE_LIMITING_SAMPLER: 3
};

/**
 * @return {proto.opencensus.proto.trace.v1.TraceConfig.SamplerCase}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getSamplerCase = function() {
  return /** @type {proto.opencensus.proto.trace.v1.TraceConfig.SamplerCase} */(jspb.Message.computeOneofCase(this, proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_[0]));
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
proto.opencensus.proto.trace.v1.TraceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.opencensus.proto.trace.v1.TraceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opencensus.proto.trace.v1.TraceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.TraceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    probabilitySampler: (f = msg.getProbabilitySampler()) && proto.opencensus.proto.trace.v1.ProbabilitySampler.toObject(includeInstance, f),
    constantSampler: (f = msg.getConstantSampler()) && proto.opencensus.proto.trace.v1.ConstantSampler.toObject(includeInstance, f),
    rateLimitingSampler: (f = msg.getRateLimitingSampler()) && proto.opencensus.proto.trace.v1.RateLimitingSampler.toObject(includeInstance, f),
    maxNumberOfAttributes: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maxNumberOfAnnotations: jspb.Message.getFieldWithDefault(msg, 5, 0),
    maxNumberOfMessageEvents: jspb.Message.getFieldWithDefault(msg, 6, 0),
    maxNumberOfLinks: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig}
 */
proto.opencensus.proto.trace.v1.TraceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opencensus.proto.trace.v1.TraceConfig;
  return proto.opencensus.proto.trace.v1.TraceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opencensus.proto.trace.v1.TraceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig}
 */
proto.opencensus.proto.trace.v1.TraceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.opencensus.proto.trace.v1.ProbabilitySampler;
      reader.readMessage(value,proto.opencensus.proto.trace.v1.ProbabilitySampler.deserializeBinaryFromReader);
      msg.setProbabilitySampler(value);
      break;
    case 2:
      var value = new proto.opencensus.proto.trace.v1.ConstantSampler;
      reader.readMessage(value,proto.opencensus.proto.trace.v1.ConstantSampler.deserializeBinaryFromReader);
      msg.setConstantSampler(value);
      break;
    case 3:
      var value = new proto.opencensus.proto.trace.v1.RateLimitingSampler;
      reader.readMessage(value,proto.opencensus.proto.trace.v1.RateLimitingSampler.deserializeBinaryFromReader);
      msg.setRateLimitingSampler(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxNumberOfAttributes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxNumberOfAnnotations(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxNumberOfMessageEvents(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxNumberOfLinks(value);
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
proto.opencensus.proto.trace.v1.TraceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opencensus.proto.trace.v1.TraceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opencensus.proto.trace.v1.TraceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.TraceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProbabilitySampler();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.opencensus.proto.trace.v1.ProbabilitySampler.serializeBinaryToWriter
    );
  }
  f = message.getConstantSampler();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.opencensus.proto.trace.v1.ConstantSampler.serializeBinaryToWriter
    );
  }
  f = message.getRateLimitingSampler();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.opencensus.proto.trace.v1.RateLimitingSampler.serializeBinaryToWriter
    );
  }
  f = message.getMaxNumberOfAttributes();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMaxNumberOfAnnotations();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getMaxNumberOfMessageEvents();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getMaxNumberOfLinks();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional ProbabilitySampler probability_sampler = 1;
 * @return {?proto.opencensus.proto.trace.v1.ProbabilitySampler}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getProbabilitySampler = function() {
  return /** @type{?proto.opencensus.proto.trace.v1.ProbabilitySampler} */ (
    jspb.Message.getWrapperField(this, proto.opencensus.proto.trace.v1.ProbabilitySampler, 1));
};


/**
 * @param {?proto.opencensus.proto.trace.v1.ProbabilitySampler|undefined} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
*/
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setProbabilitySampler = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.clearProbabilitySampler = function() {
  return this.setProbabilitySampler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.hasProbabilitySampler = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConstantSampler constant_sampler = 2;
 * @return {?proto.opencensus.proto.trace.v1.ConstantSampler}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getConstantSampler = function() {
  return /** @type{?proto.opencensus.proto.trace.v1.ConstantSampler} */ (
    jspb.Message.getWrapperField(this, proto.opencensus.proto.trace.v1.ConstantSampler, 2));
};


/**
 * @param {?proto.opencensus.proto.trace.v1.ConstantSampler|undefined} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
*/
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setConstantSampler = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.clearConstantSampler = function() {
  return this.setConstantSampler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.hasConstantSampler = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RateLimitingSampler rate_limiting_sampler = 3;
 * @return {?proto.opencensus.proto.trace.v1.RateLimitingSampler}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getRateLimitingSampler = function() {
  return /** @type{?proto.opencensus.proto.trace.v1.RateLimitingSampler} */ (
    jspb.Message.getWrapperField(this, proto.opencensus.proto.trace.v1.RateLimitingSampler, 3));
};


/**
 * @param {?proto.opencensus.proto.trace.v1.RateLimitingSampler|undefined} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
*/
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setRateLimitingSampler = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.opencensus.proto.trace.v1.TraceConfig.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.clearRateLimitingSampler = function() {
  return this.setRateLimitingSampler(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.hasRateLimitingSampler = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 max_number_of_attributes = 4;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getMaxNumberOfAttributes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setMaxNumberOfAttributes = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 max_number_of_annotations = 5;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getMaxNumberOfAnnotations = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setMaxNumberOfAnnotations = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 max_number_of_message_events = 6;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getMaxNumberOfMessageEvents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setMaxNumberOfMessageEvents = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 max_number_of_links = 7;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.getMaxNumberOfLinks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.TraceConfig} returns this
 */
proto.opencensus.proto.trace.v1.TraceConfig.prototype.setMaxNumberOfLinks = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.opencensus.proto.trace.v1.ProbabilitySampler.prototype.toObject = function(opt_includeInstance) {
  return proto.opencensus.proto.trace.v1.ProbabilitySampler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opencensus.proto.trace.v1.ProbabilitySampler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplingprobability: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.opencensus.proto.trace.v1.ProbabilitySampler}
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opencensus.proto.trace.v1.ProbabilitySampler;
  return proto.opencensus.proto.trace.v1.ProbabilitySampler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opencensus.proto.trace.v1.ProbabilitySampler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opencensus.proto.trace.v1.ProbabilitySampler}
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSamplingprobability(value);
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
proto.opencensus.proto.trace.v1.ProbabilitySampler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opencensus.proto.trace.v1.ProbabilitySampler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opencensus.proto.trace.v1.ProbabilitySampler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplingprobability();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double samplingProbability = 1;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.prototype.getSamplingprobability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.ProbabilitySampler} returns this
 */
proto.opencensus.proto.trace.v1.ProbabilitySampler.prototype.setSamplingprobability = function(value) {
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
proto.opencensus.proto.trace.v1.ConstantSampler.prototype.toObject = function(opt_includeInstance) {
  return proto.opencensus.proto.trace.v1.ConstantSampler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opencensus.proto.trace.v1.ConstantSampler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.ConstantSampler.toObject = function(includeInstance, msg) {
  var f, obj = {
    decision: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.opencensus.proto.trace.v1.ConstantSampler}
 */
proto.opencensus.proto.trace.v1.ConstantSampler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opencensus.proto.trace.v1.ConstantSampler;
  return proto.opencensus.proto.trace.v1.ConstantSampler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opencensus.proto.trace.v1.ConstantSampler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opencensus.proto.trace.v1.ConstantSampler}
 */
proto.opencensus.proto.trace.v1.ConstantSampler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision} */ (reader.readEnum());
      msg.setDecision(value);
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
proto.opencensus.proto.trace.v1.ConstantSampler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opencensus.proto.trace.v1.ConstantSampler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opencensus.proto.trace.v1.ConstantSampler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.ConstantSampler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDecision();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision = {
  ALWAYS_OFF: 0,
  ALWAYS_ON: 1,
  ALWAYS_PARENT: 2
};

/**
 * optional ConstantDecision decision = 1;
 * @return {!proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision}
 */
proto.opencensus.proto.trace.v1.ConstantSampler.prototype.getDecision = function() {
  return /** @type {!proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.opencensus.proto.trace.v1.ConstantSampler.ConstantDecision} value
 * @return {!proto.opencensus.proto.trace.v1.ConstantSampler} returns this
 */
proto.opencensus.proto.trace.v1.ConstantSampler.prototype.setDecision = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.opencensus.proto.trace.v1.RateLimitingSampler.prototype.toObject = function(opt_includeInstance) {
  return proto.opencensus.proto.trace.v1.RateLimitingSampler.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.opencensus.proto.trace.v1.RateLimitingSampler} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.toObject = function(includeInstance, msg) {
  var f, obj = {
    qps: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.opencensus.proto.trace.v1.RateLimitingSampler}
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.opencensus.proto.trace.v1.RateLimitingSampler;
  return proto.opencensus.proto.trace.v1.RateLimitingSampler.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.opencensus.proto.trace.v1.RateLimitingSampler} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.opencensus.proto.trace.v1.RateLimitingSampler}
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setQps(value);
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
proto.opencensus.proto.trace.v1.RateLimitingSampler.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.opencensus.proto.trace.v1.RateLimitingSampler.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.opencensus.proto.trace.v1.RateLimitingSampler} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQps();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 qps = 1;
 * @return {number}
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.prototype.getQps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.opencensus.proto.trace.v1.RateLimitingSampler} returns this
 */
proto.opencensus.proto.trace.v1.RateLimitingSampler.prototype.setQps = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


goog.object.extend(exports, proto.opencensus.proto.trace.v1);
