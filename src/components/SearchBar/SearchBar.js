import React from 'react';
import './SearchBar.css'

const Searchbar = () => {
  return (
    <>
      <div className="container">
        <input type="text" placeholder="Search..." />
        <div className="search" />
      </div>
    </>
  );
};

export default Searchbar;