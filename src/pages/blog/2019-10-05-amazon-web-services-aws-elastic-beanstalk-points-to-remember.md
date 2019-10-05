---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Elastic Beanstalk: Points to remember'
date: 2019-10-05T05:14:55.256Z
description: 'Let''s learn about Amazon Elastic Beanstalk:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #ElasticBeanstalk'
---
1. Elastic Beanstalk makes it easier for developers to quickly deploy and manage applications in the AWS Cloud.

2. Elastic Beanstalk supports Java, .NET, PHP, Node.js, Python, Ruby, Go and Docker web applications.

3. Elastic Beanstalk is designed so that it can be extended to support multiple development stacks and programming languages in the future.

4. Elastic Beanstalk automates the details of capacity provisioning, load balancing, auto scaling & application deployment, creating an environment that runs a version of application.

5. Elastic Beanstalk uses proven AWS features and services, such as EC2, RDS, ELB, Auto Scaling, S3 & SNS to create an environment that runs application.

6. Elastic Beanstalk runs on the Amazon Linux AMI and the Windows Server 2012 R2 AMI.

7. Elastic Beanstalk stores application files & optionally, server log files in S3.

8. Elastic Beanstalk can automatically provision an Amazon RDS DB instance.

9. By default, users application is available publicly at myapp.elasticbeanstalk.com for anyone to access.

10. IAM users with the appropriate permissions can now interact with AWS Elastic Beanstalk.

![](/img/screenshot-678-.png)

11. Users can allow or deny permissions to specific AWS Elastic Beanstalk resources, such as applications, application versions & environments.

12. An IAM user can use their access key and secret key to perform operations using the Elastic Beanstalk API.

13. Elastic Beanstalk can automatically perform platform updates for new patch and minor platform versions.

14. Elastic Beanstalk will not automatically perform major platform version updates (Like Java 7 Tomcat 7 to Java 8 Tomcat 8) because they include backwards incompatible changes and require additional testing.

15. There is no additional charge for AWS Elastic Beanstalk– user pay only for the AWS resources actually used to store and run their application.

16. Elastic Beanstalk provides a unified user interface to monitor and manage the health of applications.

17. Elastic Beanstalk collects 40+ key metrics and attributes to determine the health of application.

18. Elastic Beanstalk is integrated with Amazon CloudWatch and AWS X-Ray.

19. Elastic Beanstalk meets the criteria for ISO, PCI, SOC 1, SOC 2 & SOC 3 compliance along with the criteria for HIPAA eligibility.

20. AWS resources launched by Elastic Beanstalk are fully accessible.

![](/img/screenshot-679-.png)

21. An Elastic Beanstalk application is a logical collection of Elastic Beanstalk components, including environments, versions & environment configurations.

22. An environment tier whose web application processes web requests is known as a web server tier.

23. An environment tier whose web application runs background jobs is known as a worker tier.

24. CloudFront can be used to distribute the content in S3, after an Elastic Beanstalk is created and deployed.

25. Elastic Beanstalk creates an S3 bucket named elasticbeanstalk-region-account-id for each region in which environments is created.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
