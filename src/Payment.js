import React from 'react'
import './payment.css'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
  const [{ basket,user},dispatch]=useStateValue();

  return (
    <div>
        <div className='payment__container'>
          <h1>
            checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>
            {/* payment section - delevery address */}
            <div className="payment__section text-gradient">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className='payment__address text-gradient'>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles,CA</p>
            </div>
            </div>
            {/* payment section - Review Items */}
            <div className='payment__section text-gradient'>
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items text-gradient'>
          {basket.map(item =>(
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
            ))}

            </div>
            </div>
            {/* payment section - Payment method */}
            <div className='payment__section text-gradient'>
              <div className='payment__title'>
                <h3>Payment Method</h3>
              </div>
              <div className='payment__details'>
                {/* stripe magic will go*/}

              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Payment;
