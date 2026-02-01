---
title: "How does WebRTC really work?"
description: "A brief introduction to WebRTC fundamentals"
pubDate: 2020-11-16
comments: true
---

*This is part 1 of a 3 part WebRTC series. In the 2nd, I will dive into a little bit more detail on how to set up our STUN/TURN server and how the process of signaling works. Lastly, in the 3rd I will execute a basic GoLang implementation of WebRTC.*

Over the past few days, I have been studying WebRTC and how the whole mechanism works, Although I am nowhere near mastering how the architecture works, I've been able to simplify things down a little bit and understand the fundamental concepts.


- Stands For Web Real-Time Communication
- Find a peer to peer path to exchange video and audio in an efficient and low latency manner
- Standardized API
- Enables rich communications browsers, mobile, IOT devices.

## Overview of WebRTC

- A wants to connect to B
- A finds all possibly ways the public can connect to it.
- B finds out all the possible ways the public can connect to it.
- A and B signal this session information via other means:
    - WhatsApp, QR, Tweet, WebSockets, HTTP Fetch...
- A connects to B via the most optimal path.
- A & B also exchanges their supported media and security.

![How-does-WebRTC-really-work/Untitled.png](/images/How-does-WebRTC-really-work/1_overview_2.png)

![How-does-WebRTC-really-work/Untitled%201.png](/images/How-does-WebRTC-really-work/1_overview.png)

*They will connect directly along the shortest optimal path.*

## Components of WebRTC

- NAT
- STUN, TURN
- ICE (Interactivity Connection Establishment)
- SDP (Session Description Protocol)
- Signaling the SDP

### NAT (Network Address Translation)

- If we have a public IP address exposed we don't have a problem, because:
    - You are listening on a port (like a web server) and then we will get this port to someone and someone will connect us directly.
- But if we are behind NAT (we all are, wifi, router, etc). We don't have a public IP address as we have e public router IP address. Our IP address is private, essentially if A was to connect to B. This would be the format:
    - A has a private IP address **100.100.100.2**
    - B has a private IP address of **192.168.2.1**
    - There is a router that has a public IP address **5.5.5.5** and a private IP address **100.100.100.1**.

"**A wants to connect to port 80 of B's IP address. How do we do this?"**

- **A** will select a port of its own, for example, **8080** and send a packet (get request) to **192.168.2.1:80**

![A communicates with With Router](/images/How-does-WebRTC-really-work/NAT-TABLES/1_A-com-B.png)

- Can it actually communicated with **192.168.2.1:80?**
- Next, **NAT** does a subnet masking. It checks if **B** is in the same subnet as **A** (On the back does an XOR)
- If it is not in the same subnet mask it cannot communicate directly. It will ask the gateway (router) for help (in layman's terms it's asking the gateway to fix this problem).
- Then we add an Address Resolution Protocol (ARP) request and add the MAC address to the router.

**The packet is with the router now**

- The router checks the packet and verifies if the packet is meant for it (In our case it is not). It verifies this by checking if the destination (which is **192.168.2.1)** is the address of the router, which it is not **but the MAC address is**, which means that the packet is supposed to be sent to an external address
- The router will next communicate with **192.168.2.1 on behalf of 10.0.02 using its public IP address.**

This Next becomes

![Router Communicates with B](/images/How-does-WebRTC-really-work/NAT-TABLES/2_rout-to-B.png)

The router selects a random port (in our case **3333**)

But before it does that it creates a NAT Table.

![NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/3_NAT-table.png)

![B Receives from Router](/images/How-does-WebRTC-really-work/NAT-TABLES/4_B-rec-router.png)

