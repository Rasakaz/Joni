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

  const cartClicked = () => {
    window.location.href = 'http://localhost:3000/delivery-details';
  }

  const logoClicked = () => {
    window.location.href = 'http://localhost:3000';
  }

  return (
    <div className='header'>
      <img src={logo} alt='logo' className='cart-logo-img' onClick={logoClicked}/>
      <div className='cart-div' onClick={cartClicked}>
        <img src={cart} alt='cart' className='cart-logo-img'/>
        <strong><p id='cart-amount'>{amount}</p></strong>
      </div>
    </div>
  ); 
}

export default Header;





