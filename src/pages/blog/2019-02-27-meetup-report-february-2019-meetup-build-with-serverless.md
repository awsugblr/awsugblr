---
templateKey: blog-post
title: 'Meetup report: February 2019 Meetup: Build with Serverless'
date: 2019-02-27T11:58:38.897Z
description: Summary of February 2019 Meetup focusing on Serverless with AWS Amplify
tags:
  - Meetup
  - February 2019
  - Report
---
Build with Serverless started with  a warm welcome by [Jeevan Dongre](https://www.linkedin.com/in/jeevandongre/), AWS Community Hero and Lead - AWS User Group Bengaluru and introduced our speaker of the day, [Prashanth HN](https://in.linkedin.com/in/hnprashanth) co-founder of Wheelsbox.com.

![null](/img/image1.jpg)

## Talk started with the question: “What is Serverless Architecture ?”

A serverless architecture is a way to build and run applications and services without having to manage infrastructure. By using a serverless architecture, developers can focus on their core product instead of worrying about managing and operating servers or runtimes, either in the cloud or on-premises. Serverless has some benefits, for instance:

* Flexible Scaling_ Automated High Availability_ No Server/Infrastructure Management* Pay for Value
  AWS provides a set of fully managed services that one can use to build and run serverless applications. Serverless applications don’t require provisioning, maintaining and administering servers for backend components such as compute, databases, storage, stream processing, message queuing and more. 
  Here are some examples of Serverless managed services offered by AWS: 

![Serverless managed services offered by AWS](/img/image4.png)

## Then Speaker talked about: “What is AWS Amplify?”

AWS Amplify is an open source JavaScript library provided by Amazon Web Services (AWS) that enables developers to build applications with cloud services on web or mobile platforms. It is designed to be an open and pluggable with other back-end components and services. It  is designed to give a declarative interface to client developers looking to perform common actions using cloud services in a scalable and secure manner. 
The AWS Amplify library modules are broken down into categories (Auth, Analytics, Storage, APIs, Caching) to quickly add features such as User Sign Up/Sign In, MFA, tracking or metric analytics, content management or Serverless API integration. 

![null](/img/image2.png)

  Image Source: AWS Amplify Official 
Amplify provides us with:

* Amplify CLI_ Amplify Console_ Amplify JS Library
  The AWS Amplify CLI helps you set up an AWS IAM user, set up an AWS profile on your local system and then initialize Amplify powered apps with all your defined configurations\
  `\    $ amplify configure    (Configure CLI)`
  The amplify init command is a one-time initialization step for your Amplify powered cloud app.
  `\    $ amplify init ( Initialization )`
  Amplify provides a set of  comprehensive library for building sophisticated cloud-powered apps:

![null](/img/image5.png)

   Image Source: AWS Amplify Official 

And it’s time for a demo. Yes, it was a live demo by Prashanth starting from very scratch. Demo includes:

* How to install Amplify CLI?
* How to develop an application with Amplify?
* How Amplify automatically creates resources inside AWS account?
* And finally how to deploy an application with Amplify Console?

Demo was started with a simple calorie counter application which was purely using React local state with no auth & no data persistence. Presenter started adding capabilities to application one by one to show how easy and powerful it is to build apps using Amplify. 

In the first step app was added with Authentication which also exposed inbuilt components & authentication flows amplify react library provides. Next, CRUD API got added to application and the app started creating and reading records from DynamoDB through API. In the last step of development process, presenter showed how one can store & read custom user attributes on Cognito.

After adding all capabilities the app was fully functional & it was time to ship it to the internet. Presenter used Amplify dashboard to setup CI/CD pipeline for the project and explained how amplify can not only deploy frontend but also deploy all backend changes. The build was successful and the app was ready with a amplify link for others to check out.

If you find AWS Amplify exciting and want to get start with it, below are some reference links which helps you in getting start:

* AWS Amplify Home: https://aws-amplify.github.io
* Demo Project: https://github.com/hnprashanth/amplify-demo-calorie-tracker
* AWS Amplify FAQ: https://aws.amazon.com/amplify/faqs/
* AWS Amplify Console FAQ: https://aws.amazon.com/amplify/console/faqs/

On the whole it was a wonderful demo where Amplify, Cognito & Serverless were absolutely simplified. The most frequently asked questions from the attendees were "Show me the console, Did Amplify do everything for you ?"

In end, a thank you note by Jeevan and announcements for our upcoming Community Day - 2019 ( https://communityday.awsugblr.in/ ). 

Stay tuned for upcoming meetups. Follow us on [Linkedin](https://www.linkedin.com/in/awsugblr/) or [Twitter](https://twitter.com/awsugblr) and for more update please visit:  [https://awsugblr.in](https://awsugblr.in/) .

AWSUGBLR organizers would like to thank

* The speakers: Prashanth HN for a great demo
* Attendees for taking time out of their Saturday and joining us for the meet
* Amazon Internet Services Private Limited for hosting the meetup and providing stickers, tea/coffee and snacks
* [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/) for contributing to the meetup report and [Bhuvaneswari](https://www.linkedin.com/in/bhuvanas/) for supplemental inputs

Stay tuned for upcoming meetups! For any feedback, comments, requests or contributions, please write to us on <mailto:info@awsugblr.in>
