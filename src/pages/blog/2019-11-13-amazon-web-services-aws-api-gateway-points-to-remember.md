---
templateKey: blog-post
title: 'Amazon Web Services (AWS): API Gateway: Points to remember'
date: 2019-11-13T06:06:12.956Z
description: 'Let''s learn about Amazon API Gateway:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #APIGateway'
---
1. API Gateway is a fully managed service that makes it easy for developers to publish, maintain, monitor & secure APIs at any scale.

2. For REST APIs, users will pay only for the API calls that they receive & the amount of data transferred out.

3. For WebSocket APIs, users pay only for messages sent and received and for the time a user/device is connected to the WebSocket API.

4. API Gateway helps users define plans that meter and restrict third-party developer access to their APIs.

5. Users can define a set of plans, configure throttling & quota limits on a per API key basis.

6. API Gateway provides with multiple tools to authorize access to APIs and control service operation access.

7. API Gateway helps users to manage traffic with throttling so that backend operations can withstand traffic spikes.

8. API Gateway provides users with a metrics dashboard to monitor calls to their services.

9. Users can enable detailed metrics for each method in their APIs and also receive error, access or debug logs in CloudWatch Logs.

10. API Gateway lets users operate multiple API versions and multiple stages for each version simultaneously so that existing applications can continue to call previous versions after new API versions are published.

![](/img/screenshot-771-.png)

11. API Gateway maintains a persistent connection between connected users and enables message transfer between them (Real-Time Two-Way Communication).

12. In API Gateway, a REST API is a group of resources and methods or endpoints. REST APIs can be deployed to different stages and cloned to new versions.

13. In API Gateway, a WebSocket API maintains a persistent connection between connected clients to enable real-time message communication.

14. With WebSocket APIs in API Gateway, users can define backend integrations with AWS Lambda functions, Kinesis or any HTTP endpoint to be invoked when messages are received from the connected clients.

15. All of the APIs created with API Gateway expose HTTPS endpoints only.

16. APIs built on API Gateway can accept any payloads sent over HTTPS for REST APIs.

17. With API Gateway, each REST API can have multiple stages. Stages are meant to help with the development lifecycle of an API.

18. A Resource Policy is a JSON policy document that users attach to an API to control whether a specified principal can invoke the API.

19. API Gateway saves the history of all deployments. At any point, using the API Gateway APIs or the console, users can roll back a stage to a previous deployment.

20. API Gateway gives users the ability to clone an existing API.

![](/img/screenshot-772-.png)

21. Users can use AWS open source Swagger importer tool to import their Swagger API definitions into API Gateway.

22. Users can use AWS credentials access and secret keys - to sign requests to their service and authorize access like other AWS services.

23. API Gateway can generate API keys and associate them with an usage plan.

24. API Gateway can generate a client-side SSL certificate and make the public key of that certificate available to users.

25. API Gateway is integrated with AWS CloudTrail to give users a full auditable history of the changes to their REST APIs.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
