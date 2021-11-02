import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Books = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const removeThisBook = (argId, argTitle, argAuthor) => {
    const bookToRemove = {
      id: argId,
      title: argTitle,
      author: argAuthor,
    };
    dispatch(removeBook(bookToRemove));
  };
  return (

    <li id={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => { removeThisBook(id, title, author); }}>Remove Book</button>
    </li>

  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
