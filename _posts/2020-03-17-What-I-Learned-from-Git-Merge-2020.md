---
layout: post
title: What I learned from Git Merge 2020
description: "My experiences and learnings from Git Merge"
comments: true
---




*Before I get started talking about the amazing experience I had, I would like to first thank the GitHub community for awarding me the scholarship to attend this conference. It is amazing to know young programmers have the support of companies who are the pioneers of their industry.*

## Speakers

### ***The Zen of Git —[ **Tianyu Pu](https://www.linkedin.com/in/tianyupu/)*

*What is git? Why does it make the programming team's life so easy? and is it necessary to understand the mechanism that is put in the backend?*

I’m a strong believer in understanding fundamentals over anything else when learning concepts. However, I’m also lazy and a veteran procrastinator, so it is sometimes easy to not focus on the foundations. Still, sometimes they get so boring and pass over our heads. So how do you make something that is necessary to understand, interesting enough to stay focused? You add visuals. This is exactly what Tianyu did, I will try to summarize her amazing presentation.

![The 7 bridges of Königsberg](https://cdn-images-1.medium.com/max/2000/1*zlhQYHZihQw4vC2VllpuCg.png)*The 7 bridges of Königsberg*

Observe the image to the left, the picture shows the 7 bridged of Konigsberg. The question is can you go through each bridge once? [Leonhard Euler](https://en.wikipedia.org/wiki/Leonhard_Euler) proved that this problem doesn’t have any solution. What’s more important is the method he used to prove it which was the graphical theory. This was the first instance where the graphing theory and topology was introduced.

![Leonhard Euler's Proof](https://cdn-images-1.medium.com/max/2000/1*qIQOk3_JxuzWO4UndDAZfw.jpeg)*Leonhard Euler's Proof*

Before we get into the technical jargon of git, it’s always a good step to simplify and understand the fundamentals. So coming back to our original questions:

Git in simple words of Wikipedia “ *is a [distributed ](https://en.wikipedia.org/wiki/Distributed_version_control)version control system for tracking changes in [source code](https://en.wikipedia.org/wiki/Source_code) during [software development](https://en.wikipedia.org/wiki/Software_development). It’s that simple”*. Git lets you take snapshots of projects — *“version control” *and revert to them whenever needed.

In Lehman’s terms:

![[David Gohberg](https://medium.com/@gohberg?source=post_page-----b2f87d97ed52----------------------)](https://cdn-images-1.medium.com/max/3596/1*NQEXTalAVYwgt9MvUvQhdw.png)*[David Gohberg](https://medium.com/@gohberg?source=post_page-----b2f87d97ed52----------------------)*

![[Git convention chart](https://marklodato.github.io/visual-git-guide/index-en.html)](https://cdn-images-1.medium.com/max/2000/1*AwP2o_9cCzh4FcqsOGDJvg.png)*[Git convention chart](https://marklodato.github.io/visual-git-guide/index-en.html)*

Green — Commits
Orange — Branches
Grey — Current Branch (HEAD)

**You can find her presentation [here](https://speakerdeck.com/tianyupu/the-zen-of-git?slide=4)**

### **Lightning talk — Hack the Project Onboarding Process: Learning by Writing — [Emily Schaffer](https://www.linkedin.com/in/nasamuffin/)**

Probably one of the most eye-opening as well as important of the talks. I think relatively it is easy to write a program, develop it, test it. However, it is near armageddon making it reusable. How do I know that? Well, I’m really bad at documentation myself. It feels so boring.
But... it’s necessary because it’s a waste of time and resources when the person who comes after you can’t even make sense of your code. So I feel like this talk was more screaming towards “Documentation for Dummies”.

*“An alleged scientific discovery has no merit unless it can be explained to a barmaid.” [Lord Rutherford of Nelson](http://books.google.com/books?id=Bn_6c7SjprYC&q=barmaid#v=snippet&q=barmaid&f=false) (Allegedly)*

So what did I learn from this session? Well, it’s more about how to make documentation productive and effective. Overall, important tips such as:

**How do I learn good documentation?**

**1. Pick a Topic**

* How do I add a new command to Git?

* How do I make a change to production?

* How do I run the test suit on my machine?

In simple words, if you are writing something make it so that a beginner in that field would be able to make sense of it (no complicated mumbo-jumbo)

**2. Document your progress**

* Treat your tutorial like a journal!
- If you do detective work, teach your reader how to do the same detective work — Don’t just give them the answer

* If you have a question, write it down.
- Meta: If you’re not sure how to ask your question, write that down too!

* Explain your “Aha!” moments. (When you figure out a problem after excruciating hours of thinking)

* **It does not need to be perfect — you will review it in the future!**

**3. Review and Iterate**

* Meta: Cover the review submission process in your tutorial too

* Review comments are more information for you, not an attack on you!
- You wouldn’t have made the mistake if the documentation for better :)

* Take a step away if you need to!

* Learning opportunities can look like…
- “Why didn’t you use X?”
- “Wouldn’t it be safer to do it like Y?”

**Side Effects**

* “I noticed that this function does this, but couldn’t it do that instead”

* “When I asked why we built it this way, my tech lead said, “We should fix that!”

* “My tutorial shows how to use the API in a way that seems reasonable, but it crashed…”

* Explain to a novice/rubber duck

* “Why” — oriented tutorial provides more depth than “make it work” — oriented bugfix

* Detailed explanation uncovers bugs

* Bugs get the ball rolling!

**Note: I took these points right out of Emily’s presentation because they were so helpful and easy to understand (documentation well done!)**

Following these points, consistently in a matter of a week's time, documentation has suddenly become much more fun and easy to do.

For more information, you can refer to this link: [*What nobody tells you about documentation](https://www.divio.com/blog/documentation/)*

## Birds of a Feather

To provide a bit more of a background, The Git Merge had a 2-hour session known as Bird of Feather. The session consisted of 12 different conversations put up as a sticky note on a board from 8 am — 3:30 (Yeah it’s that simple to hear people out). Anyways as a confused git-ter, I decided to dive into 2 of those:

### **Git for Non-Developers**

As a beginner git user who recently started working with a team of engineers who have almost no experience using GitHub. I had a few questions in order to benefit my own company. Here’s what I asked?

![[Anita Cheng](http://anitacheng.com/git-for-non-developers)](https://cdn-images-1.medium.com/max/2000/1*oSJXK6vZ5UBRGk0EtQrFuw.jpeg)*[Anita Cheng](http://anitacheng.com/git-for-non-developers)*

*“How do I establish a setup where it’s easy for my team to understand git and realize it’s importance in projects? Secondly, how do I make an efficient project management system?”*

I must say, the answer I received by the whole group was thorough and extremely helpful. Here’s what I was told:

* You need to give your team a motivation to use GitHub, otherwise, it won’t be easy for them to be comfortable with it. Why is that?
- Teams should always see a bigger picture behind a task, if they are unable to understand or envision a greater outcome, they will not be able to reach them. When we use git to improve efficiency and work standards, we give ourselves extra time for other ideas, instead of constantly organizing versions of our project, we can have a centralized version. But above all else, we produce better results that give us more confidence in our programming skills because honestly, imposter syndrome is a developer's biggest dilemma. Git can really help curb

* You need to ease them in, break it down. Work on projects from scratch. Sit down with them and answer all their questions. There is no such thing as a redundant question. It takes time to get comfortable with git so you might as well spend it making sure they get it right the first time.

Overall, the talk was actually helpful. It didn’t go into the technical detail but it gave me a road map. Which proved to be an effective 1st step.

**Note: If there are students out there who have not signed up for the [GitHub Student Pack](https://education.github.com/students), you should avail that ASAP.**

### **Mono-repo vs Poly-repo**

It’s amazing to see what you learn by just sitting in a conversation between experts and enthusiasts. The problem-solving journey, the mutual respect for ideas and the shroud of sarcasm. I think that’s the beautiful thing about curious people with problems, they don’t enjoy holding onto ideas because in the reality there is always a probability that it might be wrong (At least, that’s how *“[The Iqbal](https://scoopak.com/wp-content/uploads/2013/11/Allama-Muhammad-Iqbal-Thinking-Photos.jpg)”* in me took it as).

Although it may sound like a small problem, deciding if your software is based on one repository or multiple, can have a sort of a butterfly effect in your future work.

**Mono-repo
**A mono repo is the use of a single repository instead of multiple. This can be a repository that contains directories for a web app project, mobile app project, and server.

**Poly-repo
**A poly-repo means the use of multiple repositories for the source code of a project. An example that can be considered for this is the same as mono-repo, however, in this case, we will have different repositories for every directory.

**Overview
**From hearing the experts debate over both one thing I realized that the debate wasn’t about which one is better, It was more about lack of consensus in teams. Most problems arise when people are not on the same footing regarding how to plan a project, for example, you might have someone who prefers working on a separate repository while the rest of the team works on a single one. This might not seem like a big issue but when projects eventually get bigger and more, this will require extra scaling but more importantly when people move on to different companies, unless the separate repository is well documented (probably not) It can cause problems and unnecessary delays.

**Bonus
**One of the engineers I met introduced me to a very basic yet clever idea. When working on projects it’s a good idea to develop our software in a hierarchical method.

![From the looks of it “Chaos vs Order”](https://cdn-images-1.medium.com/max/2000/1*H-xeUPlH4tOpujEHZPmfAw.png)*From the looks of it “Chaos vs Order”*

### Conclusion

Overall, I went into this event assuming that every session would go over my head and that I need to pay extra attention. While the latter was true, I think the people I met were as enthusiastic about my questions as I was nervous. Mastering git is a long and iterative journey but it is one all software enthusiasts should take. Why? Well, it makes our life easy for one and secondly it has led to an amazing open source community that welcomes people who are willing to learn and help society grow.

***Note: These notes are my own personal opinions and were inspired by the speakers and attendees at the event. If anyone disagrees with what I write, kindly message me and provide me with some feedback. Let's have a discussion about it and promote friendly debates.***

References:
[**Leonhard Euler and the Königsberg Bridge Problem: Leading To Topology and Graph Theory**
*How are these relevant in society?*medium.com](https://medium.com/@pjuturu/topologyandgraphtheory-ed9bb3476071)
[**Euler's Solution of Seven Bridges of Königsberg in Layman Terms**
*Thanks for contributing an answer to Mathematics Stack Exchange! Please be sure to answer the question. Provide details…*math.stackexchange.com](https://math.stackexchange.com/questions/1173328/eulers-solution-of-seven-bridges-of-k%C3%B6nigsberg-in-layman-terms)
[**The Biggest Misconception About Git**
*You probably got this wrong about git.*medium.com](https://medium.com/@gohberg/the-biggest-misconception-about-git-b2f87d97ed52)
[**Git Merge 2020 | March 4th | The Majestic Downtown, Los Angeles**
*Will Git Merge continue as planned on March 4? Git Merge will still take place as planned on March 4, but we understand…*git-merge.com](https://git-merge.com/)
