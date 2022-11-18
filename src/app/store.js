import { configureStore } from "@reduxjs/toolkit";
import favReducer from "../features/cart/favoriteSlice";

export default configureStore({
  reducer: {
    fav: favReducer,
  },
});
