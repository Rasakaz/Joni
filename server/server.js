const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./DB/db.js');

const PORT = process.env.PORT || 5000;

/* 
  [ ] - build a route that get the sale ads id as a parameter
  [ ] - return the landing page with the picture that get in the id
*/

app.use(cors());

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