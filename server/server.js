const express = require('express');
const cors = require('cors');
// const db = require('./DB/db.js');
// const routes = require('./routes.js');

const bodyParser = require('body-parser'); // use to parse the json body! use it with cors
const emailSender = require('./DB/emailSender.js');

const PORT = process.env.PORT || 8080;


const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json()); // change bodyparser
// app.use(bodyParser.json()); ///

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

require('./routes/api/joni')(app);

app.listen(PORT, () => (console.log(`Server listening on port: ${PORT}`)));