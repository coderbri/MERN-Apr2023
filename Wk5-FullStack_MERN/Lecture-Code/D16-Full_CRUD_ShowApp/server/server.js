const express = require("express");
const app = express();

// ! New
const cors = require("cors");
app.use( cors() );

const port = 8000;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllShowRoutes = require("./routes/show.routes");
AllShowRoutes(app);


app.listen(port, () => console.log( `Listening on port: ${port}.` ));