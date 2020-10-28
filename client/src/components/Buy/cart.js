import React, {useState, useEffect} from 'react';
// import '../../App.css';

function Cart({amount, cartProducts}) {

  /* the sale:
    10 --> 79
    20 --> 139
    199 --> 30 */
    
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() => {
    let sum;
    if(amount > 0 && amount < 10) {
      sum = 14.99 * amount;
    } else if(amount >= 10 && amount < 20){
      sum = 79 + ((amount - 10) * 14.99);
    } else if (amount >= 20 && amount < 30) {
      sum = 139 + ((amount - 20) * 14.99);
    } else if(amount >= 30) {
      sum = 199 + ((amount - 30) * 14.99);
    }
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

