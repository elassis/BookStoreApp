import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, updateState } from '../redux/books/Books';

const Books = (props) => {
  const {
    id, title, category,
  } = props;
  const dispatch = useDispatch();
  const removeThisBook = async (argId) => {
    const resp = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bEgERlj6Xe6fGI4VRgmi/books/${argId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response);
    if (resp.status === 201) {
      updateState(dispatch, removeBook);
    }
  };

  return (

    <li id={id}>
      <p>{title}</p>
      <p>{category}</p>
      <button type="button" onClick={() => { removeThisBook(id); }}>Remove Book</button>
    </li>

  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
