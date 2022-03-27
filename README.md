# Team APE Consulting HYL_Hackathon

# [u-Hub](https://github.com/cmrnfaith/HYL_Hackathon)

## Inspiration

Interested in finding social and academic events but have no idea where to find them? Tired of looking through countless emails, D2L, club websites and posters to find events? Wanting to see, like, interact and look for specific university events all in one place? These were the questions we wanted to address and the inspiration for our mobile and desktop application uHub.

## What it does

uHub is a mobile and desktop application that allows users to find different events seamlessly from various clubs and the university all in one place. uHub allows hosts to create, delete and showcase events on our site for university students, while also tracking what events they currently have created. University students can view the website to browse and search for various events by different key filters such as by event type or name. If they find an event they like they can also add it to their calendar. Furthermore, students can also create an account and login in to follow specific hosts as well as like different events to get a tailored events feed.

| Technologies    | That We Used                |
| --------------- | --------------------------- |
| STACK           | TECHNOLOGY USED             |
| Front-End       | React,Javascript, CSS, HTML |
| Back-End        | Python, Flask               |
| Database        | MySQL                       |
| APIs            | REST, Postman               |
| Version Control | GitHub                      |

## How we built it

uHub is a web application that was built modularly and with a focus on scalability as we aimed to design our website to handle thousands of events and users. We strived to produce a seamless experience for users by designing the front end from planning out the site's UI with wireframes and writing responsive APIs in the backend. The frontend we created using React, while our backend was built using Python Flask and tested with Postman.

## Challenges we ran into

A few challenges we ran into were:

1. Mobile application Compatibility
2. Python package management
3. Filtering of different events based on specified criteria
4. CSS styling and animations

## Accomplishments that we're proud of

A few accomplishments were are proud of are:

1. Designing an intricate mobile and web application that utilizes a database, user-friendly frontend and backend in under 24 hours
2. Ascending to a new level of team collaboration
3. MySQL Database Design following a planned EERD
4. Learning more about React, CSS and Flask in a short time frame

## What we learned

- How to utilize various API such as an API for calendar integration.
- How to manage our time effectively and collaboratively work in a team.
- How to use advanced filtering on React Components.
- Better practices in designing for mobile Responsiveness.
- Effective version control for a team project.

## What's next for uHub

- Adding the ability for users to get recommendations based on their interests and previous liked events.
- The ability for users to get personalized announcements from liked events or followed hosts.
- Google Maps API integration.
- Calendar View for Events



[![Netlify Status](https://api.netlify.com/api/v1/badges/ba98fcc3-3cc3-4e47-ab14-6cb12a983385/deploy-status)](https://app.netlify.com/sites/u-hub/deploys)

![GitHub](https://img.shields.io/github/license/cmrnfaith/HYL_Hackathon?style=plastic)

![Most recent commit](https://img.shields.io/github/last-commit/cmrnfaith/HYL_Hackathon)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/cmrnfaith/HYL_Hackathon)

## Description

This is the website development branch for our project. This project will use python in combination with flask for the back-end. A fully detailed problem statement and design overview will be uploaded shortly.

## Table of Contents

- [Demo](#Demo)
- [Installation](#Installation)
- [Usage](#Usage)
- [Documentation](#Documentation)
- [Questions](#Questions)
- [Demonstration](#Demonstration)
- [All Events](#All Events)
- [Liked Events](#Liked Events)
- [Create an Event](#Create an Event)
- [Event Page](#Event Page)
- [Host's Events](#Host's Events)
- [Deployed App (No DB)](#Link to the application running:)

## Demo

![Demo Video](https://youtube.com/demo)

## Installation

### Setting up Back-end

1. `cd backend`
2. `python3 -m venv venv` ( or `python -m venv venv` on Windows)
3. `source venv/bin/activate` ( or `venv\Scripts\activate` on Windows)
4. `pip install -r requirements.txt`
5. `flask run -p 5000` (or `python main.py`) to start back-end

### Setting up Front-end

1. `cd frontend`
2. `npm install`
3. `npm start` to start front-end on localhost
4. Go to http://localhost:3000

## Documentation

### Demonstration

#### All Events

![Screenshot #1](docs/Example1.png?raw=true "Example 1")

#### Liked Events

![Screenshot #1](docs/Example2.png?raw=true "Example 1")

#### Create and Event

![Screenshot #2](docs/Example3.png?raw=true "Example 2")


#### Event Page

![Screenshot #3](docs/Example4.png?raw=true "Example 3")

#### Host's Events

![Screenshot #4](docs/Example5.png?raw=true "Example 4")

### Link to the application running: [Production Version](https://u-hub.netlify.app/)
