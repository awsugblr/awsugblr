---
templateKey: blog-post
title: 'Meetup report: November 2018 Meetup on Cost Optimization'
date: 2018-11-18T05:13:45.625Z
description: Summary of November 2018 Meetup
tags:
  - meetup
  - november
  - '2018'
  - spot
  - cost optimisation
---
The November 2018 meetup was held at the newly opened Amazon Internet Services Private Ltd office. 

The session started with a Welcome note by Sathyajith, one of the co-organizers of AWS User Group Bengaluru. It was followed by a deep dive session on Cloud Financial Management Fundamentals by [Spencer Marley](https://www.linkedin.com/in/spencermarley/), Commercial Architect, Amazon Web Services. The second sesion was by [Chakravarthy(Chakra) Nagarajan](https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/), Solutions Architect, EC2 Spot, Amazon Internet Services Private Ltd help us  to understand spot instances with interesting demo. Post this, we had [Saket Agarwal](https://www.linkedin.com/in/saket-agarwal-51254265/), Head of Business Development for Spotinst to give a brief demo about what SpotInst is and how SpotInst is helping customer with their managed services using spot instances.

Here are some key takeaways from the sessions:

**Question: Why should you use the spot instances?**

> Your answer is bit right i.e. for low cost but always remember the key point i.e. Using 
>
> **Spot Instance is a architecture best practice.**

Amazon EC2 Spot Instances offer spare compute capacity available in the AWS cloud at large discounts compared to On-Demand instances.

Spot Instances can be used for:

* Big data workloads
* Containerized workloads
* High performance computing
* CI/CD pipelines
* Stateless web servers
* Testing and development workloads

Spot Instances Features:

* Cost saving up to 90% (Low cost)
* With options of termination (default option), start/stop and hibernate (New feature), one can run workloads without interruptions 
* Easy to launch (Launch template)
* Speed up work flows and scale application
* Tightly integrated with other AWS Services (Usage flexibility)

#### What were the some of new terms or services in today's sessions?

* AWS Instance Scheduler: It enables customers to configure custom start and stop schedules for EC2 and RDS instances.
* Reserved instances convertible class:  It enables to exchange one or more Convertible Reserved Instances for another Convertible Reserved Instance with new attributes (instance family, instance type, platform, scope and tenancy).
* AWS Budget: it gives the ability to set custom budgets that alert, when your costs or usage exceed your budgeted amount. One can also use AWS Budgets to set RI utilization or coverage targets and receive alerts when utilization drops below the threshold you define. Reserved instances alerts support Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache reservations.
* Spot bid advisor:  It help to determine an Amazon EC2 Spot instance bid price that suits our needs.
* Spot instance pool and Step scaling metrics: A Spot Instance pool is a set of unused EC2 instances with the same instance type, operating system, Availability Zone, and network platform. 
* Hibernating a Spot instance: When a Spot Instance is hibernated by the Spot service, the EBS volumes are preserved and instance memory (RAM) is preserved on the root volume. The private IP addresses of the instance are also preserved. Instance storage volumes and public IP addresses, other than Elastic IP addresses, are not preserved.

SpotInst

Spotinst Elastigroup is a proactive application scaling service, designed to optimize compute in the cloud. A few features of using spotinst:

* ELB Integration and Auto-scaling
* Connection Draining
* Cost-oriented termination policy
* Elastic container service support
* Enterprise-grade SLA

And here's the end of sessions with delicious lunch and cool AWS stickers!!

Stay tuned for upcoming meetups. Follow us on Linkedin or Twitter and for more update please visit:  https://awsugblr.in .
