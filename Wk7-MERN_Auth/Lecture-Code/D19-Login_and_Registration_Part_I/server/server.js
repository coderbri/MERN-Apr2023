const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser'); // ! NEW

require('./config/mongoose.config');
require('dotenv').config(); // ! NEW

app.use(cookieParser()); // ! NEW
app.use(cors({ credentials: true, origin: 'http://localhost:5173' })); // ! NEW
app.use(express.json(), express.urlencoded({ extended: true }));

const UserRoutes = require('./routes/user.routes');
UserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));