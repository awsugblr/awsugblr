---
templateKey: blog-post
title: 'Amazon Web Services (AWS): Quantum Ledger Database: Points to remember'
date: 2020-05-23T04:04:11.635Z
description: 'Let''s learn about Amazon QLDB:'
tags:
  - '#AWS #LetsLearnTogether #AWSUGBLR #QLDB #Database'
---
1. Quantum Ledger Database is a purpose-built ledger database that provides a complete and cryptographically verifiable history of all changes made to application data.

2. Data in Amazon QLDB is written to an append-only journal, providing the developer with full data lineage.

3. Data in Amazon QLDB's journal is immutable and verifiable, meaning users can trust the data in their ledger.

4. QLDB is not a blockchain or distributed ledger technology.

5. QLDB supports transactions with ACID semantics, a flexible document data model & a familiar SQL-like API.

6. QLDB is fully managed and automatically scales to meet the needs of user's application with no provisioning required.

7. To connect to QLDB and transact with the data in the ledger, users need to use the AWS-provided QLDB driver.

8. QLDB can execute 2-3X as many transactions than ledgers in common blockchain frameworks.

9. QLDB has a centralized design, allowing its transactions to execute without the need for multi-party consensus.

10. QLDB allows to access and manipulate data using PartiQL, which is a new open standard query language.

11. QLDB's ledger is deployed across multiple AZs with multiple copies per AZ.

12. QLDB is strongly durable.

13. QLDB does not support cross-region replication.

14. QLDB is integrated with AWS Private Link.

15. QLDB uses AWS-owned keys to encrypt customer data. By default, all data in transit and at rest is encrypted.

![https://aws.amazon.com/qldb/features/](/img/screenshot-1332-.png)

16. QLDB Streaming capability provide at-least-once delivery guarantee.

17. QLDB provides CloudWatch metrics for ledgers.

18. QLDB stores data using a document-oriented data model, which provides users the flexibility to store structured and semi-structured data.

19. QLDB’s data model supports nested data structures.

20. QLDB transactions have full serializability - the highest level of isolation.

21. QLDB backs up data continuously while maintaining consistent performance, allowing it to transparently recover from any instance or physical storage failures.

22. QLDB uses a cryptographic hash function (SHA-256) to generate a secure output file of user data’s change history, known as a digest.

23. Manufacturers can use QLDB to easily trace the history of the entire production and distribution lifecycle of a product.

24. With QLDB, retail companies can look back and track the full history of inventory and supply chain transactions at every logistical stage of their products.

25. With QLDB, customers can easily maintain a trusted and complete record of the digital history of their employees, in a single place.

A Points to remember series by [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/).
