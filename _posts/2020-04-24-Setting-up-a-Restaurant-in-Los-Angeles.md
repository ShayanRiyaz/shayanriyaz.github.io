---
layout: post
title: Setting up a Restaurant in Los Angeles?
description: "A Data Science Capstone Project"
comments: true
---
Have you ever thought about starting up a restaurant business at your place of choosing? Maybe you love your cultural food a lot but it’s not present in the city you currently reside in?

Sure, the food itself you bring to the customer's table has to taste great. However, The best idea is to optimize every step you take before the restaurant even starts. Let’s go step by step and look at the optimization points:

* Food and restaurant type

* The location strategy.

* Daily/Annual/Monthly Expenses.

All of these are equally important, however just to get started it is important to have an answer to some specific questions. What kind of food am I serving? What is my target audience and what is the best location? How much am I willing to spend on rent?

Sounds like some good steps to get started right? So let's answer those questions step by step with an example of some code (fun.)

So for this example, the restaurant I am choosing to go with is a **fast-food Greek restaurant** in Los Angeles.

## Motivation

Recent Demographic surveys have shown that the Los Angeles Metropolitan area is. One of the most densely packed regions in the world. Interestingly due to its popularity, it is also one of the most culturally diverse. With a high number of tourists from all over the world landing at Los Angeles International Airport (LAX) along with the growing number of settlements in the region. Throughout the years we have seen a strong increase in ethnic food in the county itself which correlates with the increase in a diverse population. Studies from the past years have shown that even though the rise in ethnic food is increasing. There is also a disparity in the types of ethnic food [1]. This project aims to introduce a planned method to introduce a Greek restaurant in the Los Angeles County area.

## **Data and Resources:**

To achieve our target, we use the following sources and services:

* **BeautifulSoup: **This Wikipedia page will be the source of identifying all the neighborhoods that exist in the Los Angeles area: List of Districts and Neighborhoods of Los Angeles[1]

* **GeoPy: **We will be using GeoPy to map our neighborhoods. This API allows us to locate the precise coordinates of a location using numerous data sources.

* **Folium: **To map our coordinates on a map that can be visualized, we will be using the folium API.

* **Foursquare API: **The Foursquare API [2] gives us access to the most popular locations in a given area. Using the above-mentioned services and the API we can pin-point the restaurant demographics in the Neighborhood.

* **Rent Data: **Los Angeles Rent Prices[3]

## Methodology

The first step is **scrapping** web data to get a list of all the neighborhoods in Los Angeles. Fortunately, I was able to find a listed Wikipedia page.

<iframe src="https://medium.com/media/ff62b4bab2be4d920571025c172bc5a1" frameborder=0></iframe>

### **GeoLocation**

Although, we have a list of the neighborhoods. They aren’t since they are simple strings with no real value. Now, we will match the Neighborhoods with their correct longitude and latitude signals using **GeoPy Nominatim Locator**

<iframe src="https://medium.com/media/f0f6be4edb768f4c1925606eba2bacd8" frameborder=0></iframe>

If we display the data frame **nhoods**, we get this:

