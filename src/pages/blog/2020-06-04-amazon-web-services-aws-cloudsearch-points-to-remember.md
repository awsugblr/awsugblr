---
templateKey: blog-post
title: 'Amazon Web Services (AWS): CloudSearch: Points to remember'
date: 2020-06-04T08:04:43.292Z
description: 'Let''s learn about Amazon CloudSearch:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #CloudSearch'
---
1. CloudSearch is a fully-managed service in the AWS Cloud that makes it easy to set up, manage & scale a search solution for an application.

2. CloudSearch provides easy configuration, auto scaling for data and traffic, self-healing clusters and high availability with Multi-AZ.

3. CloudSearch is automatically scales with the volume of data and complexity of search requests to deliver fast and accurate results.

4. CloudSearch lets customers add search capability without needing to manage hosts, traffic and data scaling, redundancy or software packages.

5. CloudSearch supports 34 languages, plus 'multiple' to handle mixed language fields.

6. It also supports Per-field language configuration & Language-specific text analysis.

7. It's enhanced search features provides: Suggestions, Highlighting, Geospatial search, Term boosting and Sloppy phrase search.

8. It's administration features provides: High availability option, IAM integration and User configurable scaling.

9. The new version of CloudSearch supports dictionary stemming in addition to algorithmic stemming.

10. The latest version of CloudSearch has been modified to use Apache Solr as the underlying text search engine.

11. CloudSearch supports two types of text fields, text and literal.

12. CloudSearch has a native type to support latitude and longitude, so that users can easily implement geographically-based searching and sorting.

13. CloudSearch is designed to efficiently process a wide range of search requests very quickly.

14. CloudSearch supports the following instance types: Small Search Instance, Large Search Instance, Extra Large Search Instance and Double Extra Large Search Instance.

15. When the Multi-AZ option is enabled, CloudSearch instances in either zone are capable of handling the full load in the event of a failure.

![Image Retrieved From: https://aws.amazon.com/cloudsearch/details/](/img/screenshot-1387-.png)

16. CloudSearch enables users to specify the desired instance type for their domain.

17. Users send AWS their data using a secure and encrypted SSL connection by using HTTPS instead of HTTP when they connect to CloudSearch.

18. For CloudSearch, AWS do not support user-generated encryption keys. Users will need to decrypt the data and upload it using HTTPS.

19. CloudSearch offers powerful autoscaling for all search domains.

20. CloudSearch provides automatic monitoring and recovery for search domains.

21. CloudSearch ensures low latency and high throughput performance.

22. CloudSearch uses strong cryptographic methods to authenticate users and prevent unauthorized access to domains.

23. To make data searchable, users need to format it in JSON or XML and upload it to search domain for indexing.

24. The HTTP status codes returned by the CloudSearch APIs indicate whether the request completed successfully or an error occurred while processing the request.

25. CloudSearch provides regional endpoints for accessing the configuration service and domain-specific endpoints for accessing the search and document services.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
