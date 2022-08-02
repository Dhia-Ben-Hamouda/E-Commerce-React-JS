import * as actionTypes from "../constants/searchConstants.js";

export const fetchAllProducts = () =>async (dispatch) =>{
  try{
    const response = await fetch("https://e-commerce-shop-react-js.herokuapp.com/getAllProducts");
    const data = await response.json();

    dispatch({type:actionTypes.FETCH_ALL_PRODUCTS , payload:data});
  }catch(err){
    console.error(err);
  }
}