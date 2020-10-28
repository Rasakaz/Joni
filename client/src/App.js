import React, { useState, useEffect } from 'react';
import { Switch, BrowserRouter as Router,
  Route } from 'react-router-dom';
import Header from './components/header.js';
import Title from './components/title.js';
import Buy from './components/buy.js';
import SalesGrid from './components/salesGrid.js';
import './App.css';

import Image from './images/joni-backgroud.png';

function App() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState([{}]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response =  await fetch(`/api/getProducts`); // fetching from the api all the products
      const data = await response.json();
      let allProducts = [];
      data.map((d) => {
        allProducts.push({product: d.title, amount: 0});
      });
      setCartProducts(allProducts);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <Router>
      <div className="App" >
        <img id='background-img' src={Image} alt='background-img'/>
        <Header amount={amount} setAmount={setAmount} 
        cartProducts={cartProducts} 
        setCartProducts={setCartProducts}/>
        <Title/>
        <Switch>
          <Route exact path='/'>
            <SalesGrid products={products} amount={amount} 
            setAmount={setAmount} cartProducts={cartProducts}
            setCartProducts={setCartProducts}/>
          </Route>
          <Route path='/delivery-details'>
            <Buy amount={amount} 
            cartProducts={cartProducts}/>
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;


 
