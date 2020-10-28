/* Schema for product */ 

const { Schema, model } = require("mongoose");

const product = new Schema ({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  path: {
    type: String, // save as type Image!
    required: true,
  }
});


module.exports = model('product', product);