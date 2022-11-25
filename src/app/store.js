import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/cart/favoriteSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    fav: favReducer,
    cart: cartReducer,
  },
});
