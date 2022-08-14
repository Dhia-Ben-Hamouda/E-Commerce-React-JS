import React from "react";
import Navbar from "./Navbar.jsx";
import CartItem from "./CartItem.jsx";
import { useSelector } from "react-redux";

const Cart = () => {

  let products = useSelector(state => state.cart.products);
  let total = useSelector(state => state.cart.total);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="products">
          {
            products.map((product , index) => {
              return(
                <CartItem 
                  key={index}
                  id={product.id}
                  picture={product.picture}
                  name={product.name}
                  price={product.price}
                  quantity={product.quantity}
                />
              )
            })
          }
        </div>
        <div className="checkout">
          <div className="wrapper">
            <h2 style={{color:"#777"}}>Total</h2>
            <h3>{total}.000 DT</h3>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;