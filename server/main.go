package main

import (
	"fmt"
	"grpc-server/service"
	"net"

	"google.golang.org/grpc"
)

func main() {
	s := grpc.NewServer()
	l, _ := net.Listen("tcp", ":50051")

	service.RegisterGreeterServer(s, service.NewGreeterServer())

	fmt.Println("gRPC server listening on port 50051")
	err := s.Serve(l)

	if err != nil {
		fmt.Printf("err: %v", err)
	}
}
