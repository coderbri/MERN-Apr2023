# D11: Intro to Express

<div style="display: flex; justify-content: space-between;">
    <p>Week 4 Session 2</p>
    <p>２０２３年１２月１２日（火）</p>
</div>

This repository contains the backend setup for a MERN (MongoDB, Express.js, React, Node.js) application. The server is implemented using Express.js, a web application framework for Node.js.

## Table of Contents
- [Introduction](#introduction)
- [What is a server?](#what-is-a-server)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Server](#running-the-server)
- [Server Configuration](#server-configuration)
- [Testing with Postman](#testing-with-postman)

## Introduction

This repository serves as an introduction to Express, a web application framework for Node.js, within the context of a MERN (MongoDB, Express.js, React, Node.js) application.

## What is a server?

A server is essentially a computer equipped with software that enables it to handle requests from clients. In the context of web development, servers respond to requests from users, and Node.js facilitates running JavaScript outside of the browser. Express, the web application framework used in this stack, aims to simplify common web development activities.

## Getting Started

### Prerequisites

Ensure that Node.js is installed on your machine. You can download it [here](https://nodejs.org/).

### Installation

Use the following commands to set up the project:

```bash
npm i express
npm init -y
```

### Running the Server

To start the server, execute the following command:

```bash
node server.js
```

For a more developer-friendly experience with automatic restarts during code changes, you can use nodemon. Install it globally with:

```bash
npm install -g nodemon
```

Then run the server with:

```bash
nodemon server.js
```


## Server Configuration

The main server configuration is in the `server.js` file. Key components include:

```javascript
const express = require("express");
const app = express();
const port = 8000;

// Middleware to parse incoming JSON data
app.use(express.json());
// Middleware to parse incoming URL-encoded form data
app.use( express.urlencoded({ extended: true }) );

// Route for handling GET requests to /api
app.get("/api", (request, response) => {
    response.json({ message: "Welcome to the backend!" });
});

// Route for handling POST requests to /api/post
app.post("/api/post", (request, response) => {
    console.log(request.body);
    response.json({ requestBody: request.body });
});

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Listening on port: ${port}.`));
```

1. This line imports the Express library, making it available for use in your script.
    ```javascript
    const express = require("express");
    ```

2. Here, you create an instance of the Express application by invoking the imported `express` function. This `app` variable will be used to configure and define routes for your server.
    ```javascript
    const app = express();
    ```

3. You define a variable `port` and set it to 8000. This will be the port on which your server will listen for incoming requests.
    ```javascript
    const port = 8000;
    ```

4. The two middleware functions mean the following:

    - `app.use(express.json());` enables the server to parse incoming JSON data, making it accessible in request.body for routes that handle POST requests.

    - `app.use(express.urlencoded({ extended: true }));` configures the server to parse incoming URL-encoded form data, allowing it to handle form submissions.

    These middleware functions are essential for ensuring that the server can handle different types of data sent by clients in their requests, whether it's JSON or URL-encoded form data.


5.  This block sets up a route for handling HTTP GET requests to "/api". When a client makes a GET request to this endpoint, the server responds with a JSON object containing the message "Welcome to the backend!".
    ```javascript
    app.get("/api", (request, response) => {
        response.json({ message: "Welcome to the backend!" });
    });
    ```

6. Similarly, this block sets up a route for handling HTTP POST requests to "/api/post". When a client makes a POST request, the server logs the request body to the console and responds with a JSON object containing the request body.
    ```javascript
    app.post("/api/post", (request, response) => {
        console.log(request.body);
        response.json({ requestBody: request.body });
    });
    ```


7. Finally, this line makes the server listen on the specified port (8000 in this case). The callback function logs a message to the console once the server is successfully listening.
    ```javascript
    app.listen(port, () => console.log(`Listening on port: ${port}.`));
    ```

In summary, the code sets up an Express server with two routes ("/api" and "/api/post") to handle GET and POST requests, respectively, and listens on port 8000.


## Testing with Postman

Ensure to test the routes, especially during development. Postman can be used for this purpose:

1. Open Postman and make a GET request to [https://localhost:8000/api](https://localhost:8000/api).

2. For POST requests, use the route [https://localhost:8000/api/post](https://localhost:8000/api/post) and provide the necessary request body.

These steps ensure that the server is correctly configured and handles requests as expected.
