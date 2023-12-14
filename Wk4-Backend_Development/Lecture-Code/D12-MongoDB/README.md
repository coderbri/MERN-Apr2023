# D12: MongoDB

<div style="display: flex; justify-content: space-between;">
    <p>Week 4 Session 3</p>
    <p>２０２３年１２月１２日（火）</p>
</div>

### Table of Contents
- [What is a database?](#what-is-a-database)
- [Difference between SQL and NoSQL](#difference-between-sql-and-nosql)
- [How to install MongoDB?](#how-to-install-mongodb)
  - [on Mac](#on-mac)
  - [on Windows](#on-windows)
- [Install MongoDB Compass](#install-mongodb-compass)


## What is a database?
A database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage.

### Difference between SQL and NoSQL

(SQL) Structured Query Language databases are relational databases, while NoSQL databases are non-relational or distributed databases. The main differences lie in their data models, scalability, and schema flexibility.

**SQL Databases:**
- **Data Model:** SQL databases are table-based and follow a rigid, predefined schema. Each row in a table represents a record, and columns represent attributes.
- **Scalability:** Scaling SQL databases vertically by adding more powerful hardware is common. However, this has limitations and can become expensive.
- **Schema:** Changes to the schema often require migrations, which can be time-consuming and complex.

**NoSQL Databases:**
- **Data Model:** NoSQL databases can be document-oriented, key-value pairs, wide-column stores, or graphs. They provide flexibility in organizing and storing data.
- **Scalability:** NoSQL databases are designed for horizontal scalability. You can add more servers to your NoSQL database to handle increased load efficiently.
- **Schema:** NoSQL databases are schema-less or have a dynamic schema, allowing for changes without downtime.

#### Why NoSQL for MERN Projects?
For MERN (MongoDB, Express.js, React, Node.js) projects, NoSQL databases, especially MongoDB, are often preferred for several reasons:

1. **JSON-Like Documents:** MongoDB stores data in BSON format, which is a binary representation of JSON-like documents. This aligns well with the JavaScript Object Notation (JSON) used in Node.js and JavaScript.

2. **Flexible Schema:** MERN projects often involve frequent changes in data structure during development. MongoDB's flexible schema allows developers to adapt to these changes easily without affecting existing data.

3. **Scalability:** MERN applications, particularly those built with Node.js, are designed for high concurrency. MongoDB's horizontal scalability makes it well-suited for handling large amounts of concurrent requests.

4. **JavaScript Stack Compatibility:** MongoDB integrates seamlessly with the JavaScript stack, making it a natural choice for projects using Node.js on the server-side and React on the client-side.

5. **Developer Productivity:** NoSQL databases, with their flexible data model, allow developers to iterate quickly during development, enabling a more agile and efficient development process.

In summary, NoSQL databases, and specifically MongoDB, complement the MERN stack by providing a flexible and scalable data storage solution that aligns well with the dynamic nature of JavaScript-based development.


## How to install MongoDB?

### on Mac
To install MongoDB on Mac, you can use Homebrew. Open Terminal and run the following commands:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew tap mongodb/brew
brew install mongodb-community@6.0
brew services start mongodb-community@6.0
```
Verify the installation with:
```bash
mongod --version
```

### on Windows
For Windows, you can download the MongoDB installer from the official website [here](https://www.mongodb.com/try/download/community). Follow the installation wizard and ensure that MongoDB is added to your system PATH during installation.

## Install MongoDB Compass
[MongoDB Compass](https://www.mongodb.com/try/download/compass) is the official graphical user interface for MongoDB. Download and install MongoDB Compass to easily interact with your MongoDB databases.
