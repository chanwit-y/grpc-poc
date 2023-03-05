/**
 * @fileoverview gRPC-Web generated client stub for subscription
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.19.1
// source: subscription.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.subscription = require('./subscription_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.subscription.SubscriptionServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.subscription.SubscriptionServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.subscription.SubscriptionRequest,
 *   !proto.subscription.SubscriptionResponse>}
 */
const methodDescriptor_SubscriptionService_Subscribe = new grpc.web.MethodDescriptor(
  '/subscription.SubscriptionService/Subscribe',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.subscription.SubscriptionRequest,
  proto.subscription.SubscriptionResponse,
  /**
   * @param {!proto.subscription.SubscriptionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.subscription.SubscriptionResponse.deserializeBinary
);


/**
 * @param {!proto.subscription.SubscriptionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.subscription.SubscriptionResponse>}
 *     The XHR Node Readable Stream
 */
proto.subscription.SubscriptionServiceClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/subscription.SubscriptionService/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_Subscribe);
};


/**
 * @param {!proto.subscription.SubscriptionRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.subscription.SubscriptionResponse>}
 *     The XHR Node Readable Stream
 */
proto.subscription.SubscriptionServicePromiseClient.prototype.subscribe =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/subscription.SubscriptionService/Subscribe',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_Subscribe);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.subscription.TopicRequest,
 *   !proto.subscription.TopicResponse>}
 */
const methodDescriptor_SubscriptionService_AddTopic = new grpc.web.MethodDescriptor(
  '/subscription.SubscriptionService/AddTopic',
  grpc.web.MethodType.UNARY,
  proto.subscription.TopicRequest,
  proto.subscription.TopicResponse,
  /**
   * @param {!proto.subscription.TopicRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.subscription.TopicResponse.deserializeBinary
);


/**
 * @param {!proto.subscription.TopicRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.subscription.TopicResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.subscription.TopicResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.subscription.SubscriptionServiceClient.prototype.addTopic =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/subscription.SubscriptionService/AddTopic',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_AddTopic,
      callback);
};


/**
 * @param {!proto.subscription.TopicRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.subscription.TopicResponse>}
 *     Promise that resolves to the response
 */
proto.subscription.SubscriptionServicePromiseClient.prototype.addTopic =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/subscription.SubscriptionService/AddTopic',
      request,
      metadata || {},
      methodDescriptor_SubscriptionService_AddTopic);
};


module.exports = proto.subscription;

