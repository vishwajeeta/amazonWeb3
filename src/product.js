import React from 'react'
import { SiEthereum } from 'react-icons/si';
import './product.css'
import './index.css'
import { useStateValue } from './StateProvider';

function Product({ id,title,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  
  const addToBasket =()=>{
    //dispatch the item into the data layer
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });

  };
  return (
    <div className='product white-glassmorphism'>
      <div className='product__info text-gradient'>
        <p> {title}</p>
        <p className='product__price'>
            <small><SiEthereum fontSize={21} color="#fff"/></small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating).fill().map((_,i)=>(
            <img src='./icons/star.png' alt='*'/>
          ))}
            
        </div>
      </div>
      <img src={image} alt=''/>
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}
export default Product;