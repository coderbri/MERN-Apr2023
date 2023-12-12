# Faker API

This project utilizes the Faker API to generate mock data for users and companies. The server is built using Node.js and Express, and the routes are designed to return new user, company, or combined user and company data in JSON format. Additionally, nodemon is used for server auto-restart, and Postman is recommended for testing the GET routes.


## Table of Contents

- [Getting Started](#getting-started)
    - [Faker Overview](#faker-overview)
    - [Project Setup](#project-setup)
- [Setting up User and Company Faker Data Generation](#setting-up-user-and-company-faker-data-generation)
- [API Route Setup](#api-route-setup)
- [Testing API Routes](#testing-api-routes)
    - [Start the Server](#start-the-server)
    - [Postman Testing](#postman-testing)


## Getting Started

### Faker Overview

[Faker](https://https://fakerjs.dev/) is a JavaScript library used for generating realistic, random data for various purposes, such as testing, prototyping, and data simulation.

### Project Setup

1. **Create a `server` Directory:**
   - In the terminal, navigate to the project root directory.
   - Run the following command to create a `server` directory:
     ```bash
     mkdir server
     ```

2. **Initialize `package.json`:**
   - Navigate into the `server` directory:
     ```bash
     cd server
     ```
   - Run the following command to initialize the `package.json` file:
     ```bash
     npm init -y
     ```

3. **Install Dependencies:**
   - Install the `faker` library for generating fake data:
     ```bash
     npm install @faker-js/faker
     ```
   - Install Express for building the server:
     ```bash
     npm install express
     ```

4. **Import Dependencies:**
   - In your `server.js` file, import `express` and `faker`:
     ```javascript
     const express = require("express");
     const { faker } = require("@faker-js/faker");
     ```

5. **Example Project Usage:**
   - Understand how to use Faker for data generation. Here's an example:
     ```javascript
     const createProduct = () => {
         const newFake = {
             name: faker.commerce.productName(),
             price: faker.commerce.price(),
             department: faker.commerce.department(),
         };
         return newFake;
     }

     const newFakeProduct = createProduct();
     console.log(newFakeProduct);

     /* The output of the above console.log() will look like this:
         {
             name: "Clockwork Penguin Toy",
             price: "￥5500.00",
             department: "Toys"
         }
     */
     ```

The project is now set up, allowing for the creation of routes and the implementation of desired functionality using the Faker library for data generation.


## Setting up User and Company Faker Data Generation

```javascript
// Example: Creating a new user
const createUser = () => {
    const newUser = {
        _id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newUser;
};

// Example: Creating a new company
const createCompany = () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newCompany;
};
```


## API Route Setup

Here's how the API routes are set up in the `server.js` file to handle these requests:

- **Create a User:**
    ```js
    app.get("/api/users/new", (request, response) => {
        const newUser = createUser();
        response.json(newUser);
    });
    ```
  - Route: `/api/users/new`
  - Returns a new user object with properties such as `_id`, `firstName`, `lastName`, `phoneNumber`, `email`, and `password`.

- **Create a Company:**
    ```js
    app.get("/api/companies/new", (request, response) => {
        const newCompany = createCompany();
        response.json(newCompany);
    });
    ```
  - Route: `/api/companies/new`
  - Returns a new company object with properties like `_id`, `name`, and `address`.

- **Create User and Company:**
    ```js
    app.get("/api/user/company", (request, response) => {
        const newUser = createUser();
        const newCompany = createCompany();
        const employeeData = {
            user: newUser,
            company: newCompany,
        };
        response.json(employeeData);
   });
    ```
    - Route: `/api/user/company`
    - Returns both a new user and a new company in a combined JSON response.

These routes use the functions `createUser` and `createCompany` to generate fake user and company data using the Faker library and respond with the generated data in JSON format.



## Testing API Routes

To test the API routes, you can use a tool like Postman or any other API testing tool of your choice. Follow these steps to test the provided routes:

### **Start the Server**
Ensure that the server is running. You can start it using the following command:
```bash
nodemon server.js
```

### **Postman Testing**
Open Postman or your preferred API testing tool.

- **Create a New User:**
    - Send a GET request to the following route:
    ```
    GET /api/users/new
    ```
    - This will return a new user object with properties such as _id, firstName, lastName, phoneNumber, email, and password.

- **Create a New Company:**
    - Send a GET request to the following route:
    ```
    GET /api/companies/new
    ```
    - This will return a new company object with properties like _id, name, and address.

- **Create User and Company:**
    - Send a GET request to the following route:
    ```
    GET /api/user/company
    ```
    - This will return both a new user and a new company in a combined JSON response.


Users can utilize Postman or their preferred tools to test the routes and observe the generated data for users and companies.

---
<p align="right">Completed: ２０２３年１２月１２日（火）</p>