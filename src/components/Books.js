import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { id, title, author } = props;
  return (

    <li id={id}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove Book</button>
    </li>

  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
