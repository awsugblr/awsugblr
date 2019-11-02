---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Redshift: Points to remember'
date: 2019-11-02T05:23:21.050Z
description: 'Let''s learn about Amazon Redshift:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #Redshift'
---
1. Redshift is a fast, fully managed data warehouse that makes it simple & cost-effective to analyze all data using standard SQL & existing BI tools.

2. Redshift allows to run complex analytic queries against petabytes of structured data, using sophisticated query optimization, columnar storage on high-performance local disks & massively parallel query execution.

3. Redshift gives fast querying capabilities over structured data using familiar SQL-based clients & BI tools using standard ODBC and JDBC connections.

4. Redshift supports VPC, SSL, AES-256 encryption & Hardware Security Modules to protect data in transit and at rest.

5. Redshift Spectrum is a feature of Redshift that enables to run queries against exabytes of unstructured data in S3, with no loading or ETL required.

6. Redshift manages all the computing infrastructure, load balancing, planning, scheduling & execution of queries on data stored in S3.

7. Users can load data into Redshift from a range of data sources including S3,DynamoDB,EMR,Glue,Data Pipeline and or any SSH-enabled host on EC2 or on-premises.

8. Redshift will automatically detect and replace a failed node in user's data warehouse cluster.

9. Redshift replicates all user's data within their data warehouse cluster when it is loaded and also continuously backs up their data to S3.

10. Redshift always attempts to maintain at least three copies of data (the original and replica on the compute nodes and a backup in S3).

![](/img/screenshot-733-.png)

11. Redshift can also asynchronously replicate snapshots to S3 in another region for disaster recovery.

12. Redshift enables automated backups of data warehouse cluster with a 1-day retention period.

13. Concurrency scaling is a feature in Redshift that provides consistently fast query performance, even with thousands of concurrent queries.

14. Elastic Resize adds or removes nodes from a single Redshift cluster within minutes to manage its query throughput.

15. Redshift Spectrum supports many open source data formats, including Avro, CSV, Grok, Ion, JSON, ORC, Parquet, RCFile, RegexSerDe, SequenceFile, TextFile & TSV.

16. Redshift Spectrum supports Gzip and Snappy compression.

17. The CREATE EXTERNAL SCHEMA command supports Hive Metastores. AWS do not currently support DDL against the Hive Metastore.

18. Redshift Spectrum queries run using per-query scale-out resources against data in S3.

19. Redshift periodically performs maintenance to apply fixes, enhancements and new features to cluster.

20. For Redshift, users are billed based on: Compmute node hours, Backup Storage, Data transfer, Data scanned.

![](/img/screenshot-734-.png)

21. Users can also use Redshift Spectrum together with EMR. Redshift Spectrum uses the same approach to store table definitions as Amazon EMR.

22. In Redshift, a leader node receives queries from client applications, parses the queries and develops execution plans, which are an ordered set of steps to process these queries.

23. In Redshift, compute nodes execute the steps specified in the execution plans and transmit data among themselves to serve these queries.

24. Redshift uses a variety of innovations to achieve up to ten times higher performance than traditional databases for data warehousing and analytics workloads: Columnar Data Storage, Advanced Compression, Massively Parallel Processing (MPP), Redshift Spectrum.

25. Redshift automatically distributes data and query load across all nodes.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
