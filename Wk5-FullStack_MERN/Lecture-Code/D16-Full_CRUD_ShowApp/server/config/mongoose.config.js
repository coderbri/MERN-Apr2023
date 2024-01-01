const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost:27017/tvShows`, {
    /*
    ! The following are deprecated as of 4.0.0 - Dec 2023
    useNewUrlParser: true,
    useUnifiedTopology: true
    */
})
    .then(() => console.log( "Established a connection to the database." ))
    .catch((error) => console.log( "Something went wrong when connecting to the database", error ));