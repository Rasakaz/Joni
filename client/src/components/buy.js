import React from 'react';
import Delivery from './delivery';
import Product from './product.js';
import '../App.css';

function Buy({amount, cartProducts}) {
  return (
    <div className="Buy">
      <Delivery amount={amount}
        cartProducts={cartProducts}
      />
      <Product amount={amount}
        cartProducts={cartProducts}
      />
    </div>
  ); 
}

export default Buy;


 
