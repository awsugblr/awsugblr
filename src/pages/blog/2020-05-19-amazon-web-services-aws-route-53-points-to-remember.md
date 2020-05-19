---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Route 53: Points to remember'
date: 2020-05-19T05:28:20.919Z
description: 'Let''s learn about Amazon Route 53:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #DNS #Route53'
---
1. Route 53 provides highly available and scalable DNS, domain name registration and health-checking web services.

2. Users can combine their DNS with health-checking services to route traffic to healthy endpoints or to independently monitor or alarm on endpoints.

3. With Route 53, users can create and manage their public DNS records.

4. Route 53 is designed to automatically answer queries from the optimal location depending on network conditions.

5. Each Route 53 hosted zone is served by its own set of virtual DNS servers.

6. A hosted zone is analogous to a traditional DNS zone file, it represents a collection of records that can be managed together, belonging to a single parent domain name.

7. Route 53 charges are based on actual usage of the service for Hosted Zones, Queries, Health Checks and Domain Names.

8. Route 53 SLA provides for a service credit if a customer’s monthly uptime percentage is below the service commitment in any billing cycle.

9. Hosted zones are billed once when they are created and then on the first day of each month.

10. Anycast is a networking and routing technology that helps end users’ DNS queries get answered from the optimal Route 53 location given network conditions.

11. Route 53 supports importing standard DNS zone files which can be exported from many DNS providers as well as standard DNS server software such as BIND.

12. Route 53 also offers alias records, which are an Amazon Route 53-specific extension to DNS.

13. A wildcard entry is a record in a DNS zone that will match requests for any domain name based on the configuration user set.

14. Users can also use Alias records to map their sub-domains to their ELB load balancers, CloudFront distributions or S3 website buckets.

15. Route 53 allows users to list multiple IP addresses for an A record and responds to DNS requests with the list of all configured IP addresses.

16. Route 53 allows DNSSEC on domain registration.

17. Route 53 supports both forward (AAAA) and reverse (PTR) IPv6 records.

18. Weighted Round Robin allows users to assign weights to resource record sets in order to specify the frequency with which different responses are served.

19. Route 53 Geo DNS lets users balance load by directing requests to specific endpoints based on the geographic location from which the request originates.

20. Route 53 supports multivalue answers in response to DNS queries.

21. A traffic policy is the set of rules that users define to route end users’ requests to one of their application’s endpoints.

22. Traffic Flow supports all Route 53 DNS Routing policies including latency, endpoint health, multivalue; answers, weighted round robin and geo.

23. Users can manage private IP addresses within VPCs using Route 53’s Private DNS feature.

24. Users can resolve internal DNS names from resources within their VPC that do not have Internet connectivity.

25. DNS Failover consists of two components: health checks and failover.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
