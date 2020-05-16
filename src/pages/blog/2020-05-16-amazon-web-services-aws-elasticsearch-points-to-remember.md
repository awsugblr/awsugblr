---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Elasticsearch: Points to remember'
date: 2020-05-16T05:43:52.826Z
description: 'Let''s learn about Amazon Elasticsearch:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #Elasticsearch'
---
1. Amazon ES Service is a managed service that makes it easy to deploy, operate & scale Elasticsearch clusters in the AWS Cloud.

2. ES Service domains are Elasticsearch clusters created using the Amazon Elasticsearch Service console, CLI or API.

3. Each domain is an Elasticsearch cluster in the cloud with the compute and storage resources user specify.

4. Users can create and delete domains, define infrastructure attributes and control access and security.

5. Amazon ES Service integrates with CloudWatch to produce metrics that provide information about the state of the domains.

6. Amazon ES Service also offers options to modify domain instance and storage settings to simplify the task of tailoring domain based to application needs.

7. It offers customers the option to deploy their instances across one, two or three AZs.

8. Amazon Elasticsearch Service is integrated with Amazon VPC.

9. AWS CloudFormation supports Amazon Elasticsearch Service.

10. Users can configure dedicated master nodes for their domains.

11. Users can create multiple Elasticsearch indices within the same Amazon Elasticsearch Service domain.

12. Users can use native Elasticsearch APIs, such as the index and bulk APIs, to load data into their domain.

13. Amazon Elasticsearch Service supports integration with Logstash.

14. Amazon ES Service includes a built-in Kibana install that is deployed with Elasticsearch Service domain.

15. Users can choose between Magnetic, General Purpose and Provisioned IOPS EBS volumes while provisioning ES cluster.

![https://aws.amazon.com/elasticsearch-service/?nc=sn&loc=1](/img/screenshot-1301-.png)

16. Amazon ES Service supports one EBS volume (max size of 1.5 TB) per instance associated with a domain.

17. Users can enable three AZ deployment for both existing and new domains using the AWS console, CLI or SDKs.

18. Amazon ES Service does not charge anything for enabling three AZ deployment.

19. By default, Amazon ES Service automatically creates hourly snapshots of each ES Service domain and retains them for 14 days.

20. There is no additional charge for the automated hourly snapshots. The snapshots are stored for free in an ES Service S3 bucket.

21. Amazon ES Service exposes three ES logs through CloudWatch Logs: error logs, search slow logs & index slow logs.

22. Amazon ES Service provides multiple security features and is HIPAA eligible and compliant with PCI DSS, SOC, ISO and FedRamp standards etc.

23. Amazon ES Service security has three main layers: Network, Domain access policies and fine-grained access control.

24. Amazon ES Service supports encryption at rest through AWS Key Management Service, node-to-node encryption over TLS & the ability to require clients to communicate of HTTPS.

25. UltraWarm is a fully-managed, low-cost, warm storage tier for Amazon ES Service.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
