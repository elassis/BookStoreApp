import React from 'react';
// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = () => {
    const argTitle = document.querySelector('#title');
    const argAuthor = document.querySelector('#author');

    const newBook = {
      id: uuidv4(), // make sure it's unique
      title: argTitle.value,
      author: argAuthor.value,
    };

    argTitle.value = '';
    argAuthor.value = '';

    dispatch(addBook(newBook));
  };
  return (
    <form>
      <input id="title" placeholder="Book Title" />
      <input id="author" placeholder="Book Author" />
      <button type="button" onClick={() => { submitBookToStore(); }}>Add Book</button>
    </form>
  );
};

export default Form;
