// src/input.js
import React, { useState } from 'react';
import './Input.css';

const Input = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for people..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Input;
