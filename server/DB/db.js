const mongoose = require('mongoose');
const salesADS = require('./salesADS');
const Product = require('./salesADS');
const dbSeeder = require('./dbSeeder.js');


mongoose.connect('mongodb://localhost/joni', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.dropDatabase((err) => {if (err) console.error(err)});
db.once('open', () => {
  console.log('mongoose connected to data base....');
});


module.exports.db;


