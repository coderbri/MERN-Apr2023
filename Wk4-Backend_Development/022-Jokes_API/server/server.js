const express = require("express");
const app = express();
const port = 8000;

// Connect to MongoDB
require("./config/mongoose.config");

// Middleware for Data Processing
app.use(express.json(), express.urlencoded({ extended: true }));

// Import and apply routes
const allJokeRoutes = require("./routes/joke.routes");
allJokeRoutes(app);

app.listen(port, () => console.log( `Listening on port: ${port}.` ));