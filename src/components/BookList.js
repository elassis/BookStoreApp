import React from 'react';
import Books from './Books';

const BookList = () => {
  const mockBooks = [
    {
      id: '0',
      title: 'Book-1',
      author: 'author-1',
    },
    {
      id: '1',
      title: 'Book-2',
      author: 'author-2',
    },
  ];
  return (
    <ul>
      {
      mockBooks.map((book) => (
        <Books
          key={book.id}
          title={book.title}
          author={book.author}
        />
      ))
    }
    </ul>
  );
};

export default BookList;
