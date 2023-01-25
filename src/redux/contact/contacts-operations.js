import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;

    try {
      const { data } = await axios(
        'https://connections-api.herokuapp.com/contacts',
        {
          headers: { Authorization: token },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        contact
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${id}`
      );
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
