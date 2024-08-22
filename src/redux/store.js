import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { editingReducer } from './editSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    editing: editingReducer,
  },
});
