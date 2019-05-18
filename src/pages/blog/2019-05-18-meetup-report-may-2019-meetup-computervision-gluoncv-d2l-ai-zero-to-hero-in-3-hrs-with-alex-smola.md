---
templateKey: blog-post
title: 'May 2019 #Meetup Report: Dive into #DeepLearning by @smolix'
date: 2019-05-18T05:11:52.420Z
description: >-
  Summary of May 2019 Meetup - ComputerVision GluonCV & D2L.ai - Zero to Hero in
  3 hrs with Alex Smola
tags:
  - meetup
  - May 2019
  - Report
---
AWS User Group Bengaluru and Bridgei2i were equally honoured to host our star speaker [Alex Smola](https://alex.smola.org/), Distinguished Scientist / VP - Machine Learning at AWS. Alex is recognized as one of the world’s top machine learning experts. Alex having keen interest in deep learning research, scalability of algorithms, statistical modeling, machine learning etc. 

We are also proud to annouce the first ever live streaming of our meetup through <https://www.twitch.tv/awsugblr> to enable the AWS User Groups across India to follow along Alex Smola's masterclass workshop on **Dive into Deep Learning**. 

The session started with “Computer vision is one of the key applications of deep learning.” All the participants had pre-configured their laptops with the prerequisites mentioned our [meetup announcement blog](https://www.awsugblr.in/blog/2019-05-03-may-meetup-deep-learning-hands-on-workshop-with-alex-smola/) since this meetup was a planned a workshop.

You want to start with GluonCV: Please install prerequisites as per your OS type:

http://d2l.ai/chapter_install/install.html

![null](/img/alex_for_blog.jpg)

\
Speaker started with brief introduction on GluconCV and D2L.ai. 

GluonCV provides implementations of state-of-the-art deep learning algorithms in computer vision. It aims to help engineers, researchers, and students quickly prototype products, validate new ideas and learn computer vision.

It’s features are as:

* training scripts that reproduce state of the art results reported in latest papers.
* a large set of pre-trained models.
* carefully designed APIs and easy to understand implementations.
* community support.

GluconCV supports:

* Image Classification
* Object Detection
* Semantic Segmentation
* Instance Segmentation
* Pose Estimation 

... And many other types of applications.

![](/img/alex_gv.png)

\
GluonCV depends on the recent version of MXNet. The easiest way to install MXNet is through pip:

```
$pip install mxnet-mkl>=1.4.0 --upgrade
```

```
$pip install --pre --upgrade mxnet-mkl
```

also easiest way to install GluonCV is through pip:

```
$pip install gluoncv --upgrade
```

```
$pip install gluoncv --pre --upgrade
```

After installation of MXNet and GluonCV, speaker talked about image classification & segmentation. He discussed how Dataset size a big factor in the performance of deep learning models and also a brief on ImageNet, which is a large labeled dataset of real-world images. It is one of the most widely used dataset in latest computer vision research. 

![](/img/alex_imgnet.png)

‘Pose Estimation is a general problem in Computer Vision where we detect the position and orientation of an object. This usually means detecting keypoint locations that describe the object and Segmentation is another key problems in the field of computer vision. Looking at the big picture, segmentation is one of the high-level task that paves the way towards complete scene understanding.’ - he added.

![](/img/modelzoo.png)

Attendees all awestruck with the interesting session..

![null](/img/alex_attendees.jpg)

\
He talked about different convolutional neural network, for instance:

* AlexNet
* LeNet
* VGG
* NiN
* ResNet
* GoogLeNet

Alex concluded his talk with discussing on different convolutional neural network and also shared how to pick best convolution network.

Here are some important links to GluonCV & D2L.ai:

* [GluonCV: Getting Start](https://gluon-cv.mxnet.io/)
* [Github: D2L](https://github.com/d2l-ai/d2l-en)
* [eBook: d2l.ai](https://d2l.ai/)
* [Alex Smola Research](http://scholar.google.com.au/citations?user=Tb0ZrYwAAAAJ&hl=en)
* [DGL Docs](https://docs.dgl.ai/)

## Selfie with the Speaker & Group Photo

![](/img/selfie.jpg)

![](/img/group_pic.jpeg)

Thanks to [Rashmi Shreedharan](https://www.linkedin.com/in/rashmis/) & [Girish Patil](https://www.linkedin.com/in/girish-cloud/) for all the arrangements.

In the closing note, [Sathyajith Bhat](https://www.linkedin.com/in/sathyabhat/) extended his hearty thanks to Alex Smola and added details about our upcoming Community Day - 2019 ( <https://communityday.awsugblr.in/> ) spanned across two days - 26th & 27th July  and announced the Super Early Bird offer conference pass for 1499/- valid till May 31st 2019. 

Stay tuned for upcoming meetups. Follow us on [LinkedIn](https://www.linkedin.com/in/awsugblr/) or [Twitter](https://twitter.com/awsugblr) and for more update please visit:  [https://awsugblr.in](https://awsugblr.in/).

AWSUGBLR organizers would like to thank

* The speakers: Alex Smola, for the hands-on workshop
* [Sathyajith Bhat](https://www.linkedin.com/in/sathyabhat/) for making the live-streaming dream come true via <https://www.twitch.tv/awsugblr>
* Attendees for gathering on a weekend for the meet
* [Bridgei2i](https://bridgei2i.com/) & [Runcy Oommen](https://www.linkedin.com/in/runcyoommen/) for hosting the meetup and providing stickers, tea/coffee and snacks
* [Piyush Jalan](https://www.linkedin.com/in/piyush-jalan/) &  [Bhuvaneswari](https://www.linkedin.com/in/bhuvanas/) for contributing to the meetup report

Stay tuned for upcoming meetups! For any feedback, comments, requests or contributions, please write to us on <mailto:info@awsugblr.in>
