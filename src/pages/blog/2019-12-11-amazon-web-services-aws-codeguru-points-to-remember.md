---
templateKey: blog-post
title: 'Amazon Web Services (AWS): CodeGuru: Points to remember'
date: 2019-12-11T11:46:02.587Z
description: 'Let''s learn about Amazon CodeGuru:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #CodeGuru'
---
1. CodeGuru is a fully managed service that helps proactively improve code quality and application performance with intelligent recommendations.
2. CodeGuru includes CodeGuru Reviewer and CodeGuru Profiler.
3. CodeGuru Reviewer analyzes code pull requests on users code repositories and CodeGuru Profiler analyzes the performance of their applications as they run.
4. CodeGuru Profiler can identify when an application is consuming excessive CPU capacity on a logging routine instead of executing core business logic.
5. CodeGuru Profiler is designed to profile an application continuously in production, with a minimal footprint.
6. CodeGuru Reviewer is an automated code review service that identifies critical defects and deviation from AWS best practices for Java-based code.
7. CodeGuru Reviewer scans the lines of code within a pull request or code repository and provides intelligent recommendations based on standards learned from major open source projects as well as Amazon codebase.
8. CodeGuru Reviewer currently supports Java code stored in GitHub and AWS CodeCommit repositories.
9. CodeGuru Reviewer will need read-only access and the ability to post comments on the Pull Requests.
10. CodeGuru Reviewer does not store users source code.

![null](/img/screenshot-827-.png)

11. CodeGuru Reviewer is trained using rule mining and supervised machine learning models that use a combination of logistic regression and neural networks.
12. CodeGuru Reviewer uses the feedback users provide as labels and iteratively improves the quality of code detectors.
13. CodeGuru Profiler analyzes the application runtime profile and provides intelligent recommendations and visualizations that guide developers on how to improve the performance of the most relevant parts of their code.
14. CodeGuru Profiler is designed to collect data on everything that happened in that application’s behavior, regardless of scenarios.
15. CodeGuru Profiler uses a knowledge base of commonly encountered performance inefficiencies to automatically discover code patterns in users live application that impact its performance.

![null](/img/screenshot-828-.png)

16. CodeGuru Profiler works with applications hosted on Amazon EC2, containerized applications running on Amazon ECS and Amazon EKS, as well as serverless applications running on AWS Fargate.
17. CodeGuru Profiler currently supports Java applications.
18. CodeGuru Profiler consists of three parts: an agent, the profiler service & intelligent recommendations.
19. A profiler group is a logical grouping created by users. It represents the boundary of one application.
20. CodeGuru Reviewer will automatically provide intelligent recommendations as comments on users pull requests generated for the connected repositories.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
