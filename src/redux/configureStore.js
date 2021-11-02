import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  addRemove: booksReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(logger),
);

export default store;
