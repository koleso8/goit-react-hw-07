import { createSlice } from '@reduxjs/toolkit';

const initialState = { isEdit: false, current: null };

const slice = createSlice({
  name: 'editing',
  initialState,
  reducers: {
    onEdit: (state, actions) => {
      state.isEdit = true;
      state.current = actions.payload;
    },
    cancelEdit: state => {
      state.isEdit = false;
      state.current = null;
    },
  },
});

export const editingReducer = slice.reducer;

export const { onEdit, cancelEdit } = slice.actions;
