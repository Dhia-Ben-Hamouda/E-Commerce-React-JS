import { combineReducers } from "redux";
import cartReducer from "./reducers/cartRedcucer.js"
import searchReducer from "./reducers/searchReducer.js";

const rootReducer = combineReducers({
  cart :cartReducer,
  search :searchReducer
});

export default rootReducer;