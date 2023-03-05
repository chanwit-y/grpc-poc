// package: subscription
// file: subscription.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as subscription_pb from "./subscription_pb";

interface ISubscriptionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    subscribe: ISubscriptionServiceService_ISubscribe;
    addTopic: ISubscriptionServiceService_IAddTopic;
}

interface ISubscriptionServiceService_ISubscribe extends grpc.MethodDefinition<subscription_pb.SubscriptionRequest, subscription_pb.SubscriptionResponse> {
    path: "/subscription.SubscriptionService/Subscribe";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<subscription_pb.SubscriptionRequest>;
    requestDeserialize: grpc.deserialize<subscription_pb.SubscriptionRequest>;
    responseSerialize: grpc.serialize<subscription_pb.SubscriptionResponse>;
    responseDeserialize: grpc.deserialize<subscription_pb.SubscriptionResponse>;
}
interface ISubscriptionServiceService_IAddTopic extends grpc.MethodDefinition<subscription_pb.TopicRequest, subscription_pb.TopicResponse> {
    path: "/subscription.SubscriptionService/AddTopic";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<subscription_pb.TopicRequest>;
    requestDeserialize: grpc.deserialize<subscription_pb.TopicRequest>;
    responseSerialize: grpc.serialize<subscription_pb.TopicResponse>;
    responseDeserialize: grpc.deserialize<subscription_pb.TopicResponse>;
}

export const SubscriptionServiceService: ISubscriptionServiceService;

export interface ISubscriptionServiceServer {
    subscribe: grpc.handleServerStreamingCall<subscription_pb.SubscriptionRequest, subscription_pb.SubscriptionResponse>;
    addTopic: grpc.handleUnaryCall<subscription_pb.TopicRequest, subscription_pb.TopicResponse>;
}

export interface ISubscriptionServiceClient {
    subscribe(request: subscription_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<subscription_pb.SubscriptionResponse>;
    subscribe(request: subscription_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<subscription_pb.SubscriptionResponse>;
    addTopic(request: subscription_pb.TopicRequest, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
    addTopic(request: subscription_pb.TopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
    addTopic(request: subscription_pb.TopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
}

export class SubscriptionServiceClient extends grpc.Client implements ISubscriptionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public subscribe(request: subscription_pb.SubscriptionRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<subscription_pb.SubscriptionResponse>;
    public subscribe(request: subscription_pb.SubscriptionRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<subscription_pb.SubscriptionResponse>;
    public addTopic(request: subscription_pb.TopicRequest, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
    public addTopic(request: subscription_pb.TopicRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
    public addTopic(request: subscription_pb.TopicRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: subscription_pb.TopicResponse) => void): grpc.ClientUnaryCall;
}
