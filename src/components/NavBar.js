import React from 'react';
import DDWLogo from '../images/DDW-Logo.png'
import { useContext } from "react";                                 
import { AuthContext } from '../context/auth.context' 

function NavBar () {
    const {                 // new
        isLoggedIn, 
        user,  
        logOutUser 
    } = useContext(AuthContext); 

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
            <li><a href="/entry-details">Details</a></li>
            <li><a href="/random-goal">Random Goal</a></li>
            <li><a href="/" onClick={logOutUser}>Logout</a></li>
            <li><a href="/test-page">Test Page</a></li>
            <li><a href="/test-form">Test Form</a></li>
            <li><a href="/fgladfghl">Error Page</a></li>
        </ul>
    </div>
</nav>

    )
}

export default NavBar