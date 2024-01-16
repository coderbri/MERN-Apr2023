const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
const port = 8000;

require('./config/mongoose.config');
require('dotenv').config(); // ! NEW
app.use(express.json(), express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));