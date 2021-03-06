import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, updateState } from '../redux/books/Books';

const Form = () => {
  const dispatch = useDispatch();

  const submitBookToStore = async () => {
    const argTitle = document.querySelector('#title');
    const argCategory = document.querySelector('#category');

    const newBook = {
      itemId: uuidv4(), // make sure it's unique
      title: argTitle.value,
      category: argCategory.value,
    };
    argTitle.value = '';
    argCategory.value = '';

    const saveBook = (body) => {
      const { itemId, title, category } = body;
      const id = itemId; const argTitle = title; const
        argCategory = category;
      const response = fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/bEgERlj6Xe6fGI4VRgmi/books', {
        method: 'POST',
        body: JSON.stringify({
          item_id: id,
          title: argTitle,
          category: argCategory,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response);

      return response;
    };
    const result = await saveBook(newBook);
    if (result.status === 201) {
      updateState(dispatch, addBook);
    }
  };

  return (
    <div className="form-container">
      <p>add new book</p>
      <form>
        <input id="title" placeholder="Book Title" />
        <select id="category" placeholder="Book Category">
          <option>category</option>
          <option>action</option>
          <option>adventure</option>
          <option>fiction</option>
          <option>comedy</option>
        </select>
        <button type="button" className="addbook" onClick={() => { submitBookToStore(); }}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
