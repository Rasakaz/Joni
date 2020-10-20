import React, { useState, useEffect } from 'react';
import Header from './components/header.js';
import Title from './components/title.js';
import Buy from './components/buy.js';
import SalesGrid from './components/salesGrid.js';
import Image from './images/joni-backgroud.png';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const [amount, setAmount] = useState(0);
  const [cartProducts, setCartProducts] = useState([{}]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response =  await fetch(`http://localhost:5000/api/getProducts`); // fetching from the api all the products
      const data = await response.json();
      let allProducts = [];
      data.map((d) => {
        allProducts.push({product: d.title, amount: 0});
        // setCartProducts([...cartProducts, {product: d.title, amount: 0}]);
      });
      setCartProducts(allProducts);
      setProducts(data);
    };
    fetchProducts();
  }, []);


  return (
    <div className="App">
      {/* <img src={Image} alt="doggie" id='background-img'/> */}
      <Header amount={amount} setAmount={setAmount} 
      cartProducts={cartProducts} 
      setCartProducts={setCartProducts}/>
      <Title/>
      <SalesGrid products={products} amount={amount} 
      setAmount={setAmount} cartProducts={cartProducts}
      setCartProducts={setCartProducts}/>
      {/* <Buy/> */}
    </div>
  ); 
}

export default App;


 
