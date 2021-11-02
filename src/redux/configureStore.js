import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/Books';

const store = createStore(
  booksReducer,
  applyMiddleware(logger),
);

export default store;
