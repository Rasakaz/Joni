import React, {useState, useEffect} from 'react';
import '../App.css';

function Cart({amount, cartProducts}) {

  /* the sale:
    10 --> 79
    20 --> 139
    199 --> 30 */
    
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() => {
    const sum = amount === 10 ? 79 : amount === 20 ? 139 : amount === 30 ? 199 : null;
    setSumPrice(sum);
  }, [amount]);

  return (
    <div className="Product">
      <h3>סיכום הזמנה</h3> 
        <table>
        <thead>
          <tr>
            <th>מוצר</th>
            <th>כמות</th>
          </tr>
        </thead>
        {cartProducts.map((element) => {
          return (element.amount > 0) ?
          <tbody>
            <tr>
              <th>{element.product}</th>
              <th>{element.amount}</th>
            </tr>
          </tbody>
        : null
        })}
        </table>
      <h4 id='id_price'>מחיר כולל:  {sumPrice}₪</h4> {/* ctrl + alt + 4 = ₪ */}
    </div>
  ); 
}

export default Cart;

