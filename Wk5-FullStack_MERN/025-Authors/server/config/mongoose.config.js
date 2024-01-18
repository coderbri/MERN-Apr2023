const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/authors`)
    .then(()=>console.log("Established a connection to the database."))
    .catch((error)=>console.log("Something went wrong when connecting to the database", error));