import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts = [...state.contacts, action.payload];
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistedConfig = {
  key: `contacts`,
  storage,
  blacklist: [`filter`],
};

export const { addContact, removeContact, filterContact } =
  contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistedConfig,
  contactsSlice.reducer
);
