# Sabot
Sabot is an app for delivery drivers in the gig economy aimed at responding to information asymmetry in the workplace. It repurposes data collection to inform riders' decisions, creates a community of care as they are on the road, and generates greater capacity to collectively organise. Sabot - coming from the French sabotage - is an idea that emerged when organising with delivery workers in South London, who faced the problem of an inaccurate navigation system in delivery platforms. Along with riders and some members Independet Workers of Great Britain (IWGB), we started thinking if, and how, a riders’ app could be helpful to organise. 

A prototype was developed in conversation with riders in 2022, who defined its features, experimenting and questioning new forms of political organisation under datafied and distributed workspaces. A riders’ app creates a real-time collective repository that can inform decisions, break up riders’ isolation, and contest the mechanisms of value extraction enabled by platform economy. 

As a tool, but also in the process of its development, Sabot calls for political engagement with the social relations that underpin automated management. This requires an active effort to dismantling and reimagining the social and political structures from which platform capitalism emerges, and to design alternative forms of technology rooted in collective autonomy.

## Features
### OnRoad
<p align="center">
<img src="https://user-images.githubusercontent.com/102227606/187195934-7880de43-5c35-4326-8cd9-c13f60b44357.png" width=30% height=30% right=150>
</p>
While working, delivery riders normally see only an individual icon corresponding to their account. OnRoad is a map populated by all drivers using Sabot, bringing together workers of  multiple companies. It creates clusters of riders to indicate the area where they can be found but conceals the information on their exact location for their safety (against vehicle thefts or police controls).
OnRoad subverts the extractive surveillance logic of delivery apps, and proposes to create a digital commons for riders.
</p>
Being on the road is dangerous to precarious workers with unregular migration status. Often, authorities deploy check-points on the road asking for insurance and migration status. A map where drivers can update controls will help to keep be safe and organize to help other drivers in distress from immigration policies
</p>

With the same outline, a feature the app has a feature for reporting accidents. Currently there are no official numbers, although a relation between injuries and time requirements on delivery apps is suspected. 

### Restaurants

Inverting the agent of evaluation, riders can evaluate restaurants on the basis of the treatment given to them when picking up orders. They can add comments to guide other riders on specificities of each restaurant.

<p align="center">
<img src="https://user-images.githubusercontent.com/102227606/232464173-14d3b854-358d-4544-a194-9ace38c688d7.png" width=30% height=30% right=150>
</p>


### MyPay

By crossing data from payment invoice with geolocation, it is possible to fi nd out hourly pay for workers (information not currently given by apps), so they can track changes on the algorithm paying scheme. Th is page also calculates hourly rates subtracting costs of maintenance of vehicle. According to the number of deliveries performed, it displays an speculative value for all the data that drivers have produced while working. Data is an unaccounted source of income to platforms, by which they optimise algorithms and attract investment. 

<p align="center">
<img src="https://user-images.githubusercontent.com/102227606/232465524-d5981628-c396-4419-b933-9816978a673c.png" width=30% height=30% right=150>
</p>

### Software
The app has been built using React Native, a javascript library popular among coders to create user interfaces and apps for Android and IOS. Before starting this project, I had a very basic understanding of code. So parallel to the research project, I started the project of learning a new language: javascript. In order to modify the code of the app as a developper it will be necessary to download it from the github repository and obtain an APIKey from GoogleMaps service and add it to
the file in the repository: GoogleMaps APIKey in: Sabot\android\app\src\main\AndroidManifest.xml

### Database
The database to store and fetch data from the app has been built with Firebase, a GoogleCloud service that allows to create real-time databases. The structure to organize the information is shown in the following page. The database, unlike the code, is not public since it contains the data from riders, which should only be released to their disclosure. If the reader wanted to build her own database to work with this app, it would be necessary to obtain an APIKey from GoogleCloud Firebase and download the according json file to set up in the app. 

### APP
You can download the app for Android here: https://drive.google.com/drive/folders/1YQTN0PJXtGXX72EGvuhWa8lJkqSm2JW4

### CODE
You can download the code's explanation guide here: https://drive.google.com/file/d/1eWCXGvg22HyjtOuK_nc8UbfozL0qZ_jE/view?usp=sharing
