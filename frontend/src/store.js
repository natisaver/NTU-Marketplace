// import { createStore, applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productItemReducer,
  productEditReducer,
  productDeleteReducer,
} from "./reducers/productReducer";
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducer";
// import thunk from 'redux-thunk'
// import { combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import { productCreateReducer } from "./reducers/productReducer";
import { BookmarkReducer } from "./reducers/bookmarkReducer";
// importing the offer reducers
import { offerCreateReducer, offerReceivedReducer, offerSentReducer, offerBoughtReducer, offerSoldReducer,  offerRespondReducer } from "./reducers/offerReducer";

// const initialState = {}
// const middleware = [thunk]
// const reducer = combineReducers({
//   productList: productListReducer,
// })

const store = configureStore({
  reducer: {
    productList: productListReducer,
    productItem: productItemReducer,
    productEdit: productEditReducer,
    productDelete: productDeleteReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productCreate: productCreateReducer,
    offerCreate: offerCreateReducer,
    offerSent: offerSentReducer,
    offerReceived: offerReceivedReducer,
    offerRespond: offerRespondReducer,
    offerBought: offerBoughtReducer,
    offerSold: offerSoldReducer,
    userDetails: userDetailsReducer,
    bookmark: BookmarkReducer,
  },
  preloadedState: {
    userLogin: {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    },
  },
});

export default store;
