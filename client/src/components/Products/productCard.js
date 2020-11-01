import React, { useState, useEffect } from 'react';

const ProductCard = ({product, amount, setAmount, cartProducts, setCartProducts}) => {
  const [productAmount, setProductAmount] = useState(0);
  const [add_sub, AddSub] = useState('');
  const [windowWidth, setWindowWidth] = useState(undefined);
  
  const minus = () => {
    if(productAmount > 0) {
      setProductAmount(productAmount - 1);
      let cart = [];
      cartProducts.map((element) => {
        if(element.product === product.title) {
          cart.push({product: element.product, amount: element.amount - 1});
        } else {
          cart.push(element);
        }
        setCartProducts(cart);
      });
      AddSub('sub');
    }
  }

  const plus = () => {
    setProductAmount(productAmount + 1);
    let cart = [];
    cartProducts.map((element) => {
      if(element.product === product.title) {
        cart.push({product: element.product, amount: element.amount + 1});
      } else {
        cart.push(element);
      }
      setCartProducts(cart);
    });
    AddSub('add');
  }
  
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if(add_sub === 'add') {
      setAmount(amount + 1);
    } 
    if(add_sub === 'sub') {
      setAmount(amount - 1);
    } else {
      cartProducts.map((element) => {
        if(element.product === product.title){
          setProductAmount(element.amount);
        }
      });
    }
  }, [productAmount, add_sub]);


  const renderCards = () => {
    return (
      <div className='card'>
        <div className='card-front'>
          <img src={require(`../../images/products/${product.path}`)}
              alt={product.title}
          />
        {windowWidth < 800 ? <button>הוספה לעגלה</button>:null}
        </div>
        <div className='card-back'>
          <h1>{product.title}</h1>
          <ul>
            <li id='description'>
              <strong>תיאור:    </strong>{product.description}
            </li>
            <li id='amount-li'>
              <strong>כמות:</strong>
              <div className='plus-minus-input-div'>
                <img alt='plus-img' src={require(`../../images/plus.png`)} onClick={plus}/>
                <p id='amount-input'>{productAmount}</p>
                <img alt='minus-img' src={require(`../../images/minus.png`)} onClick={minus}/>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  return (
    <div className='card-all'>
      {renderCards()}
    </div>
  );
}




export default ProductCard;