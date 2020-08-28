import React from 'react';
import '../css/Subtotal.css';
import CurrenyFormat from 'react-currency-format';
import { useStateValue } from '../context/StateProvider';
import { getBasketTotal } from '../context/reducer';

function Subtotal() {
  const [{basket}, dispatch] = useStateValue();
  var v = getBasketTotal(basket);
  console.log(v);
  return (
    <div className="subtotal">
      <CurrenyFormat
          renderText={(value) => (
            <React.Fragment>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains
            </small>
            </React.Fragment>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={'text'}
          thousandSeparator={true}
          prefix={"Rs "}
      />
      <button> Proceed to Checkout </button>
    </div>
  )
}

export default Subtotal