- Next B will send the message back to the router
- The router will check who is **5.5.5.5:3333**?
- The router will look at the **NAT table** where it will find the ip address connected to **5.5.5.5:3333** (which is **A**'s address) and send the message to it.

![ NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/5_NAT-table.png)

## NAT Translation Methods

- One to One NAT (Full-cone NAT) ***(Works well with WebRTC)***
- Address restricted NAT ***(Works well with WebRTC)***
- Port restricted NAT ***(Works well with WebRTC)***
- Symmetric NAT ***(Better to use Web Sockets)***

### One to One NAT (Full cone NAT)

- Packets to **External IP:port** on the router always maps to the I**nternal IP:port** without exceptions

![NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/6_NAT-Table.png)

If someone **(B)** sent a packet to a router and if the router is configured to a 1 to 1 NAT it doesn't check where the packet is coming from and it will automatically forward it to the Internal IP (**A)/**

![How Does Web RTC Really Work](/images/How-does-WebRTC-really-work/2_one_to_one_NAT.png)

### Address Restricted NAT

- Packets to external IP: post on the router always maps to internal IP: port as long as source address from packed matched the table (regardless of part)
- The communication is allowed if we have communicated with this host before

![ NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/7-NAT-table.png)

![Address Restricted NAT](/images/How-does-WebRTC-really-work/3_AddrRestrict_NAT.png)

- As long as we've sent some packet before (could be any for e.g. UDP, TCP, DNS request, or TelNet Request) and it is in our NAT table.

### Port-Restricted NAT

- Packets to external IP:port on the router always maps to the internal IP: port as long as the source address and port from packet matches table
- Allow if there has been communication with this host:port before

![NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/8-NAT-table.png)

![Port Restricted NAT](/images/How-does-WebRTC-really-work/4_PortRestrictedNat.png)

### Symmetric NAT (Most restricted one)

- **Best for security**
- Packets to external IP:port on the router always map to internal IP:port as long as source address and port from packet matches the table
- Only Allow if the full pair match

![NAT Table](/images/How-does-WebRTC-really-work/NAT-TABLES/9-NAT-Table.png)

![Symmetric NAT](/images/How-does-WebRTC-really-work/5_SymmetricNAT.png)

Symmetric NAT does not work with **WebRTC.** This is because WebRTC using a **STUN** server. When we communicate with the STUN server it gives us the IP address.

- Once it does that it opens a public presence.
- If we use symmetric NAT only the STUN server can communicate back to us. We cannot use that public information and send it to someone around the world because it was only created for the STUN server.

## STUN

- Session Traversal Utilities for NAT
- Tell me my public IP address/port through NAT
- Works for Full-cone, Port/Address restricted NAT
- **Doesn't work for symmetric NAT**
    - The moment I ask to make a public address it is only made for me and the person i'm connecting to if it is symmetric NAT, therefore cannot be used with anyone else
- STUN SERVER port 3478, 5439 for Transport Layer Security (TLS)
- Cheap to Maintain (Can run on a Docker Server)

![STUN](/images/How-does-WebRTC-really-work/6_STUN.png)

In case of Address/Port restricted Nat you have to send a packet prior to the communication to make sure that they have their addresses saved before they communicate.


## TURN

- Traversal Using Relays around NAT
- In case of Symmetric NAT we use TURN
- It's just a server that relays packets
- TURN default server port 3478,5349 for TLS
- Expensive to maintain and run

![TURN](/images/How-does-WebRTC-really-work/7_TURN.png)

## ICE

*There are so many options, how do we pick the appropriate option? or just collect the appropriate options. Nothing fancy but just a protocol that states, what are the different ways people can connect with me?*

- **Interactive Connectivity Establishment**
- ICE collects all available candidates (local IP addresses, reflexive addresses - STUN ones and relayed addresses - TURN ones)
- Called ICE candidates
- All the collected addresses are then sent to the remote peer via SDP.
- Just a string of information

## SDP

- **Session Description Protocol**
- A format that describes the ice candidates, networking options, media options, security options and other stuff.
- Not really a protocol its a format
- Most important concept in WebRTC
- The goal is to take the SDP generated by a user and send it "somehow" to the other party.

## Signaling

- SDP Signaling
- Send the SDP that we just generated somehow to the other party we wish to communicate with
- Signaling can be done via a tweet, QR code, Whatsapp WebSockets, HTTP request DOESN'T MATTER! Just get that large string to the other party.

## WebRTC Pros and Cons

- **Pros**
    - p2p is great! low latency for high bandwidth content
    - Standardized API I don't have to build my own.
- **Cons**
    - Maintaining STUN and TURN servers
    - Peer 2 Peer falls apart in case of multiple particpants

*I hope this gives you a brief idea about how WebRTC works. I want to thank Hussein Nasser, for his Crash Course on WebRTC. Although there are many resources out there. His recent video was the most useful one and almost all the images and notes taken are from the video [here](https://www.youtube.com/watch?v=FExZvpVvYxA).*

### Resources

- [Husseins Youtube Channel](https://www.youtube.com/channel/UC_ML5xP23TOWKUcc-oAE_Eg)
- [WebRTC for the curious](https://webrtcforthecurious.com/)
