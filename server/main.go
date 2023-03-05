package main

import (
	"fmt"
	"grpc-server/service"
	"grpc-server/subscription"
	"net"

	"google.golang.org/grpc"
)

func main() {
	s := grpc.NewServer()
	l, _ := net.Listen("tcp", ":50051")

	service.RegisterGreeterServer(s, service.NewGreeterServer())
	subscription.RegisterSubscriptionServiceServer(s, subscription.NewSubscriptionServiceServer())

	fmt.Println("gRPC server listening on port 50051")
	err := s.Serve(l)

	if err != nil {
		fmt.Printf("err: %v", err)
	}
}
