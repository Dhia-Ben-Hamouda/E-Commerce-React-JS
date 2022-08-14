import React from "react";
import Navbar from "./Navbar.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../app/actions/cartActions.js";
import { useDispatch } from "react-redux";

const AllProducts = () => {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(state => state.search.products);

  function addItemToCart(product)
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
      <div className="products-grid">
        {
          products.filter((product)=>{
            return product.name.toLowerCase().includes(searchTerm.toLowerCase())
          }).map((product, index) => {
            return (
              <div key={index} className="grid-item">
                <div className="img-wrapper">
                  <a href={`/product/${product._id}`}>
                    <img alt="" src={product.picture} />
                  </a>
                </div>
                <h1>
                  <a href={`/product/${product._id}`}>
                    {product.name}
                  </a>
                </h1>
                <h2>{product.description}</h2>
                <div className="price-wrapper">
                  <h3>{product.price} DT</h3>
                  <button onClick={()=>{addItemToCart(product)}}>Add To cart</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default AllProducts;