import React, {useState, useEffect} from 'react';
import '../App.css';

function Product({amount, cartProducts}) {

  /* the sale:
    10 --> 79
    20 --> 139
    199 --> 30 */
    
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() => {
    const sum = amount == 10 ? 79 : amount == 20 ? 139 : amount == 30 ? 199: null;
    setSumPrice(sum);
  }, []);

  return (
    <div className="Product">
      <h3>סיכום הזמנה</h3> 
        <table>
          <tr>
            <th>מוצר</th>
            <th>כמות</th>
          </tr>
        {cartProducts.map((element) => {
          return (element.amount > 0) ?
            <tr>
              <th>{element.product}</th>
              <th>{element.amount}</th>
            </tr>
        : null
        })}
        </table>
      <h2 id='id_price'>מחיר כולל:  {sumPrice}₪</h2> {/* ctrl + alt + 4 = ₪ */}
    </div>
  ); 
}

export default Product;

