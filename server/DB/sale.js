/* Schema for all the sales */ 
const { Schema, model } = require("mongoose");
const product = require('./product');

const productSchema = new Schema ({
  email: {
    type: String,
    required: true
  },
  fullName: {
    type: String, 
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  products: {
      type: Array,
      required: true
  }
});

module.exports = model('Sale', productSchema);




