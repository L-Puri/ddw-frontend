import React, { useState } from "react";
import DDWLogo from "../images/DDW-Logo.png";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {Link} from 'react-router-dom'



function NavBar() {
   const [click, setClick] = useState(false);

   const handleClick = () => setClick(!click);
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
      {/* <Link to="http://localhost:3000/login" className="toggle-button"> */}
        {/* <span className="bar"></span> */}
        {/* <span className="bar"></span> */}
        {/* <span className="bar"></span> */}
      {/* </Link> */}
      <div class="navbar-links">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/signup" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Signup </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>My Bucket</Link>
          </li>
          <li className="nav-item">
            <Link to="/entry-details" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Details</Link>
          </li>
          <li className="nav-item">
            <Link to="/random-goal" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Random Goal</Link>
          </li>
          <li className="nav-item">
            <Link to="/create-entry" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Create Entry</Link>
          </li>
          <li className="nav-item">
            <Link to="/" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>
              Logout
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/fgladfghl" activeClassName="active"
                className="nav-links"
                onClick={handleClick}>Error Page</Link>
          </li>
        </ul>

      </div>
      <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div> 
        
    </nav>

  );
}

export default NavBar;

























