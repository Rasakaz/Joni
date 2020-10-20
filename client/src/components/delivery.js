import React, { useState } from 'react';
import '../App.css';

function Delivery() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [price, setPrice] = useState('');
  const [shippped, setShipped] = useState(false);
  const [valid, isValid] = useState(false);

  const shipping = async () => {
    if(!valid){
      return;
    }
    const sale = JSON.stringify({
      email: email,
      fullName: fullName,
      address: address,
      city: city,
      phone: phone,
      price: price
    });
    
    const options = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
   
      },
      body: sale
    };
    console.log(sale);
    const response = await fetch(`http://localhost:5000/api/shipping`, options);
    console.log(response);
    // here check if shipped and then pop up a message and clear all fields.
  }

  const validate = () => {
    const emailDiv = document.querySelector('#email');
    const emailError = document.querySelector('#email-error');
    const nameDiv = document.querySelector('#fullName');
    const nameError = document.querySelector('#name-error');
    const addressDiv = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    const cityDiv = document.querySelector('#city');
    const cityError = document.querySelector('#city-error');
    const phoneDiv = document.querySelector('#phone');
    const phoneError = document.querySelector('#phone-error');
    const priceSelector = document.querySelector('#id_price');
    
    const Errors = {
      border: '1px solid red',
      emptyField: 'שדה חובה.',
      emailError: 'כתובת אימייל לא תקינה.',
      phone: 'מספר טלפון לא תקין.',
    };

    if(priceSelector) {
      setPrice(priceSelector.innerHTML.replace('₪', '').replace('מחיר כולל:', ''));
      isValid(true);
    } else {
      isValid(false);
    }

    if(email === ""){
      emailDiv.style.border = Errors.border;;
      emailError.textContent = Errors.emptyField;
      isValid(false);
    } else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      emailDiv.style.border = "none";
      emailError.textContent = "";
      isValid(true);
    } else {
      emailDiv.style.border = Errors.emailError;
      isValid(false);
    }
    
    if(fullName === "") {
      nameDiv.style.border = Errors.border;
      nameError.textContent = Errors.emptyField;
      isValid(false);
    } else {
      nameDiv.style.border = "none";
      nameError.textContent = "";
      isValid(true);
    }
    
    if(address === "") {
      addressDiv.style.border = Errors.border;
      addressError.textContent = Errors.emptyField;
      isValid(false);
    } else {
      addressDiv.style.border = "none";
      addressError.textContent = "";
      isValid(true);
    }
    
    if(city === "") {
      cityDiv.style.border = Errors.border;
      cityError.textContent = Errors.emptyField;
      isValid(false);
    } else {
      cityDiv.style.border = "none";
      cityError.textContent = "";
      isValid(true);
    }
    
    if(phone === "") {
      phoneDiv.style.border = Errors.border;
      phoneError.textContent = Errors.emptyField;
      isValid(false);
    } else if (!(/^[0-9]/.test(phone))) {
      phoneDiv.style.border = Errors.border;
      phoneError.textContent = Errors.phone;
      isValid(false);
    } else {
      phoneDiv.style.border = "none";
      phoneError.textContent = "";
      isValid(true);
    }
  }
  
  return (
    <div className="Delivery">
      <form>
        <input className='input' type='email' id='email' placeholder="* דואר אלקטרוני"
            onChange={(e) =>{ 
              setEmail(e.target.value);
              validate();}}/>
        <div className="error-div" id="email-error"></div>
        <input className='input' type='text' id='fullName' placeholder="* שם מלא" 
           onChange={(e) => {
             setFullName(e.target.value);
             validate();}}/>
        <div className="error-div" id="name-error"></div>
        <input className='input' type='text' id='address' placeholder="* כתובת" 
          onChange={(e) => {
            setAddress(e.target.value);
            validate();}}/>
        <div className="error-div" id="address-error"></div>
        <input className='input' type='text' id='city' placeholder="* עיר" 
          onChange={(e) => {
            setCity(e.target.value);
            validate();}}/>
        <div className="error-div" id="city-error"></div>
        <input className='input' type='tel' id='phone' pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder="* טלפון" 
          onChange={(e) => {
            setPhone(e.target.value);
            validate();}}/>
        <div className="error-div" id="phone-error"></div>
        <input className='submit' type='button' value='שמור והמשך' onClick={shipping}/>
      </form>
    </div>
  ); 
}

export default Delivery;