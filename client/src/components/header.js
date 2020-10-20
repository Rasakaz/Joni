import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../images/joni-logo.png';
import cart from '../images/cart.png';

function Header({amount , setAmount, cartProducts, setCartProducts}) {

  useEffect(() => {
    const cartAmount = document.querySelector('#cart-amount');
    if(amount === 0){
      cartAmount.style.display = 'none';
    } else {
      cartAmount.style.display = '';
    }
  });

  return (
    <div className='header'>
      <img src={logo} alt='logo' className='cart-logo-img'/>
      <div className='cart-div'>
        <img src={cart} alt='cart' className='cart-logo-img'/>
        <strong><p id='cart-amount'>{amount}</p></strong>
      </div>
    </div>
  ); 
}

export default Header;





