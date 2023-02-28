import { combineReducers } from 'redux';
import { persistedContactsReducer } from './contactsReducer/contactsReducer';

export const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
});
