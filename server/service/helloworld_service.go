package service

import context "context"

type greeterServer struct{}

func NewGreeterServer() greeterServer {
	return greeterServer{}
}

func (s greeterServer) SayHello(context.Context, *HelloRequest) (*HelloReply, error) {
	return &HelloReply{
		Message: "Hello world",
	}, nil
}

func (s greeterServer) mustEmbedUnimplementedGreeterServer() {}
