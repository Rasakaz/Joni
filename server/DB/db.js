const mongoose = require('mongoose');
const seeder = require('./dbSeeder');
const saleADS = require('./salesADS');

mongoose.connect('mongodb://localhost/joni', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.dropDatabase((err) => {if (err) console.error(err)}); // clear the db before new seed
db.once('open', () => {
  console.log('mongoose connected to data base....');
  seeder.seed();
  
});


const getADS = async (saleCode) => {
  console.log(`the id is:${saleCode}`);
  const saleAD = await saleADS.findOne({saleCode: saleCode}, (err) => {
    console.error('cannot find ads with the id that given...');
  }).exec();

  console.log(saleAD);
  return saleAD;
}



exports.getADS = getADS;
module.exports.db;



