---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Storage Gateway: Points to remember'
date: 2019-10-11T03:54:18.361Z
description: 'Let''s learn about Amazon Storage Gateway:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #StorageGateway'
---
1. AWS Storage Gateway service enables hybrid cloud storage between on-premises environments and the AWS Cloud.

2. It's typical use cases include backup & archiving, disaster recovery, moving data to S3 for in-cloud workloads & tiered storage.

3. AWS Storage Gateway supports three storage interfaces: file, volume & tape.

4. The file gateway enables users to store and retrieve objects in S3 using file protocols, such as NFS.

5. The volume gateway provides block storage to applications using the iSCSI protocol.

![](/img/aws-storage-gateway-cached-diagram.png)

6. Tape gateway provides user's backup application with an iSCSI virtual tape library interface, consisting of a virtual media changer, virtual tape drives & virtual tapes.

7. The volume gateway runs in either a cached or stored mode.

8. It provides a standard set of protocols such as iSCSI, SMB & NFS, which allow users to use their existing applications without any changes.

9. All data transferred between any type of gateway appliance and AWS storage is encrypted using SSL.

10. AWS Storage Gateway is HIPAA eligible.

11. AWS Storage Gateway in compliance with the Payment Card Industry Data Security Standard (PCI DSS) based on recent assessments.

12. Users can manage backup & retention policies for cached and stored volume modes of Volume Gateway through AWS Backup.

13. Users can deploy a Storage Gateway on a private, non-routable network if that network is connected to their VPC via DX or VPN.

14. File gateway supports Linux clients connecting to the gateway using NFS versions 3 and 4.1 for Linux clients & supports Windows clients connecting to the gateway using Server SMB versions 2 and 3.

15. File gateway can integrate with Microsoft Active Directory on-premises as well as with in-cloud Active Directory solutions such as Managed Microsoft AD.

![](/img/gateway-vtl-architecture2-diagram.png)

16. File gateway will not use the accelerated endpoints even if user's bucket is configured for S3 Transfer Acceleration.

17. Volume gateways compress data before that data is transferred to AWS and while stored in AWS.

18. Storage gateway supports PrivateLink for all gateway types (File/Volume/Tape).

19. Volume and Tape Gateways connect directly to AWS services through the Storage Gateway VPC endpoint without the need for a proxy to S3.

20. Volume and tape gateways support configuration of a Socket Secure version 5 (SOCKS5) proxy between on-premises gateway and AWS.

21. File gateways support configuration of an HyperText Transfer Protocol (HTTP) proxy.

22. Users can use CloudWatch to monitor the performance metrics for their gateway, giving them insight into storage, bandwidth, throughput & latency.

23. Users can use CloudWatch metrics including CachePercentDirty, CacheHitPercent, CacheFree & CachePercentUsed.

24. AWS Storage Gateway periodically deploys important updates and software patches to gateway virtual machine (VM).

25. There are 3 elements to how user will be billed for AWS Storage Gateway: Storage, requests & data transfer.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
