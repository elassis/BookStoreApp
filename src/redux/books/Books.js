const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_DATA = 'bookStore/books/FETCH_DATA';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';

const initialState = [];

// thunk functions
export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bEgERlj6Xe6fGI4VRgmi/books', {
    method: 'GET',
  }).then((response) => response.json());
  dispatch({
    type: FETCH_DATA,
    payload: response,
  });
};

export const updateState = async (dispatch, addBook) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bEgERlj6Xe6fGI4VRgmi/books', {
    method: 'GET',
  }).then((response) => response.json());
  dispatch(addBook(response));
};

// actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case ADD_BOOK:
      return action.payload;
    case REMOVE_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
