import { createSlice } from "@reduxjs/toolkit";

export const removeFavSlice = createSlice({
  name: "removeFav",
  initialState: {
    value: [0],
  },
  reducers: {
    removeFav: (state, action) => {
      //process and maipulate the data here
      const fav = action.payload;
      state.value.includes(fav)
        ? (state.value = state.value.filter((item) => item != fav))
        : console.error("Item not in favorites");

      // return [sfav];
    },
    addFav: (state, action) => {
      const fav = action.payload;
      !state.value.includes(fav)
        ? console.error("Item not in favorites")
        : state.value.push(fav);
    },
  },
});

// this is for dispatch
export const { removeFav } = removeFavSlice.actions;

// this is for configureStore
export default removeFavSlice.reducer;
