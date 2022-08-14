import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity , incrementQuantity} from "../app/actions/cartActions.js";

const CartItem = ({id , name , picture , price , quantity})=>{
  const dispatch = useDispatch();

  function increment()
  {
    dispatch(incrementQuantity(id));
  }

  function decrement()
  {
    dispatch(decrementQuantity(id));
  }

  return(
    <>
      <div className="product">
        <div className="left">
          <div className="img-wrapper">
            <img alt="" src={picture}/>
          </div>
          <h1>{name}</h1>
        </div>
        <div className="right">
          <h1 className="mobile-name">
            {
              name
            }
          </h1>
          <div className="wrap">
            <div>
              <div className="span" style={{cursor:"pointer" , fontWeight:"600"}} onClick={decrement}>-</div>
              <span style={{marginInline:"1rem" , fontWeight:"600" , color:"#777"}}>{quantity}</span>
              <div className="span" style={{cursor:"pointer" , fontWeight:"600"}} onClick={increment}>+</div>
            </div>
            <h2>{price * quantity}.000 DT</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;