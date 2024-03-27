import React from 'react';
import './form.css';

const Form = (darkTheme) => {
  return (
    <div
      className={`search-form-container ${
        darkTheme ? 'dark-box-shadow' : 'light-box-shadow'
      }`}
    >
      <input placeholder="Search-box" type="text" className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Form;
