import { createSlice } from "@reduxjs/toolkit";

export const favSlice = createSlice({
  name: "fav",
  initialState: {
    value: [],
  },
  reducers: {
    addFave: (state, action) => {
      const fav = action.payload;
      state.value.includes(fav)
        ? console.error("Item already favorites")
        : state.value.push(fav);
    },

    removeFav: (state, action) => {
      const fav = action.payload;
      state.value.includes(fav)
        ? (state.value = state.value.filter((item) => item !== fav))
        : console.error("Item not in favorites, cannot remove");
    },
  },
});

// this is for dispatch
export const { addFave, removeFav } = favSlice.actions;

// this is for configureStore
export default favSlice.reducer;
