import * as actionTypes from "../constants/cartConstants.js";

export const addToCart = (product)=>{
  return({
    type:actionTypes.ADD_TO_CART,
    payload:product
  })
}

export const decrementQuantity = (id)=>{
  return({
    type:actionTypes.DECREMENT_QUANTITY,
    payload:id
  })
}

export const incrementQuantity = (id)=>{
  return({
    type:actionTypes.INCREMENT_QUANTITY,
    payload:id
  })
}