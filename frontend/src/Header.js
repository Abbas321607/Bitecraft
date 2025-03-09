import React from 'react';
import Navbar from './Components/ui/Navbar';

const Header = ({ names, inputChange, searchRecipe }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchRecipe();
    }
  };

  return (
    <>
      <Navbar />
      <div className="jumbotron">
        <h1 className="display-1">BITE CRAFT</h1>
        <div className="input-group w-50 mx-auto">
          <input
            type="text"
            className="form-control"
            placeholder="Search Recipe..."
            value={names}
            onChange={inputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="btn btn-dark" onClick={searchRecipe}>
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;