import { GreeterClient, HelloRequest } from '@/proto/helloworld_grpc_web_pb';
import React, { useEffect } from 'react'

export const Hello = () => {
	useEffect(() => {
		const client = new GreeterClient('127.0.0.1:50051', null, null);
		const req = new HelloRequest()
		req.setName("Beer")
		client.sayHello(req, {}, (e, r) => {
			console.log(e)
			console.log(r)
		})
	}, [])
	
	return (
		<div>Hello</div>
	)
}
