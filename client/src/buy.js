import React from 'react';
import { BrowserRouter as Router, 
  Route } from 'react-router-dom';
import Delivery from './delivery';
import Product from './product.js';
import './App.css';

function Buy() {
  return (
    <div className="Buy">
      <Delivery/>
      <Router>
        <Route path='/sale/:saleId'>
          <Product />
        </Route>
      </Router>
    </div>
  ); 
}

export default Buy;


 
