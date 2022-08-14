import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from "./Nav.jsx";
import { addToCart } from "../app/actions/cartActions.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Product = () => {
  const [product, setProduct] = useState({});
  const [loading , setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://e-commerce-shop-react-js.herokuapp.com/product/${id}`);
      const data = await response.json();

      setLoading(false);
      setProduct(data[0]);
    }
    fetchData();
  }, [id]);

  function clickHandler()
  {
    dispatch(addToCart({
      id:product._id,
      picture:product.picture,
      name:product.name,
      price:product.price,
      quantity:1
    }))
  }

  return (
    <>
      <Navbar />
      {
        loading ? <div className="loading-wrapper" style={{textAlign:"center"}}>
        <CircularProgress style={{margin:"3rem"}}/>
        </div> : <div className="details">
        <div className="product">
          <div className="product-left">
            <img src={product.picture} alt="" />
          </div>
          <div className="product-right">
            <div className="container">
              <h1>
                {
                  product.name
                }
              </h1>
              <h2>
                {
                  product.description
                }
              </h2>
              <div className="wrapper">
                <h3>
                  {
                    product.price
                  } DT
                </h3>
                <button onClick={clickHandler}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Product;