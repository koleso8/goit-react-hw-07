import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { editingReducer } from './editSlice';
import { favoriteReducer } from './favoriteSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whiteList: ['contacts', 'favorite'],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);
const persistedReducerFav = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filters: filtersReducer,
    editing: editingReducer,
    favorite: persistedReducerFav,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
