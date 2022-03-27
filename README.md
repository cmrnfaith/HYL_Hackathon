# Team Great Ape Consulting HYL_Hackathon

## Inspiration 
Interested in finding social and academic events but have no idea where to find them? Tired of looking through countless emails, D2L, club websites and poster to find events? Wanting to see, like, interact and look forspecific university events all in one place? These were the questions we wanted to address and the inspiration for our mobile and desktop application uHub.

## What it does
uHub is a mobile and desktop application that allows users to find different events seamlessly from various clubs and the university all in one place. uHub allows hosts to create, delete and showcase events on our site for university Students, while also tracking what events they currently have created. University students are able to view the website to browse and search for various events by different key filters such as by event type or name. If they find an event they like they can also add it to their calendar. Furthermore, students can also create an account and login in to follow specific hosts as well as like different events to get a tailored events feed.

|Technologies | That We Used |
| ------------- | --------------- |
| STACK		| TECHNOLOGY USED |
| Front-End	| React,Javascript, CSS, HTML |
| Back-End	| Python, Flask |
| Database	| mySQL |
| APIs		| REST, Postman |
| Version Control | GitHub |

## How we built it
uHub is a web application that was built modularly and with a focus on scalablility as we aimed to design our website to handle thousands of events and users. We strived to produce a seamlessly experience for users by designing the front end from planning out the site's UI with wire frames and writing responsive APIs in the backend. Our frontend we created using React, while our backend was built using Python Flask and tested with Postman.

## Challenges we ran into
A few challenges we ran into were:
    1. Mobile application Compability
    2. Python package management
    3. Filtering of different events based on specified criteria
    4. CSS styling and animations

## Accomplishments that we're proud of
Developing an intricate web application that utilizes a database, user-friendly frontend and backend in under 24 hours.

## What we learned
We learned how to utilize various API such as an API for calendar integration as well as manage our time effectively to create a web application that improves students' lives will be usable.

## What's next for uHub
Adding the ability for users to get recommendations based on their interests and previous liked events. Also the ability for hosts of events to provide announcements to users that are signed up.

# [(React) Application](https://github.com/cmrnfaith/HYL_Hackathon)

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

#### Screenshot Example #1

![Screenshot #1](docs/Example2.png?raw=true "Example 1")

#### Screenshot Example #2

![Screenshot #2](docs/Example3.png?raw=true "Example 2")

### Link to the application running: [Production Version](https://u-hub.netlify.app/)
