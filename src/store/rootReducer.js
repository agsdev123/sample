import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./Login/LoginSlice";
import poltDetailsSlice from "./poltDetails/poltDetailsSlice";
import productSlice from "./Products/ProductSlice";

const rootReducer = combineReducers({
  auth: LoginSlice,
  productDetails: productSlice,
  poltDetails: poltDetailsSlice,
});

export default rootReducer;
