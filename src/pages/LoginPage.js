import { useState } from "react";
import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5005";


function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };
        //console.log(requestBody) 
        axios.post(`${API_URL}/auth/login`, requestBody)
        // this does not   
        .then((response) => {
          console.log(response)
          console.log('JWT token', response.data.authToken );
        navigate('/');                            
                
      })
      .catch((error) => {
        console.log(error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })

    };
    
    return (
      <div className="Login">
        <h1 className="page-title">Login</h1>
   
        <form onSubmit={handleLoginSubmit}>
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />
   
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
   
          <button type="submit">Login</button>
        </form>
        { errorMessage && <p className="error-message">{errorMessage}</p> }
   
        {/* we should enable users to "switch between login and signup component" */}
        {/* for the beginning, I gues first showing signup and then login is fine */}
      </div>
    )
}

export default LoginPage
