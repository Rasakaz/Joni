import React, {useState, useEffect} from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';


function Product() {
  const {saleId} = useParams();
  const [saleData, setSaleData] = useState({});
  const [isDataFetch, setIsDataFetch] = useState(false);


  useEffect(() => {
    async function fetchSaleData () {
      const response =  await fetch(`http://localhost:5000/api/saleads/${saleId}`);
      const sale = await response.json();
      setSaleData(sale);
      setIsDataFetch(true);
    }
    if(!isDataFetch) {
      fetchSaleData();
    }
  });
  
  const renderData = () =>{
    if(isDataFetch) {
      return (
        <div>
          <img src={require(`${saleData.path}`)} 
            alt='product_image'
            style={{width: '70%', height: '50%'}}
          />
          <h2 id='id_price'>מחיר כולל: {saleData.price}₪</h2> {/* ctrl + alt + 4 = ₪ */}
        </div>
      );
    }
  }

  return (
    <div className="Product">
      {renderData()}
    </div>
  ); 
}

export default Product;


 
