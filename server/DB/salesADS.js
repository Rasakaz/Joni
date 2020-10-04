/* Schema for the sales ads */ 

const { Schema, model } = require("mongoose");

const productSchema = new Schema ({
  saleCode: {
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
    type: String,
    required: true
  }
});

module.exports = model('SalesADS', productSchema);