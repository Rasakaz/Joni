import React from 'react';
import Delivery from './delivery';
import Cart from './cart.js';
import '../App.css';

function Buy({amount, cartProducts}) {
  return (
    <div className="Buy">
      <Delivery amount={amount}
        cartProducts={cartProducts}
      />
      <Cart amount={amount}
        cartProducts={cartProducts}
      />
    </div>
  ); 
}

export default Buy;


 
