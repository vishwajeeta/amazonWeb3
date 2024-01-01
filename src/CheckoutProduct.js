import React from "react";
import './index.css';
import './CheckoutProduct.css';
import { SiEthereum } from 'react-icons/si';
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id,image,title,rating,price}){
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = ()=>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return(
        <div className="checkoutProduct white-glassmorphism text-gradient">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small><SiEthereum fontSize={21} color="#fff"/></small>
                    <strong>{price}</strong>

                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <img src='./icons/star.png' alt='*'/>
                    ))}

                </div>
                <div className="button" onClick={removeFromBasket}>Remove form basket</div>
            </div>
        </div>
    )
}

export default CheckoutProduct;