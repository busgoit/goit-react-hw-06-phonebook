import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
];

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');

const contactsReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    [...state].filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [setFilter]: (state, action) => (state = action.payload),
});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
