---
templateKey: blog-post
title: >-
  Meetup report: Aug 2019 Meetup: Optimize your EC2 costs by upto 90% using Spot
  Instance
date: 2019-09-02T15:12:37.975Z
description: >-
  Summary of Aug 2019 Meetup on how to optimize your EC2 costs by upto 90% using
  Spot Instance
tags:
  - Meetup
  - Aug 2019
  - Report
---
August meetup started with an introduction and welcome note by [Bhuvaneswari Subramani](https://www.linkedin.com/in/bhuvanas/), co-orgainzer AWS User Group Bengaluru, setting stage for our speakers, [Chakravarthy Nagarajan](https://www.linkedin.com/in/chakravarthy-nagarajan-7653311a/) (popularly known as Chakra), the Spot Specialist SA &  [Sridhar Bharadwaj](https://www.linkedin.com/in/sridhar-bharadwaj/), Business Development Manager - EC2 Spot at AWS.

Infact, Chakra is back to #awsugblr after a year to talk about more EC2 Spot but still the conference hall was packed with new set of audience except the organizers ([Runcy](https://www.linkedin.com/in/runcyoommen/) & Bhuvaneswari). You may refer to the detailed agenda in the [August meetup announcement blog](https://www.awsugblr.in/blog/2019-08-28-august-2019-meetup-how-to-optimize-your-ec2-costs-by-upto-90-scale-your-application-throughput-by-upto-10x/).

The session was super interactive from start to end and that's the best credit reward for the trainer coming over the festival weekend to share his deep insights on EC2 Spot.

![Chakra with the interactive audience](/img/aug2019_chakra.png)

## Pop Quiz

Pop Quiz by Sridhar at the end fo the session was a highlight and the techies who got it right was reward with the special Spot EC2 T-shirts

![null](/img/aug2019_sridhar.png)

And here is the Pop Quiz winners posing with their T-shirts

![null](/img/aug2019_popquiz.png)

## Documentation links from our trainers:

1. Link to download Presentation used in our discussion: \
   **EC2 Spot  presentation deck  -  Spot Workshop** for AWSUG Meetups  -  presentation deck -   <https://view.highspot.com/viewer/5d62b347c714332d60244238>
2. Documentation about **Spotfleet, Auto-Scaling Groups and EC2 Fleet** (Orchestration tools and best practices for diversification)

* EC2 Spot instances overview <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html>
* Spot Fleet\
  <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet.html>
* Spot Instance Advisor: <https://aws.amazon.com/ec2/spot/instance-advisor/>
* Spot Instances – Dynamic Pricing:  Displays the Spot price for each region and instance type (updated every 5 minutes) - <https://aws.amazon.com/ec2/spot/pricing/>
* Spot Pricing History tool (needs AWS console login):  CONSOLE =>  EC2 => SPOT INSTANCES => PRICING HISTORY button
* New ASG (Auto Scaling Groups) with mixed instance types -  <https://aws.amazon.com/blogs/aws/new-ec2-auto-scaling-groups-with-multiple-instance-types-purchase-options/>
* Allocation Strategies for Spot  Instances :\
  with ASG:  <https://aws.amazon.com/blogs/compute/introducing-the-capacity-optimized-allocation-strategy-for-amazon-ec2-spot-instances/>\
  with EC2 Fleet: <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-configuration-strategies.html#ec2-fleet-allocation-strategy>\
  With Spot Fleet:  <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-fleet.html#spot-fleet-allocation-strategy>
* Replacing a Launch Configuration with a Launch Template:  <https://docs.aws.amazon.com/autoscaling/ec2/userguide/replace-launch-config.html>
* Video of how to configure ASGs for Spot instances and Mixed Instance Groups - <https://www.youtube.com/watch?v=mXX1dgmStlo>
* Interruption handling - at an instance level (terminate, stop & hibernate). Please refer to <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-interruptions.html>
* Reference script with Cloudformation template - as an example to de-register from ELB :  <https://github.com/awslabs/ec2-spot-labs/tree/master/ecs-ec2-spot-auto-deregister>
* Tagging best practices for EC2 instances - <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Using_Tags.html>
* Spot Blocks - <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/spot-requests.html#fixed-duration-spot-instances>

3. Managing Spot instances with **Terraform**:\
<https://www.terraform.io/docs/providers/aws/r/spot_fleet_request.html> and  <https://www.terraform.io/docs/providers/aws/r/launch_template.html>

4. **Jenkins** documentation of plugin for Spot - <https://wiki.jenkins.io/display/JENKINS/Amazon+EC2+Fleet+Plugin>

5. Link for **EC2 Spot Workshops** (<http://www.ec2spotworkshops.com>) - to get step by step hands on lab training experience on mechanisms to use Spot.

6. Spot instances usage with **Amazon EMR (Hadoop / Spark) Clusters for Analytics** - [blog of best practices](https://aws.amazon.com/blogs/big-data/best-practices-for-running-apache-spark-applications-using-amazon-ec2-spot-instances-with-amazon-emr/)

7. Powering your **Amazon ECS Cluster** with Amazon EC2 Spot Instances: <https://aws.amazon.com/blogs/compute/powering-your-amazon-ecs-cluster-with-amazon-ec2-spot-instances/>

8. Docker, Amazon ECS, and Spot Fleets: A Great Fit Together:  <https://aws.amazon.com/blogs/aws/docker-amazon-ecs-and-spot-fleets-a-great-fit-together/>

9. Four Steps to Run ECS Clusters on EC2 Spot Instances: <https://aws.amazon.com/ec2/spot/containers-for-less/get-started/>

10. Cluster Auto Scaler with Mixed instance types support with v1.3.0:      <https://github.com/kubernetes/autoscaler/tree/master/cluster-autoscaler/cloudprovider/aws>

11. Spot instances usage for **Kubernetes clusters**:

* EKS - blog : <https://aws.amazon.com/blogs/compute/run-your-kubernetes-workloads-on-amazon-ec2-spot-instances-with-amazon-eks/>
* K8s - Spot Interruption handler:  - <https://github.com/kube-aws/kube-spot-termination-notice-handler>
* [Kubernetes related Blog by Ran Sheinberg ](https://medium.com/@ranshn/the-definitive-guide-to-running-ec2-spot-instances-as-kubernetes-worker-nodes-68ef2095e767)of AWS (Specialist Solution Architect – EC2 Spot) 

12. **Training Deep Learning Models** on GPUs using Amazon EC2 Spot Instances:   <https://aws.amazon.com/blogs/machine-learning/train-deep-learning-models-on-gpus-using-amazon-ec2-spot-instances/>

13. Amazon Elastic Inference for Inferencing workloads - using EC2 Spot instances:\
<https://aws.amazon.com/blogs/aws/amazon-elastic-inference-gpu-powered-deep-learning-inference-acceleration/> and <https://github.com/awslabs/ec2-spot-labs/tree/master/ec2-spot-elastic-inference>


Stay tuned for upcoming meetups. Follow us on [Linkedin](https://www.linkedin.com/in/awsugblr/) or [Twitter](https://twitter.com/awsugblr) and for more update please visit:  [https://awsugblr.in](https://awsugblr.in/).

AWSUGBLR organizers would like to thank

* The speaker: Chakra & Sridhar
* Attendees for gathering on a weekend for the meet
* Locus for hosting the meetup, providing tea & snacks 
* [Bhuvaneswari](https://www.linkedin.com/in/bhuvanas/) for contributing to the meetup report

For any feedback, comments, requests or contributions, please write to us on <mailto:info@awsugblr.in>
