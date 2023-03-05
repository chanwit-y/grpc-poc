#!/bin/bash

PROTO_DIR=./src/proto

    # --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DIR} \
# Generate JavaScript code
# npx grpc_tools_node_protoc \
#     --js_out=import_style=commonjs,binary:${PROTO_DIR} \
#     --grpc_out=grpc_js:${PROTO_DIR} \
#     --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
#     -I ../proto \
#     ../proto/*.proto

# protoc -I=. src/proto/subscription.proto --js_out=import_style=commonjs,binary:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.
# protoc --proto_path=./src/proto --js_out=import_style=commonjs:./src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src -I ../proto ../proto/*.proto


npx grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:${PROTO_DIR} \
    --grpc_out=grpc_js:${PROTO_DIR} \
    --ts_out=${PROTO_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/protoc-gen-js \
    -I ../proto \
    ../proto/*.proto
    
    # --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \


# Generate TypeScript code (d.ts)
# npx grpc_tools_node_protoc \
#     --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
#     --ts_out=grpc_js:${PROTO_DIR} \
#     -I ../proto \
#     ../proto/*.proto