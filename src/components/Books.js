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

    <li className="book" id={id}>
      <div className="book-col-1">
        <div className="col1-subcol-1">
          <p className="book-category">{category}</p>
          <p className="book-title">{title}</p>
        </div>
        <div className="col1-subcol-2">
          <button type="button" className="book-btnc1">comment</button>
          <button type="button" className="book-btnc1" onClick={() => { removeThisBook(id); }}>remove</button>
          <button type="button" className="book-btnc1">edit</button>
        </div>
      </div>
      <div className="book-col-2">
        <div className="oval" />
        <div className="progress-text">
          <p className="porcentage">100%</p>
          <p className="completed">completed</p>
        </div>
      </div>
      <div className="book-col-3">
        <p className="current-chapter">current chapter</p>
        <p className="current-lesson">chapter 17</p>
        <button type="button" className="update-progress">update progress</button>
      </div>
    </li>

  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Books;
