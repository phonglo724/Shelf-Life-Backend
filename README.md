# README
# SHELF LIFE
> A web application to keep track of your groceries before they spoil in either the freezer, fridge, or pantry.

## Table of contents
* [General info](#general-info)
* [Intro Video](#intro-video)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)


## General info
Shelf Life is a full stack web application allowing users to view their groceries in three different storage categories: freezer, fridge, or pantry. Discover what is inside each storage by clicking on their image. By selecting a storage you can then view the specific food items located in that storage. There you will find important information regarding the remaining shelf life of an item, including, date bought, date it expires, where the item is stored, which food category the item fits in, and the number of items remaining.

## Intro Video
[Shelf Life on YouTube](COMING SOON)

## Technologies
* Node - version 1.0.0
* Nodemon - version 2.0.7
* Express - version 4.17.1
* Knex - version 0.95.4
* PostgreSQL - version 8.6.0

## Setup
To run this website, install it locally by cloning the GitHub repository. Run the backend with this command:
``` 
npm start

```

## Code Examples
```Node
app.post('/products', (request, response) => {
    database('products')
        .where({ id: request.params.id })
        .select()
        .then(product => {
            const {name} = product
            database('lists')
                .insert({name}, id)
        })
```

## Features
* Each item is filtered according to where it is stored
* Change quantities of items in each card
* Product page is responsive

To-do list:
* Add a form to add more items
* Have updated quantities persist in the backend when changed by user
* User log-in and log-out

## Status
Project is: finished with all functionality -- outside of the to-do list.

## Inspiration
The inspiration for Shelf Life comes from personal experience. I enjoy cooking as a form a therapy, but my biggest problem when preparing a meal is discovering spoiled food! Because life gets so busy and I tend to forget what I bought from the supermarket. So I decided to build an app to help me resolve this issue.

## Contact
Created by [Phong Lo](https://www.linkedin.com/in/phong-lo)

Feel free to contact me! :smile: