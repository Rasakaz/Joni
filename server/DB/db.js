const mongoose = require('mongoose');
const seeder = require('./dbSeeder');
const saleADS = require('../Entities/salesADS');
const product = require('../Entities/product');
const sale = require('../Entities/sale');

const config = require('../config/config');

const isDev = process.env.NODE_ENV !== 'production';

mongoose.connect(isDev ? config.db_dev : config.db);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.dropDatabase((err) => {if (err) console.error(err)}); // clear the db before new seed
db.once('open', () => {
  console.log('mongoose connected to data base....');
  seeder.seed();
});

//function that get a product schema/sale schema and store it in the data base
const storeDelivery = (dataSale) => {
  const productToStore = new sale({
    fullName: dataSale.fullName,
    address: dataSale.address,
    city: dataSale.city,
    phone: dataSale.phone,
    price: dataSale.price
  });
  productToStore.save((err) => {if (err) return console.error(err);})
}

const getADS = async (saleCode) => {
  console.log(`the id is:${saleCode}`);
  const saleAD = await saleADS.findOne({saleCode: saleCode}, (err) => {
    console.error('cannot find ads with the id that given...');
  }).exec();

  console.log(saleAD);
  return saleAD;
}

//find all the products from model product and return all
const getAllProducts = async () => {
  let products = [];
  await product.find({}, (err, result) => {
    if(err) {
      console.error(err);
    }
    result.forEach((p) => {;
      products.push(p);
    })
  });
  return products;
}

exports.getAllProducts = getAllProducts;
exports.storeDelivery = storeDelivery;
exports.getADS = getADS;
module.exports.db;



