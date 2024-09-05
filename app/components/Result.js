// src/SearchResultBox.js
import React from 'react';
import './Result.css';
import img from  './../../images/profile.jpg'
import { useState } from 'react';
import Image from 'next/image';

const Search = () => {
  const [results, setResults] = useState([
    {
      name: 'John Doe',
      title: 'Software Engineer at Company A',
      photo: 'https://via.placeholder.com/50'
    },
    {
      name: 'Jane Smith',
      title: 'Product Manager at Company B',
      photo: 'https://via.placeholder.com/50'
    }
  ]);
  
  return (
    <div className="search-result-box">
      {results.length > 0 ? (
        results.map((person, index) => (
          <div key={index} className="result-item">
            <Image src={img} alt={person.name} className="profile-pic" />
            <div className="result-info">
              <h3 className="name">{person.name}</h3>
              <p className="title">{person.title}</p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-results">No results found</div>
      )}
    </div>
  );
};

export default Search;
