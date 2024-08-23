import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  deleteContactsThunk,
  editContactsThunk,
  editFavoriteThunk,
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
      .addCase(editContactsThunk.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
      })
      .addCase(editFavoriteThunk.fulfilled, (state, action) => {
        state.items = state.items.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        );
      })

      .addMatcher(
        isAnyOf(
          fetchContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled,
          editContactsThunk.fulfilled,
          editFavoriteThunk.fulfilled,
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected,
          editFavoriteThunk.rejected,
          editContactsThunk.rejected
        ),
        state => {
          state.loading = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected,
          editFavoriteThunk.rejected,
          editContactsThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      .addMatcher(
        isAnyOf(
          editContactsThunk.pending,
          fetchContactsThunk.pending,
          addContactsThunk.pending,
          editFavoriteThunk.pending,
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
