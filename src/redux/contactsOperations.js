import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from 'services/contactsAPI';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await addContact(contact);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await deleteContact(id);
      console.log(data);
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
