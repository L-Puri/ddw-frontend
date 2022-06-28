import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context'
import LoginForm from "../components/LoginForm";

const API_URL = "http://localhost:5005";

function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext) //new
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
      console.log('JWT token', response.data.authToken );
      storeToken(response.data.authToken);
      authenticateUser()
      navigate('/profile');                            
                
      })
      .catch((error) => {
        console.log(error)
        
        // const errorDescription = error.response.data.message;
        // setErrorMessage(errorDescription);
      })

    };
    
    return (
      <div className="login-page-div">
        {/* <h1 className="page-title">Login</h1>
   
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
        { errorMessage && <p className="error-message">{errorMessage}</p> } */}
      <div className="login-form-div">
        <LoginForm />
      </div>
      </div>
    )
}

export default LoginPage