import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66c6e638732bf1b79fa481c0.mockapi.io/';

export const toggleIsFavoriteThunk = createAsyncThunk(
  'toggleisFavorite',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.put(`todos/${card.id}`, {
        ...card,
        isFavorite: !card.isFavorite,
      });
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCFavotiteThunk = createAsyncThunk(
  'deleteFavotite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`favorite/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
