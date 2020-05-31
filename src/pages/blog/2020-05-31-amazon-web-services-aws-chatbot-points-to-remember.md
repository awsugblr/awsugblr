---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Chatbot: Points to remember'
date: 2020-05-31T10:36:21.969Z
description: 'Let''s learn about AWS Chatbot:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #Chatbot'
---
1. Chatbot makes easy to securely integrate multiple AWS services with Slack channels and Amazon Chime chat rooms for ChatOps.

2. Users can run commands from Slack to retrieve diagnostic information, invoke AWS Lambda functions or create AWS Support cases.

3. Users can use AWS Chatbot to receive notifications from AWS services, like CloudWatch alarms, Health events, Security Hub findings, Budgets alerts & CloudFormation stack events.

4. AWS Chatbot supports read-only commands for most AWS services.

5. AWS Chatbot commands use the already-familiar AWS Command Line Interface syntax.

6. AWS Chatbot is available at no additional charge. Users will only pay for the AWS resources that are used with AWS Chatbot.

7. AWS Chatbot is a global service and can be used in all commercial AWS regions.

8. Users can provision Slack channel configurations using AWS CloudFormation.

9. AWS Chatbot integrates with Amazon Chime via webhooks.

10. AWS Chatbot integrates with Slack via an AWS Chatbot Slack app that users can install to their Slack workspace from the AWS Chatbot console.

11. An AWS Chatbot configuration is a mapping of a Slack channel or an Amazon Chime chat room with SNS topics and an IAM role.

12. Users can use SNS topics from multiple public AWS regions in the same AWS Chatbot configuration.

13. AWS Chatbot notifications formatting is not customizable.

14. AWS Chatbot configurations use IAM roles that the AWS Chatbot service assumes when making API calls and running commands on behalf of AWS Chatbot users.

15. The AWS Chatbot command syntax is the same as users would use in a terminal: _@aws service command --options_

![Image retrieved from: https://aws.amazon.com/chatbot/](/img/screenshot-1373-.png)

16. AWS Chatbot does not support commands to create, delete or configure AWS resources.

17. Users may experience some latency when invoking CLI commands through AWS Chatbot.

18. Users cannot display or decrypt secret keys or key pairs for any AWS service, or pass IAM credentials.

19. Users cannot add attachments to support cases from the Slack channel.

20. Slack channels do not support standard AWS CLI pagination.

21. AWS Chatbot Lambda-Invoke Command Permissions policy allows users to invoke AWS Lambda functions in Slack channels.

22. AWS Chatbot tracks users use of command options and prompts them for any missing parameters before it runs the command they want.

23. Third-party auditors assess the security and compliance of AWS Chatbot as part of multiple AWS compliance programs.

24. Users compliance responsibility when using AWS Chatbot is determined by the sensitivity of their data, their company's compliance objectives & applicable laws and regulations.

25. AWS Chatbot is protected by the AWS global network security procedures.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
