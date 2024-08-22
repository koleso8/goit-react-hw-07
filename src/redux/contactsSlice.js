import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  fetchContactsThunk,
} from './contactsOps';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    chengeContact: (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        state => {
          state.error = null;
          state.loading = true;
        }
      );
  },
});

export const contactsReducer = slice.reducer;

export const {
  addContact,
  deleteContact,
  chengeContact,
  onEdit,
  cancelEdit,
  changeFilter,
} = slice.actions;
