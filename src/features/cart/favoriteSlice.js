import { createSlice } from "@reduxjs/toolkit";

var favorites = JSON.parse(localStorage.getItem("favorites"));
// localStorage.removeItem("favorites");

export const favoriteSlice = createSlice({
  name: "fav",
  initialState: {
    value: favorites || [],
  },
  reducers: {
    addFave: (state, action) => {
      //process and maipulate the data here
      const favorite = action.payload;
      //check if favorite already exists befire adding new favorite
      if (state.value) {
        const favoriteExist = state.value.some((favoriteItem) => {
          return favoriteItem.id === favorite.id;
        });
        //add new favorite if it dosen't exists
        if (!favoriteExist) {
          state.value = [...state.value, favorite];
          localStorage.setItem("favorites", JSON.stringify(state.value));
        } else {
          //remove item from favorite
          const newfavorite = state.value.filter(
            (favoriteItem) => favoriteItem.id !== favorite.id
          );
          state.value = newfavorite;
          localStorage.setItem("favorites", JSON.stringify(state.value));
        }
      }
    },
  },
});
// this is for dispatch
export const { addFave } = favoriteSlice.actions;

// this is for configureStore
export default favoriteSlice.reducer;
