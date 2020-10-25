import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../images/joni-logo.png';
import cart from '../images/cart.png';
import { Link } from 'react-router-dom';

function Header({amount , setAmount, cartProducts, setCartProducts}) {

  useEffect(() => {
    const cartAmount = document.querySelector('#cart-amount');
    if(amount === 0){
      cartAmount.style.display = 'none';
    } else {
      cartAmount.style.display = '';
    }
  }, [amount, setAmount]);


  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt='logo' className='cart-logo-img'/>
      </Link>
      <div className='cart-div'>
        <Link to='/delivery-details'>
          <img src={cart} alt='cart' className='cart-logo-img'/>
        </Link>
        <strong><p id='cart-amount'>{amount}</p></strong>
      </div>
    </div>
  ); 
}

export default Header;





