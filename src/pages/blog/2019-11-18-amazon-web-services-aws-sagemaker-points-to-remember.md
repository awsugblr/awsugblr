---
templateKey: blog-post
title: 'Amazon Web Services (AWS): SageMaker: Points to remember'
date: 2019-11-18T06:06:35.520Z
description: 'Let''s learn about Amazon SageMaker:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #SageMaker #MachineLearning'
---
1. SageMaker is a fully-managed service that enables data scientists and developers to quickly and easily build, train & deploy machine learning models.

2. SageMaker enables developers and scientists to build machine learning models for use in intelligent, predictive apps.

3. SageMaker is designed for high availability. There are no maintenance windows or scheduled downtimes.

4. SageMaker APIs run in Amazon’s proven, high-availability data centers, with service stack replication configured across three facilities in each AWS region to provide fault tolerance in the event of a server failure or AZ outage.

5. SageMaker ensures that ML model artifacts and other system artifacts are encrypted in transit and at rest.

6. Requests to the SageMaker API and console are made over a secure (SSL) connection.

7. SageMaker stores code in ML storage volumes, secured by security groups and optionally encrypted at rest.

8. SageMaker allows users to select the number and type of instance used for the hosted notebook, training & model hosting.

9. SageMaker provides a full end-to-end workflow, but users can continue to use their existing tools with SageMaker.

10. Users pay for ML compute, storage and data processing resources their use for hosting the notebook, training the model, performing predictions & logging the outputs.

![](/img/screenshot-790-.png)

11. SageMaker supports Jupyter notebooks.

12. Users can persist their notebook files on the attached ML storage volume.

13. Users can modify the notebook instance and select a larger profile through the SageMaker console, after saving their files and data on the attached ML storage volume.

14. Managed Spot Training with SageMaker lets users train their machine learning models using EC2 Spot instances, while reducing the cost of training their models by up to 90%.

15. Managed Spot Training is supported on all AWS regions where Amazon SageMaker is currently available.

16. There are no fixed limits to the size of the dataset users can use for training models with Amazon SageMaker.

17. SageMaker includes built-in algorithms for linear regression, logistic regression, k-means clustering, principal component analysis, factorization machines, neural topic modeling, latent dirichlet allocation, gradient boosted trees, sequence2sequence, time series forecasting, word2vec & image classification.

18. SageMaker also provides optimized Apache MXNet, Tensorflow, Chainer & PyTorch containers.

19. SageMaker supports users custom training algorithms provided through a Docker image adhering to the documented specification.

20. User can train reinforcement learning models in SageMaker in addition to supervised and unsupervised learning models.

![](/img/screenshot-786-.png)

21. SageMaker RL supports a number of different environments for training reinforcement learning models.

22. SageMaker RL includes RL toolkits such as Coach and Ray RLLib that offer implementations of RL agent algorithms such as DQN, PPO, A3C & many more.

23. Users can bring their own RL libraries and algorithm implementations in Docker Containers and run those in SageMaker RL.

24. SageMaker Neo is a new capability that enables machine learning models to train once and run anywhere in the cloud and at the edge.

25. SageMaker Neo contains two major components – a compiler and a runtime.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
