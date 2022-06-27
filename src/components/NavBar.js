import React from "react";
import DDWLogo from "../images/DDW-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {Link} from 'react-router-dom'

function NavBar() {
  const {
    // new
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <Link to="/">
          <img src={DDWLogo} alt="DDW Logo" height="35" loading="lazy" />
        </Link>
        <p id="brand-name">Don't Die Without...</p>
      </div>
      <Link to="http://localhost:3000/login" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <div class="navbar-links">
        <ul>
          <li>
            <Link to="/">Signup </Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/profile">My Bucket</Link>
          </li>
          <li>
            <Link to="/entry-details">Details</Link>
          </li>
          <li>
            <Link to="/random-goal">Random Goal</Link>
          </li>
          <li>
            <Link to="/create-entry">Create Entry</Link>
          </li>
          <li>
            <Link to="/" onClick={logOutUser}>
              Logout
            </Link>
          </li>
          <li>
            <Link to="/test-page">Test Page</Link>
          </li>
          <li>
            <Link to="/test-form">Test Form</Link>
          </li>
          <li>
            <Link to="/fgladfghl">Error Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
