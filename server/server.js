const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./DB/db.js');
const bodyParser = require('body-parser'); // use to parse the json body! use it with cors
const PORT = process.env.PORT || 5000;

/* 
  [ ] - build a route that get the sale ads id as a parameter
  [ ] - return the landing page with the picture that get in the id
*/

app.use(express.json()); // change bodyparser
app.use(bodyParser.json()); //

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.post('/api/shipping', (req, res) => {
  db.storeDelivery(req.body);
  res.send('ok'); // status 200
});

app.get('/api/getProducts', async (req, res) => {
  const products = await db.getAllProducts()
  // console.log(JSON.stringify(products));
  res.send(products);
});

app.get('/api/saleads/:saleCode', (req, res) => {
  console.log('the server get a request ......');
  
  db.getADS(req.params.saleCode)
  .then((dbSchema) => {
    console.log('the server get the SCHEMA ......');
    res.send(dbSchema);
  });
});

app.get('/api/hello', (req, res) => {res.send('hello world')});

app.get('/', (req, res) => {res.send('landing page sale API')});

app.post('/deliveryDetails',(req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => (console.log(`Server listening on port: ${PORT}`)));