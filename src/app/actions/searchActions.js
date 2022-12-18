import * as actionTypes from "../constants/searchConstants.js";
import url from "../../api/baseURL.js";

export const fetchAllProducts = () =>async (dispatch) =>{
  try{
    const response = await fetch(`${url}/getAllProducts`);
    const data = await response.json();

    dispatch({type:actionTypes.FETCH_ALL_PRODUCTS , payload:data});
  }catch(err){
    console.error(err);
  }
}