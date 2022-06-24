import React from 'react';
import DDWLogo from '../images/DDW-Logo.png'
import { useContext } from "react";                                 // new 
//import { AuthContext } from "./components/context/auth.context";  // new


function NavBar () {
    //const { isLoggedIn, user } = useContext(AuthContext); // new
    return (
        
        // inside this navbar, we need to decide which links are displaying while being logged in/out
        // {isLoggedIn && (links)} most pages
        // {!isLoggedIn && (links)} sign up / login?
<nav class="navbar">
    <div class="brand-logo">
    <a href="/">
        <img
        src={DDWLogo}
        alt="DDW Logo"
        height="35"
        loading="lazy"
        />
    </a>
    <p id="brand-name">Don't Die Without...</p>
    </div>
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
    <div class="navbar-links">
        <ul>
            <li><a href="/">Signup</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/profile">My Bucket</a></li>
            <li><a href="/random-goal">Random Goal</a></li>
            <li><a href="/">Logout</a></li>
            <li><a href="/test-page">Test Page</a></li>
            <li><a href="/fgladfghl">Error Page</a></li>
        </ul>
        {/* <button id="open-menu-btn"><i class="uil uil-bars"></i></button>
        <button id="close-menu-btn"><i class="uil uil-multiply"></i></button> */}
    </div>
</nav>

    )
}

export default NavBar