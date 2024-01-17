# D19: Intro to MERN Auth: Login and Registration, Part I

<div style="display: flex; justify-content: space-between;">
    <p>Week 7 Session ２</p>
    <p>２０２４年０１月１４日（日）</p>
</div>

### Overview

### Table of Contents
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Server Setup](#server-setup)
    - [User Model Setup](#user-model-setup)
        - Email Validation
        - Confirming Password Validation
        - [Bcrypt](#bcrypt)
    - User Controller Setup
        - JSON Web Token
    - `server.js` Setup
<!-- - [Client Setup](#client-setup) -->

## Authentication vs Authorization

### Authentication
**Authentication** is the process of ensuring that the **user logging in is who he or she claims to be**. This is done by comparing the submitted passwords to the one stored in the database for the given email address and/or username. In practice, a hashed version of both the submitted and stored password for additional security. If the two password hashes match, the user is **authentic**.

### Authorization
**Authorization** is the logic to determine whether he or she has permission to access the requested resource, in addition to authenticating users. It can be thought as checking whether a particular key fits a specific door.


# Server Setup
- set up server folder as normal
- while in the `server` directory
    - create `.env` file
        - this should be hidden in the `.gitignore` file
- packages to npm install when building server:
    - `express`
    - `mongoose`
    - `cors`
    - `dotenv`
    - `validator`: validates email and ensures that the email is written in the right format.
    - `bcrypt`: validate password
    - `jsonwebtoken`
    - `cookieparser`
- validate email:

## `User` Model Setup
As with previous projects, the User model will be set up in a schema to store them in MongoDB the same way it always has. For this example, only the following attributes will be needed for User creation:
```js
const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // ! NEW
const { isEmail } = require('validator'); // ! NEW

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [ true, "First Name is required"],
    },
    lastName: {
        type: String,
        required: [ true, "Last Name is required"],
    },
    email: {
        type: String,
        required: [ true, "Email is required"],
        validate: [ isEmail, "Invalid email" ] // ! NEW
    },
    password: {
        type: String,
        required: [ true, "Password is required"],
        minLength: [ 8, "Password must be at least 8 characters" ]
    }
}, {timestamps:true});
```

### Middleware


### Bcrypt
Passwords should never be saved as actual text. **Bcrypt** is a very popular library for hashing passwords and easy to install as well using the terminal command:
```bash
npm i bcrypt
```
This will be used as a middleware "pre hook", before the user is saved into the database.
**`user.model.js`**
```js
// near the top where the other imports are
const bcrypt = require('bcrypt');
// after the model build, but just before the export statement
UserSchema.pre('save', function(next) {
    bcrypt.hash( this.password, 10 )
        .then( hash => {
            this.password = hash;
            next();
        });
});
```
Since Bcrypt is used asynchronously, it will be used with Promises. The "10" inside the `bcrypt.hash()` function refers to the number of salt rounds that Bcrypt will use when generating a salt. Then the `next()` function is called to proceed with the next steps of validations.


### decoding jwt
- jwt.io
    - copy cookie value and paste into "encoded" textbox
    - in the "decoded" box, we should be able to see some sensitve information revealed (name, secret key, etc)