import React from "react";
import './index.css';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";
function Subtotal() {
  const navigate=useNavigate();
  const [{basket},dispatch] = useStateValue();
  return (
    <div className=" text-gradient  subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <div className="button_subtotal" onClick={e => navigate('/payment')} >proceed to checkout</div>
    </div>
  );
}

export default Subtotal;
