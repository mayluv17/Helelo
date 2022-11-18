import { createSlice } from "@reduxjs/toolkit";

export const removeFavSlice = createSlice({
  name: "removeFav",
  initialState: [1],
  reducers: {
    removeFav: (state, action) => {
      const fav = action.payload;

      //   state.push(fav);
      return [fav];
    },
  },
});

// this is for dispatch
export const { removeFav } = removeFavSlice.actions;

// this is for configureStore
export default removeFavSlice.reducer;
