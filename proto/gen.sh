#!/bin/bash

protoc helloworld.proto --go_out=../server --go-grpc_out=../server
protoc subscription.proto --go_out=../server --go-grpc_out=../server


# protoc subscription.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:. 
