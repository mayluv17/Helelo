import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: [1],
  reducers: {
    addFave: (state, action) => {
      const fav = action.payload;

      //   state.push(fav);
      return [fav];
    },
  },
});

// this is for dispatch
export const { addFav } = favSlice.actions;

// this is for configureStore
export default favSlice.reducer;
