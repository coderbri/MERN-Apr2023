# MongoDB Practice

## Overview

This project serves as a practice session for MongoDB, focusing on utilizing the MongoDB shell to perform various database operations. It covers the basics of accessing the MongoDB shell, creating a database and collection, inserting documents, querying, updating, and deleting documents, as well as modifying fields and adding a timestamp field.

## Table of Contents

1. [Accessing MongoDB Shell in MacOS Terminal](#1-accessing-mongodb-shell-in-macos-terminal)
2. [Creating a Database and Collection](#2-creating-a-database-and-collection)
3. [Inserting Documents into the Collection](#3-inserting-documents-into-the-collection)
4. [Practicing CRUD Functionalities](#practicing-crud-functionalities)
   - [Inserting Documents into the Collection](#inserting-documents-into-the-collection)
   - [Querying Documents](#querying-documents)
   - [Updating Documents](#updating-documents)
   - [Deleting Documents](#deleting-documents)
   - [Modifying Fields](#modifying-fields)
   - [Adding a Timestamp Field](#adding-a-timestamp-field)

## 1. Accessing MongoDB Shell in MacOS Terminal

To access the MongoDB shell in the MacOS terminal, follow these steps:

```bash
$ mongo
```

Once in the MongoDB shell, you can execute various commands to interact with the database.

## 2. Creating a Database and Collection

To create a database and collection, follow these steps:

```bash
> use my_first_db
my_first_db > db.createCollection("students")
```

Here, we create a database named `my_first_db` and a collection named `students`.

## 3. Inserting Documents into the Collection

When inserting documents into the `students` collection, ensure that the data follows this format:

```bash
my_first_db > db.students.insertOne({
    name: STRING,
    home_state: STRING,
    lucky_number: NUMBER,
    birthday: {
        month: NUMBER,
        day: NUMBER,
        year: NUMBER
    }
})
```

Inserts a document into the `students` collection with various fields. Adjust the values based on your specific data requirements.

## Practicing CRUD Functionalities

### Inserting Documents into the Collection

```bash
my_first_db > db.students.insertOne({ name: "Jane Doe", home_state: "New York", lucky_number: 7, birthday: { month: 5, day: 15, year: 1994 } })
```

Inserts a document into the `students` collection with various fields.

### Querying Documents

```bash
my_first_db > db.students.find()
my_first_db > db.students.find({ home_state: "California" })
my_first_db > db.students.find({ lucky_number: { $gt: 3 } })
```

Executes queries to retrieve documents based on different conditions.

### Updating Documents

```bash
my_first_db > db.students.updateMany({}, { $set: { interests: ["coding", "brunch", "MongoDB"] } })
my_first_db > db.students.updateOne({ name: "John Smith" }, { $push: { interests: "Playing Basketball"} })
```

Updates documents by adding fields or pushing values into arrays.

### Deleting Documents

```bash
my_first_db > db.students.deleteMany({ home_state: "California" })
my_first_db > db.students.deleteOne({ name: "Charlotte" })
```

Deletes documents based on specified conditions.

### Modifying Fields

```bash
my_first_db > db.students.updateMany({}, { $set: { number_of_belts: 0 } })
my_first_db > db.students.updateMany({ home_state: "Washington" }, { $inc: { number_of_belts: 1 } })
my_first_db > db.students.updateMany({}, { $rename: { number_of_belts: "belts_earned" } })
my_first_db > db.students.updateMany({}, { $unset: { lucky_number: 1 } })
```

Modifies fields by setting values, incrementing, renaming, or unsetting them.

### Adding a Timestamp Field

```bash
my_first_db > db.students.updateMany({}, { $set: { updated_at: new Date() } })
```

Adds an `updated_at` field with the current date to all documents.

These are examples of MongoDB shell commands for database and collection operations. Adjust these queries based on your specific use case.

---
<p align="right">Completed: ２０２３年１２月１３日（水）</p>