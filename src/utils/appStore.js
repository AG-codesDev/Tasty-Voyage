import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import loginReducer from "./LoginInfoSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});

export default appStore;
