---
templateKey: blog-post
title: 'Amazon Web Services (AWS): VPC: Points to remember'
date: 2019-09-26T10:51:33.434Z
description: 'Let''s learn about Amazon VPC:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #VPC'
---
1. VPC allows to provision a logically isolated section of the AWS cloud where user can launch AWS resources in a virtual network.
2. VPC endpoints enables to privately connect with VPC to services hosted on AWS without requiring an Internet gateway, a NAT device, VPN or firewall proxies.
3. VPC endpoints are horizontally scalable and highly available virtual devices.
4. Amazon VPC offers two different types of endpoints: gateway type endpoints and interface type endpoints.
5. VPC supports the creation of an Internet gateway. This gateway enables EC2 instances in the VPC to directly access the Internet.
6. An Internet gateway is horizontally-scaled, redundant & highly available. It imposes no bandwidth constraints.
7. Users may use a third-party software VPN to create a site to site or remote access VPN connection with VPC via the Internet gateway.
8. AWS supports Internet Protocol Security (IPSec) VPN connections.
9. An internet gateway is not required to establish an AWS Site-to-Site VPN connection.
10. Default VPCs are assigned a CIDR range of 172.31.0.0/16. Default subnets within a default VPC are assigned /20 netblocks within the VPC CIDR range.
11. Users can route traffic via the AWS Site-to-Site VPN connection and advertise the address range from their home network.
12. Users can bring their public IPv4 addresses into AWS VPC and statically allocate them to subnets and EC2 instances.
13. A VPC can have both IPv4 and IPv6 CIDR blocks associated to it.
14. The minimum size of a subnet is a /28 (or 14 IP addresses.) for IPv4.
15. AWS reserves the first four IP addresses and the last one IP address of every subnet for IP networking purposes.
16. An IP address assigned to a running instance can only be used again by another instance once that original running instance is in a 'terminated' state.
17. Users can use VPC traffic mirroring and VPC flow logs features to monitor the network traffic in their AWS VPC.
18. A subnet must reside within a single Availability Zone.
19. The total number of network interfaces that can be attached to an EC2 instance depends on the instance type.
20. Network interfaces can only be attached to instances residing in the same Availability Zone.
21. Peering connections can be created with VPCs in different regions.
22. Peered VPCs must have non-overlapping IP ranges.
23. Edge to Edge routing isn’t supported in AWS VPC.
24. VPC peering connections do not require an Internet Gateway.
25. Security groups cannot be referenced across an Inter-Region VPC Peering connection.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
