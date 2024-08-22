import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { favoriteReducer } from './favoriteSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    favorite: favoriteReducer,
  },
});
