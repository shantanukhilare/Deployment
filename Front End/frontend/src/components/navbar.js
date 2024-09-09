import React from 'react';
import './Navbar.css';
import logo from '../amazon-logo.png'; // Adjust the path to the logo as necessary

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Amazon Logo" className="navbar__logo" />
      </div>
      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <button className="navbar__searchButton">🔍</button>
      </div>
      <div className="navbar__right">
        <div className="navbar__option">
          <span className="navbar__optionLineOne">Hello, Sign in</span>
          <span className="navbar__optionLineTwo">Account & Lists</span>
        </div>
        <div className="navbar__option">
          <span className="navbar__optionLineOne">Returns</span>
          <span className="navbar__optionLineTwo">& Orders</span>
        </div>
        <div className="navbar__option">
          <span className="navbar__optionLineOne">Your</span>
          <span className="navbar__optionLineTwo">Prime</span>
        </div>
        <div className="navbar__optionCart">
          🛒
          <span className="navbar__optionLineTwo navbar__cartCount">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
