import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66c6e638732bf1b79fa481c0.mockapi.io/';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
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
  'contacts/addContacts',
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
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`items/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContactsThunk = createAsyncThunk(
  'contacts/editContact',
  async (card, thunkAPI) => {
    try {
      await axios.put(`items/${card.id}`, card);
      return card;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editFavoriteThunk = createAsyncThunk(
  'contacts/editFavorite',
  async (card, thunkAPI) => {
    try {
      const { data } = await axios.put(`items/${card.id}`, {
        favorite: !card.favorite,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
