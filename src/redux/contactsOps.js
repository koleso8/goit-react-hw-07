import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66c6e638732bf1b79fa481c0.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('items');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContacts',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.post('items', card);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`items/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'editContact',
  async (card, thunkAPI) => {
    try {
      const { data } = axios.put(`items/${card.id}`, {
        ...card,
        card,
      });
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavotiteThunk = createAsyncThunk(
  'addFavorite',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.post('favotite', card);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
