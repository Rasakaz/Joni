const express = require('express');
const cors = require('cors');
const fs = require('fs');
const historyApiFallback = require('connect-history-api-fallback');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const config = require('./config/config');
const webpackConfig = require('./webpack.config');

// const db = require('./DB/db.js');
// const routes = require('./routes.js');

const bodyParser = require('body-parser'); // use to parse the json body! use it with cors
const emailSender = require('./EmailSmsSender/emailSender.js');

const isDev = process.env.NODE_ENV !== 'production';
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


app.use(express.static(path.join(__dirname, '../client/build')));


require('./routes/api/joni')(app);

app.listen(PORT, () => (console.log(`Server listening on port: ${PORT}`)));