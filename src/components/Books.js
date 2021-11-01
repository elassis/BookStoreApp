import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { key, title, author } = props;
  return (

    <li key={key}>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove Book</button>
    </li>

  );
};

Books.propTypes = {
  key: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
