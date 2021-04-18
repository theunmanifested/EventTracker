# EventTracker
Keeping track of information on a specific topic of interest is a good example of a working and well-design web application. 
**My Texas State Parks App** helps park enthusiasts to maintain a record of their visits with plenty of descriptive details and a comment or log about their experience. With the ability to search every single log, and to be able to display either just the selected or all of the logs, this web app can can display that information. Also, if a park enthusiast wants to either create, delete or just update information, they can certainly make those changes.


## Overview
This Spring Boot/JPA (Java Persistance API) app project is made to publish a REST API with its annotations, utilizes JSON files, and is most importantly is able to use all of the CRUD (Create, Read, Update, Destroy) operations. The web app tracks the visis of Texas State Parks with various fields that help the user/park enthusiast, be able to keep a good account of their adventures.

## How to run
https://3.141.188.255:8080/BootMyTXStateParksApp


## REST API

| HTTP Method | Resource URI | Request Body | Returns |
| ---         | --- | --- | --- |
| GET | 'api/parks' |  | List&lt;ParkVisit&gt; |
| GET | 'api/parks/{parkId}' | All fields except for id, created and updated | ParkVisit showObject |
| POST         | 'api/parks'  |              | ParkVisit newObject |
| PUT         | 'api/parks/{parkId}'  |   All fields except for id and created | ParkVisit updatedObject |
| DEL         | 'api/parks/{parkId}'  |              | boolean to assure deletion/destruction |
