
#  Star Wars Table - TypeScript, RestAPI, ReactJS

A single page web application to show how to properly and asynchronously get data (StarWars heroes) from **RestAPI** using **TypeScript** and **Redux-Saga**. I was inspired by Pranjal Bhadu's design of the main button from **Codepen**. A web project was deployed with **Heroku**.
 

*Built by **SHERA KOSIMI** Copyright © by Shera Kosimi for his personal purposes. You are 100% allowed to use this webapp for both personal and commercial use, but NOT to claim it as your own design and work. A credit to the original author, Shera Kosimi, is of course highly appreciated!*   

## Prerequisites

Install the below tools/packages

| Serial No | Software         | Version   | Serial No                                                                  |
| :-------- | :--------------- | :-------- | :------------------------------------------------------------------------- |
| 1         | Node.js          | >= 6.9.1  | [Install Node.js](https://nodejs.org/en/download/)                         |
| 2         | npm              | >= 3.10.8 | [Install NPM](https://www.npmjs.com/get-npm)                               |

## Installation
Install list-models with npm to run the website locally

**System setup**

- Clone the repo with `git clone [REPO_URL] `
- Switch to the project's root directory in terminal
- Install the dependencies by running`npm install`
- Once, 'npm install' is completed, start the server by running `npm start`
- It will run the app in the development mode -  http://localhost:3000
- The page will reload when you make changes


## Base dependencies

- [redux-saga](https://redux-saga.js.org/) as a state manager.
- [axios](https://github.com/axios/axios) for networking (HTTP Requests).
- [MUI](https://mui.com/) for styling the table.


## Redux Saga

Once the components are defined, they are tied to the management of information through the application. For this, **Redux** is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.

**Root Saga files and API connection handler**

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of reducers inside a **RootSaga.ts** file.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux saga store. This is useful because you can create behaviors based on those states in a quick and simple way

## Authors

- [Shermuhammad Kosimi ](https://github.com/sherakosimi)