![Neighborhoods with Latitude and Longitude](https://cdn-images-1.medium.com/max/2000/1*ANBgFHMkuXym2yGOLFeHZQ.png)*Neighborhoods with Latitude and Longitude*

<iframe src="https://medium.com/media/453f768c663792736f0eccce148948da" frameborder=0></iframe>

![Neighborhoods mapped using Folium](https://cdn-images-1.medium.com/max/2000/1*GJBo2cSY3JQKGWPIgcD-FQ.png)*Neighborhoods mapped using Folium*

### Using the Foursquare API

before we use the API, let's give a bit into detail about what the API exactly does:

[Foursquare](https://developer.foursquare.com/places) itself is a location-based service and tracks check-ins done on social media ( Yes, the twitter and Facebook check-ins at your favorite coffee shop are recorded by Foursquare). Essentially to sum it all it is a very powerful geotagging service with a record of over 62 million venues globally in 190+ countries. If we dive a bit further we can also monitor the activity in venue and the frequency of a type of venue.

In order to use the Places API provided by the company we first have to create a project over here. This gives us the **Client ID**, **Client Secret **(These should not be shared).

<iframe src="https://medium.com/media/f447be275e5176cc24472422b340f02d" frameborder=0></iframe>

### K-Means Clustering

The first step we’ll take is finding the most optimum value for K using the **Silhouette Coefficient** Method.

A high Silhouette Coefficient score relates to a model with better-defined clusters.

A higher Silhouette Coefficient indicates that the object is well matched to its own cluster and poorly matched to neighboring clusters.

<iframe src="https://medium.com/media/c50c3224d87d9a99c392c73bbfcf9732" frameborder=0></iframe>

![Choosing the best cluster k = 4](https://cdn-images-1.medium.com/max/2000/1*-i3an-xIuF6WRvw4RlXhrA.png)*Choosing the best cluster k = 4*

As we can see the highest Silhouette Coefficient is when the number of clusters is 4. Therefore we will group our neighborhoods into 4 clusters using **K-means clustering**.

### Top 10 venues from each cluster

![](https://cdn-images-1.medium.com/max/2000/1*_3Y6xwVJQqJEs0cRFZYGkQ.png)

<iframe src="https://medium.com/media/6a196ea9625e73123d566d4d041db56b" frameborder=0></iframe>

![Mapping the clusters (K = 4)](https://cdn-images-1.medium.com/max/2000/1*2GAAm5yVc3siPVC33Ix1Fw.png)*Mapping the clusters (K = 4)*

### Visualizing the top 10 venues

Next, we will write a function to generate a horizontal bar plot showing the top 10 venues for each cluster, highlighting the food venues:

<iframe src="https://medium.com/media/175e2087fff71a537bc6388e221d6907" frameborder=0></iframe>

<iframe src="https://medium.com/media/941fe732af94a137aa923a0676f04b0e" frameborder=0></iframe>

### Cluster 1

I’ve added more details about why I chose Cluster 1 compared to the other 3. One of the main reasons for doing so is because it was a safer option than choosing a cluster with a significant % of restaurants or one with barely any.

![Examining Cluster 1](https://cdn-images-1.medium.com/max/2000/1*eBqzE6tBw0ZJmKaDgPrBGg.png)*Examining Cluster 1*

Next well will again use the Foursquare API to locate existing Greek Restaurants in the neighborhoods present in Cluster 1.

In order to find the correct code for the venue refer to this [link](https://developer.foursquare.com/docs/build-with-foursquare/categories)

<iframe src="https://medium.com/media/8751c73c2ee030436caa9148f37693ce" frameborder=0></iframe>

![Existing Restaurants in Cluster 1](https://cdn-images-1.medium.com/max/2000/1*db3wmU65osNEn8gySk2zxg.png)*Existing Restaurants in Cluster 1*

In this case, We will choose to go with a location that has more Greek Restaurants. This is because the data shows that the population in Harvard Heights is more accustomed to Greek Restaurants and is, therefore, a less risky location.

In terms of choosing the Neighborhood closest to the city center, we can observe that there is not much difference in distance for both Neighborhoods.

<iframe src="https://medium.com/media/4c81c16cd40102bf04fa129c805b321e" frameborder=0></iframe>

![](https://cdn-images-1.medium.com/max/2000/1*9RLEkpJPFYNiaURfa0ZcGA.png)

The last check is to compare the rent prices. Unfortunately, the dataset available does not contain rent rates for Korea Town.

<iframe src="https://medium.com/media/9c4c5c8941e49762a861b3b23510cfa3" frameborder=0></iframe>

![](https://cdn-images-1.medium.com/max/2000/1*ulMgxZ2Y0XE9A4rn6S6PbA.png)

One last step taken to ensure that it is easier for the restaurant to sustain itself was by making sure the rent price in the location is affordable. We did that by scrapping a table [2] containing the average rent of all neighborhoods. Unfortunately, the rent for Korea Town was not included in the database and is yet to be added by the website. However, the rental prices of an area give us a considerable amount of information about the demographics therefore it is useful when planning the setup of the restaurant itself.

If we were to open up an affordable restaurant in a location such as Harvard Heights is a very suitable location as it has one of the lowest rental prices in the county. However, let us assume the client wants to open a restaurant that leans more towards fine dining. In a case like that, it should not be set up in the medium to a low-income neighborhood where it would not perform well. At the same time, a restaurant that operates as casual dining or fast food restaurant would preferably be set up in an area where the rent is low and affordable enough to maintain the restaurant's finances. This is particularly due to the low price of food.

## Conclusion

This project focused on highlighting the basic research needed to find potential neighborhoods to open a Greek restaurant in Los Angeles. It follows a few simple procedures which were, finding neighborhood data of Los Angeles. This can be done by either web scrapping or finding a usable *.json *file. The next step conducted was to obtain the coordinates of the respective neighborhoods using a geolocator and then mapping them over a map of Los Angeles using Folium. Our main instrument in this project was the use of Foursquare API which gives us access to the commercial traffic in the region. Commercial traffic, in this case, is all the venues listed in their respective locations and their frequency.

The API helps us identify hotspots are more occurring more frequently and plan accordingly. Using the Foursquare API we selected the neighborhoods with at least 10 venues and used K-means clustering (K = 4) to further examine our data frame. According to our needs Cluster, 1 was chosen to be the best option. Finally, our neighborhood choices were trimmed down to two neighborhoods, Harvard Heights and Korea Town. We chose Harvard Heights in the end due to three primary reasons:

* The number of Greek Restaurants was more in Harvard Heights was 3 times more than in Korea Town. Therefore, it can be considered a safe option.

* The distance is approximately 6 km from the City Center.

* The rent price in Harvard Heights is cheaper in comparison to most neighborhoods.

## **Realistic Constraints**

It is important to note that the location of the restaurant was solely done by choosing 3 very simple factors and serve as a point on the road map towards opening a restaurant. In reality, there are many more factors to consider minimizing risk. These include:

* Population Density of the area

* The availability of lot that matches our required size

* The budget of the restaurant itself.

* Safety and crime record of the area.

* Public transport around the location.

### Thank you

For further information, you can refer to the [GitHub repository](https://github.com/ShayanRiyaz/Data-science-capstone/tree/master/Week%205) and the [Gists](https://gist.github.com/ShayanRiyaz) for this exercise.

***Note: This article is a capstone project and is part of the Coursera IBM Data Science Certification.***
