---
templateKey: blog-post
title: 'Amazon Web Services (AWS): IoT Greengrass: Points to remember'
date: 2019-10-28T11:18:59.969Z
description: 'Let''s learn about Amazon IoT Greengrass:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #IoT #Greengrass'
---
1. AWS IoT Greengrass is software that lets users run local compute, messaging, data caching, sync & ML inference capabilities on connected devices in a secure way.

2. AWS IoT Greengrass consists of three software distributions: AWS IoT Greengrass Core, AWS IoT Device SDK & the AWS IoT Greengrass SDK.

3. AWS IoT Greengrass also works together with Amazon FreeRTOS.

4. AWS IoT Greengrass supports Lambda functions authored in the following languages: Python 3.7, Node v8.10.0, Java 8, C, C++ or Any language that supports importing C libraries.

5. AWS IoT Greengrass local resource allows users Lambda functions to securely interact with hardware such as sensors and actuators.

6. Secure element vendors have configured their secure elements to use a set of PKCS#11 standard APIs to integrate with AWS IoT Greengrass.

7. AWS IoT Greengrass supports OPC-UA, a popular information exchange standard for industrial communication.

8. AWS IoT Device Tester for AWS IoT Greengrass is free to use.

9. AWS IoT Greengrass Core software runs on a hub, gateway or other device to automatically sync and interact with the cloud. 

10. Users can connect devices locally to AWS IoT Greengrass Core using Amazon FreeRTOS or the AWS IoT Device SDK. 

![](/img/screenshot-723-.png)

11. AWS IoT Greengrass Connectors allow users to easily build complex workflows on AWS IoT Greengrass without having to worry about understanding device protocols, managing credentials or interacting with external APIs. 

12. With AWS IoT Greengrass Over the Air Updates (OTA), customers can get all these benefits without having to manually download and reinstall the AWS IoT Greengrass Core software.

13. AWS IoT Device Tester for AWS IoT Greengrass is a test automation tool that lets users self-test and qualify AWS IoT Greengrass on their Linux-based devices.

14. AWS IoT Greengrass authenticates and encrypts device data for both local and cloud communications so that data is never exchanged between devices and the cloud without proven identity.

15. AWS IoT Greengrass synchronizes the data on the device with AWS IoT Core, providing seamless functionality regardless of connectivity.

16. AWS IoT Greengrass lets users to execute AWS Lambda functions locally, reducing the complexity of developing embedded software.

17. AWS IoT Greengrass Secrets Manager allows users to securely store, access, rotate & manage secrets – device credentials, keys, endpoints & configurations – at the edge.

18. AWS IoT Greengrass Secrets Manager is fully integrated with AWS IoT Greengrass Connectors.

19. AWS IoT Greengrass offers customers the option to store their device private key on a hardware secure element.

20. Users are charged based on the number of AWS IoT Greengrass Core devices that interact with the AWS Cloud in a given month.

![](/img/screenshot-724-.png)

21. Users can also connect to third-party applications, on-premises software & AWS services out-of-the-box with AWS IoT Greengrass Connectors.

22. AWS IoT Greengrass groups are used to organize entities in users edge environment.

23. All devices that communicate with an AWS IoT Greengrass core must be a member of a Greengrass group.

24. AWS IoT Greengrass is integrated with AWS CloudTrail, a service that provides a record of actions taken by a user, role or an AWS service in AWS IoT Greengrass. 

25. With AWS IoT Greengrass, users can perform machine learning (ML) inference at the edge on locally generated data using cloud-trained models.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
