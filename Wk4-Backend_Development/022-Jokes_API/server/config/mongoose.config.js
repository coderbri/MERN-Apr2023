const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/jokes_api`)
    .then(() => console.log("Established a connection to the database."))
    .catch((error) => console.log("Connection to the database failed.", error));