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

The session started with a Welcome note by [Sathyajith](https://www.linkedin.com/in/sathyabhat/), one of the co-organizers of AWS User Group Bengaluru. It was followed by a deep dive session on Cloud Financial Management Fundamentals by [Spencer Marley](https://www.linkedin.com/in/spencermarley/), Commercial Architect, Amazon Web Services. The second sesion was by [Chakravarthy(Chakra) Nagarajan](https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/), Solutions Architect, EC2 Spot, Amazon Internet Services Private Ltd help us  to understand spot instances with interesting demo. Post this, we had [Saket Agarwal](https://www.linkedin.com/in/saket-agarwal-51254265/), Head of Business Development for Spotinst to give a brief demo about what SpotInst is and how SpotInst is helping customer with their managed services using spot instances. 

![Spencer with the attendeers](/img/spencer-crowd.jpg)

![Chakra explaining on Spot](/img/chakra.jpg)

![Saket talking about Spot Instances](/img/saket.jpg)

Finally, we had Neeraj from Moonfrog, and Gaurav from Boomerang Commerce explain how they are using Spot instances.

Here are some key takeaways from the sessions:

* Culture and mechanisms are as important as technical and financial constructs on cost savings. 
* Use Spot Instances for the benefit of low cost but always remember that Spot Instance is a architecture best practice.

### Overview of Spot Instances

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

#### Some features of Spot explained

* AWS Instance Scheduler: It enables customers to configure custom start and stop schedules for EC2 and RDS instances.
* Reserved instances convertible class:  It enables to exchange one or more Convertible Reserved Instances for another Convertible Reserved Instance with new attributes (instance family, instance type, platform, scope and tenancy).
* AWS Budget: it gives the ability to set custom budgets that alert, when your costs or usage exceed your budgeted amount. One can also use AWS Budgets to set RI utilization or coverage targets and receive alerts when utilization drops below the threshold you define. Reserved instances alerts support Amazon EC2, Amazon RDS, Amazon Redshift, and Amazon ElastiCache reservations.
* Spot bid adviser:  It help to determine an Amazon EC2 Spot instance bid price that suits our needs.
* Spot instance pool and Step scaling metrics: A Spot Instance pool is a set of unused EC2 instances with the same instance type, operating system, Availability Zone, and network platform. 
* Hibernating a Spot instance: When a Spot Instance is hibernated by the Spot service, the EBS volumes are preserved and instance memory (RAM) is preserved on the root volume. The private IP addresses of the instance are also preserved. Instance storage volumes and public IP addresses, other than Elastic IP addresses, are not preserved.

### Summary of the talks

##### Cloud Financial Management Fundamentals by [Spencer Marley](https://www.linkedin.com/in/spencermarley/)

Pillars of Cloud Financial Management Fundamentals

* Right sizing
* Elasticity
* Leverage available Pricing Models
* Leverage Storage Classes
* Culture and mechanisms are as important as technical and financial constructs on cost savings. 

##### AWS EC2 Spot instances by [Chakravarthy(Chakra) Nagarajan](https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/)

* AWS EC2 Consumption models:
  * On Demand (pay for capacity by second, no commitments)
  * Reserved (significant discounts for commitments)
  * Spot ( spare EC2 capacity for up to 90% discounts, for fault tolerant, or time-insensitive workloads)
* Simple rules of spot:
  * Price changes infrequently based on supply and demand
  * 2 minute warning when capacity is to be revoked
* Handling interruptions:  
  * 95% were not interrupted by AWS
  * Check for 2 minute termination notice and automate by
    * Check pointing
    * Draining from ELB
    * Using stop-start and hibernate to restart faster
    * Interruption notice via CloudWatch events or manually polling instance metadata
* Spot fleet:
  * Onetime request or maintain collection of EC2 instances
  * Allocation strategy: Lowest price or diversified across n number of pools
* Amazon EC2 fleet:
  * Simplifies provisioning of EC2 capacity across different instance types, AZs, purchase models
  * Can have spot, on-demand, reserved 
  * Spot blocks: Defined duration of workload (1-6 hours)

##### SpotInst by [Saket Agarwal](https://www.linkedin.com/in/saket-agarwal-51254265/)

[Spotinst](https://spotinst.com/) is a proactive application scaling service, designed to optimize compute in the cloud. SpotInst enables following features to improve experience of using Spot:

* ELB Integration and Auto-scaling
* Connection Draining
* Cost-oriented termination policy
* Elastic container service support
* Enterprise-grade SLA
* Average of 35 days of up time
* Pricing model: 14-day free trial. SpotInst charges 20% of savings 

The AWSUGBLR organizers thanks

* The speakers: Spencer, Chandra, Saket, Gaurav, Neeraj for explaining the various concepts and use cases
* Amazon Internet Services Private Limited for hosting the meetup and providing stickers, tea/coffee and lunch
* [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/) and [Bhuvaneswari](https://www.linkedin.com/in/bhuvanas/) for contributing to the meetup report.

Stay tuned for upcoming meetups. For any feedback, comments, requests or contributions, please write to us on <mailto:info@awsugblr.in>
