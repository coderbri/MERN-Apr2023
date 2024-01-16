# D19: Intro to MERN Auth: Login and Registration, Part I

<div style="display: flex; justify-content: space-between;">
    <p>Week 7 Session ２</p>
    <p>２０２４年０１月１４日（日）</p>
</div>

### Overview

### Table of Contents
- [Authentication vs Authorization](#authentication-vs-authorization)
- [Server Setup](#server-setup)
- [Client Setup](#client-setup)

## Authentication vs Authorization

### Authentication
**Authentication** is the process of ensuring that the **user logging in is who he or she claims to to be**. This is done by comparing the submitted passwords to the one stored in the database for the given email address and/or username. In practice, a hashed version of both the submitted and stored password for additional security. If the two password hashes match, the user is **authentic**.

### Authorization
**Authorization** is the logic to determine whether he or she has permission to access the requested resource, in addition to authenticating users. It can be thought as checking whether a particular key fits a specific door.

## BCrypt


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

## Model Setup (UPDATED)
### Middleware


## Client Setup