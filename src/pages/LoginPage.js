import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context'
import LoginForm from "../components/LoginForm";
import { BASE_API_URL } from '../utils/constants'

// const API_URL = "http://localhost:5005";

function LoginPage(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    
    const navigate = useNavigate();

    const { storeToken } = useContext(AuthContext) //new
   
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
   
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const requestBody = { email, password };

    axios.post(`${BASE_API_URL}/auth/login`, requestBody) 
      .then((response) => {
      console.log('JWT token', response.data.authToken );
      storeToken(response.data.authToken);
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
        <div className="login-form-div">
          <LoginForm />
        </div>
      </div>
    )
}

export default LoginPage