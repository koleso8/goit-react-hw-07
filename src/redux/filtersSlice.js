import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '', isFavorite: false };

const slice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.name = actions.payload;
    },
    changeIsFavorite: state => {
      state.isFavorite = !state.isFavorite;
    },
  },
});

export const filtersReducer = slice.reducer;

export const { changeFilter, changeIsFavorite } = slice.actions;
