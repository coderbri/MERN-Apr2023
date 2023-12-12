const express = require("express"); // this means import express, a function is sent back so this variable catches it
const app = express(); // we set that function to app
const port = 8000; // so we can call this app on this port


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// * List of Instructions goes here:
app.get("/api", ( request, response ) => {
    // this is a functio that takes in a string, and a callback function with the parameters request/response
    // needs to be in this order
    response.json({ message: "Welcome to the backend!" });
});

app.post("/api/post", ( request, response ) => {
    console.log(request.body);
    response.json({ requestBody: request.body });
});


// * Needs to be below the other code blocks
console.log('Hello World!')
app.listen( port, () => console.log(`Listening on port: ${port}.`) );