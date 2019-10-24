---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Direct Connect: Points to remember'
date: 2019-10-24T10:21:14.878Z
description: 'Let''s learn about Amazon Direct Connect:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #DirectConnect #Network'
---
1. Direct Connect is a network service that provides an alternative to using the Internet to connect customer's on premise sites to AWS.

2. Each Direct Connect connection can be configured with one or more virtual interfaces.

3. AWS Direct Connect Partners can help users to extend their preexisting data center or office network to Direct Connect location.

4. AWS Direct Connect has two separate charges: port-hours and Data Transfer.

5. Data transfer between AZ in a region will be billed at the regular regional data transfer rate in the same month in which the usage occurred.

6. All Hosted Connection port-hour charges at a Direct Connect location are grouped by capacity.

7. For Dedicated Connections, 1Gbps and 10Gbps ports are available.

8. Users can advertise up to 100 routes over each Border Gateway Protocol session using AWS Direct Connect.

9. Direct Connect gateway is a grouping of virtual private gateways & private virtual interfaces.

10. User can associate Amazon VPCs owned by any AWS account with a Direct Connect gateway owned by any AWS account.

![](/img/screenshot-709-.png)

11. User can associate AWS Transit Gateway owned by any AWS account with a Direct Connect gateway owned by any AWS account.

12. When using Direct Connect gateway, users traffic will take the shortest path from their Direct Connect location to the destination AWS Region and vice versa regardless of the associated home AWS Region of the Direct Connect location that user are connected at.

13. Private virtual interface and Direct Connect gateway must be in the same AWS account to use Direct Connect gateway functionality.

14. Direct Connect gateway will not support CloudHub functionality.

15. A VGW-VPC pair cannot be part of more than one Direct Connect gateway.

16. User can configure/assign an ASN (Autonomous System Number) to be advertised as the Amazon side ASN during creation of the new Direct Connect Gateway.

17. Amazon will provide an ASN of 64512 for the Direct Connect Gateway if users don't choose one.

18. Direct Connect and Direct Connect Gateway support both 1500 and 9001 Maximum Transmission Unit (MTU).

19. Jumbo Frames only apply to propagated routes from Direct Connect.

20. AWS Managed VPN service does not support Jumbo Frames. If the same route is advertised over AWS Direct Connect and AWS Managed VPN, the 1500 MTU will be used.

21. Direct connect locations can also access the public resources in any AWS Region using a public virtual interface.

22. VLANs are utilized in AWS Direct Connect only to separate traffic between virtual interfaces.

23. Asynchronous BFD is automatically enabled for each Direct Connect virtual interface, but will not take effect until it's configured on user's router.

24. Link Aggregation Groups (LAG) are a way for customers to order and manage multiple direct connect ports as a single larger connection instead of as separate discrete connections.

25. Users can associate up to three AWS Transit Gateways to a Direct Connect gateway as long as the IP CIDR blocks announced from their AWS Transit Gateways do not overlap.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
