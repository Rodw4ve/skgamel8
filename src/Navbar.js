import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img className="navbar-logo" src="#" alt="Logo" />
        <Link className="navbar-button" to="/">Home</Link>
        <Link className="navbar-button" to="/play">Play</Link>
        <Link className="navbar-button" to="/teams">Teams</Link>
        <Link className="navbar-button" to="/shop">Shop</Link> {/* Added link to the Shop page */}
      </div>
      <div className="navbar-title">SKGameL8</div>
      <div className="navbar-right">
        <a className="navbar-button" href="#">Create Party</a>
        <a className="navbar-button" href="#">Friends</a>
        <Link className="navbar-button" to="/support">Support</Link>
        <Link className="navbar-button" to="/profile">Profile</Link>
      </div>
    </div>
  );
}

export default Navbar;
