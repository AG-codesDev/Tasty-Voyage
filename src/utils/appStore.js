import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import sideBarReducer from "./sideBarSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    sidebar: sideBarReducer,
  },
});

export default appStore;
