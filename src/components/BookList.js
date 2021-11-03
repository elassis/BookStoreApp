import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Books from './Books';
import { fetchData } from '../redux/books/Books';
import '../App.css';

const BookList = () => {
  let result = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // function to add the title inside the books
  function addTitle(arrBooks, arrTitles) {
    const result = [];
    arrBooks.forEach((element, i) => {
      const newObj = {
        item_id: arrTitles[i],
        title: element[0].title,
        category: element[0].category,
      };
      result.push(newObj);
    });
    return result;
  }
  const data = useSelector((state) => state.addRemove);
  if (data.length === undefined) {
    const arr = Object.values(data);
    const titles = Object.keys(data);
    result = addTitle(arr, titles);
  }
  return (
    <ul className="list-container">
      {
        result.map((book) => (
          <Books
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            category={book.category}
          />
        ))
        }
    </ul>
  );
};

export default BookList;
