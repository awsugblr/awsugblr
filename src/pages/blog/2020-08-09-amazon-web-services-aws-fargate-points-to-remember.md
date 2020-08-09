---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Fargate: Points to remember'
date: 2020-08-09T07:53:27.646Z
description: 'Let''s learn about AWS Fargate:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #Fargate #Serverless'
---
1. Fargate is a serverless compute engine for containers that works with both ECS and EKS.

2. With Fargate, there is no provisioning, patching, cluster capacity management, or any infrastructure management required.

3. Fargate supports all of the common container use cases, for instance: microservices architecture applications, batch processing, machine learning applications, and migrating on premise applications to the cloud.

4. With AWS Fargate, users pay only for the amount of vCPU and memory resources that they request for their containerized applications requests.

5. Fargate supports Spot and Compute Savings Plan pricing options just like with EC2 instances.

6. Fargate meets the standards for PCI DSS Level 1, ISO 9001, ISO 27001, ISO 27017, ISO 27018, SOC 1, SOC 2, SOC 3, and HIPAA eligibility.

7. Fargate allows users to gather metrics and logs for monitoring their applications through an extensive selection of third party tools with open interfaces.

8. Fargate tasks have the ability to securely grab secrets from the secrets manager to ensure that they never are exposed - even in private configuration files.

9. Observability with Fargate exists with three key functions: monitoring, logging, and tracing.

10. ECS tasks on Fargate do not support all of the task definition parameters that are available.

11. ECS task definitions for Fargate require that the network mode is set to awsvpc.

12. ECS task definitions for Fargate require that users specify CPU and memory at the task level.

13. ECS task definitions for Fargate support the ulimits parameter to define the resource limits to set for a container.

14. ECS task definitions for Fargate support the awslogs, splunk, firelens and fluentd log drivers for the log configuration.

15. ECS on Fargate tasks using platform version 1.4.0 or later, each task receives 20 GB of ephemeral storage.

![Image Retrieved From: https://aws.amazon.com/fargate/](/img/capture.png)

16. ECS service on Fargate can optionally be configured to use Elastic Load Balancing to distribute traffic evenly across the tasks in service.

17. ECS tasks for Fargate can authenticate with private image registries, including Docker Hub, using basic authentication.

18. With Fargate Spot users can run interruption tolerant ECS tasks at a discounted rate compared to the Fargate price.

19. A Fargate task is scheduled to be retired when AWS detects the irreparable failure of the underlying hardware hosting the task or if a security issue needs to be patched.

20. The Fargate profile allows an administrator to declare which pods run on Fargate.

21. Fargate works with services like SageMaker and AWS CodePipeline to enable organizations to implement containerized ML applications, removing the need to provision and manage infrastructure.

22. Developing CI/CD pipelines on AWS can be done using the AWS Fargate ECS launch type, effectively bringing about an additional set of automation by removing the need to manage the application's infrastructure.

23. With CLI, users can create their own cluster with a unique name with the following command: aws ecs create-cluster --cluster-name fargate-cluster

24. With CLI, delete a cluster using: ecs delete-cluster --cluster fargate-cluster

25. With CLI, delete a service using: aws ecs delete-service --cluster fargate-cluster --service fargate-service --force

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
