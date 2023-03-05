// package: subscription
// file: subscription.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class TopicRequest extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): TopicRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TopicRequest): TopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicRequest;
    static deserializeBinaryFromReader(message: TopicRequest, reader: jspb.BinaryReader): TopicRequest;
}

export namespace TopicRequest {
    export type AsObject = {
        topic: string,
    }
}

export class TopicResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): TopicResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TopicResponse): TopicResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicResponse;
    static deserializeBinaryFromReader(message: TopicResponse, reader: jspb.BinaryReader): TopicResponse;
}

export namespace TopicResponse {
    export type AsObject = {
        message: string,
    }
}

export class SubscriptionRequest extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): SubscriptionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionRequest): SubscriptionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionRequest;
    static deserializeBinaryFromReader(message: SubscriptionRequest, reader: jspb.BinaryReader): SubscriptionRequest;
}

export namespace SubscriptionRequest {
    export type AsObject = {
        topic: string,
    }
}

export class SubscriptionResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SubscriptionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionResponse): SubscriptionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionResponse;
    static deserializeBinaryFromReader(message: SubscriptionResponse, reader: jspb.BinaryReader): SubscriptionResponse;
}

export namespace SubscriptionResponse {
    export type AsObject = {
        message: string,
    }
}
