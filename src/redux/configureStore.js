import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/Books';

const rootReducer = combineReducers({
  addRemove: booksReducer,
});
const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
