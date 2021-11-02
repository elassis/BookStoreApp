import React from 'react';
import { useSelector } from 'react-redux';
import Books from './Books';

const BookList = () => {
  const mockBooks = Array.from(useSelector((state) => state.addRemove));
  console.log(mockBooks);
  return (
    <ul>
      {
      mockBooks.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))
    }
    </ul>
  );
};

export default BookList;
