import React from 'react';
import { BrowserRouter as Router, 
  Route } from 'react-router-dom';
import Delivery from './delivery';
import Product from './product.js';
import '../App.css';

function Buy() {
  return (
    <Router>
        <Route path='/sale/:saleId'>
          <div className="Buy">
            <Delivery/>
            <Product />
          </div>
        </Route>
      </Router>
  ); 
}

export default Buy;


 
