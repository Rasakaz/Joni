import React from 'react';
import ProductCard from './productCard.js';


const SalesGrid = ({products, amount, setAmount, cartProducts, setCartProducts}) => {
  return (
    <div className='cards'>
      {products.map((product) => (
        <ProductCard key={product.title} 
        product={product} amount={amount} 
        setAmount={setAmount} cartProducts={cartProducts} 
        setCartProducts={setCartProducts}></ProductCard>
      ))}
    </div>

  );
}

export default SalesGrid;

