import React from 'react'
import StarRateIcon from '@material-ui/icons/StarRate';
import '../css/CheckoutProduct.css';
import { useStateValue } from '../context/StateProvider';

function CheckoutProduct({id, title, price, rating, image}) {

  const [{basket}, dispatch] = useStateValue();


  const removeFromBasket = () => {
      dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
      })
  }
  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct__image" src={image} alt="productImage"/>

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
          <small>Rs </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating)
              .fill()
              .map((_) => (
                <p><StarRateIcon /></p>
              ))
          }
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct
