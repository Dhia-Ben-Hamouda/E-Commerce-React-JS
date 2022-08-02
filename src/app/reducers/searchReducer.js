import * as actionTypes from "../constants/searchConstants.js";

const reducer = (state = {  products : []} , action)=>{
  switch(action.type)
  {
    case actionTypes.FETCH_ALL_PRODUCTS:
      return {
        ...state,
        products:action.payload
      }
    default:
      return state;
  }
}

export default reducer;