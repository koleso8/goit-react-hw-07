import { createSlice } from '@reduxjs/toolkit';

const initialState = { favorite: [], isFavorite: false };

const slice = createSlice({
  name: 'favoriteaaaa',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorite.push(action.payload);
    },
    deleteFavorite: (state, action) => {
      state.favorite = state.favorite.filter(
        item => item.id !== action.payload.id
      );
    },
    chengeIsFavorite: state => {
      state.isFavorite = !state.isFavorite;
    },
  },
});

export const favoriteReducer = slice.reducer;
export const { addFavorite, deleteFavorite, chengeIsFavorite } = slice.actions;
