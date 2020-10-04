const express = require('express');
const app = express();
const db = require('./DB/db.js');

const PORT = process.env.PORT || 5000;



app.get('/api/hello', (req, res) => {res.send('hello world')});

app.post('/deliveryDetails',(req, res) => {
  console.log(req.body);
});

app.listen(PORT, () => (console.log(`Server listening on port: ${PORT}`)));