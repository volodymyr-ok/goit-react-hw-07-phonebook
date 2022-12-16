import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  // reducers: {
  //   addContact(state, action) {
  //     state.items.unshift(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     return state.items.filter(contact => contact.name !== action.payload);
  //   },
  // },
  extraReducers: {
    // [fetchContactsThunk.pending](state) {
    //   state.isLoading = true;
    // },
    [fetchContactsThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      // state.items.push(action.payload);
    },
    [addContactThunk.fulfilled](state, action) {
      state.items.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    },
    [deleteContactThunk.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(
        contact => contact.name !== action.payload
      );
    },
    // [fetchContactsThunk.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const contactsReducer = contactsSlice.reducer;
