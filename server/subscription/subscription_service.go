package subscription

import (
	context "context"
	"time"
)

type subscriptionServiceServer struct {
	Topic []string
}

func NewSubscriptionServiceServer() subscriptionServiceServer {
	return subscriptionServiceServer{Topic: []string{"A", "B"}}
}

func (s subscriptionServiceServer) AddTopic(ctx context.Context, req *TopicRequest) (*TopicResponse, error) {
	s.Topic = append(s.Topic, req.Topic)
	return &TopicResponse{
		Message: "add success",
	}, nil
}

func (s subscriptionServiceServer) Subscribe(req *SubscriptionRequest, stream SubscriptionService_SubscribeServer) error {
	for {
		// Read client message
		// topic := req.Topic

		s.Topic = append(s.Topic, req.Topic)
		// Send messages to client
		for _, msg := range s.Topic {
			time.Sleep(1 * time.Second)
			err := stream.Send(&SubscriptionResponse{Message: msg})
			if err != nil {
				return err
			}
		}

		return nil
	}
}

func (subscriptionServiceServer) mustEmbedUnimplementedSubscriptionServiceServer() {}
