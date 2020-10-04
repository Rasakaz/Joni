/* Schema for all the sales */ 

const { Schema, model } = require("mongoose");

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
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  }
});

module.exports = model('Sale', productSchema);




