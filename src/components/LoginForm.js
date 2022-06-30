import React, { useState, useContext } from "react";
import DDWText from '../images/DDW-Text.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth.context'
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function LoginForm() {

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

  axios.post(`${API_URL}/auth/login`, requestBody)
    .then((response) => {
    //console.log('JWT token', response.data.authToken );
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
    <div className="signup-container">
      <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={handleLoginSubmit}>
            <div className='logo-container'>
              <img className="logo-text" src={DDWText}
      alt="Don't Die Without logo" />
              <span className="login100-form-title p-b-26">
                Login
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
              <input className="input100" type="email"
            name="email"
            value={email}
            onChange={handleEmail}/>
              <span className="focus-input100" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Enter password">
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input className="input100" type="password"
            name="password"
            value={password}
            onChange={handlePassword}/>
              <span className="focus-input100" data-placeholder="Password"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" type="submit">
                  Login
                </button>
              </div>
            </div>

            <div className="text-center p-t-115">
              <span className="txt1">
                 You're not a member?
              </span>
                <Link className="txt2" to="/signup"> Sign up </Link>   
            </div>
          </form>
          { errorMessage && <p className="error-message">{errorMessage}</p> }
        </div>
      </div>
  )
}

export default LoginForm


/*
  <div className="text-center p-t-115">
              <span className="txt1">
                 You're not a member?
              </span>

              <a className="txt2" href="/signup">
                Sign Up
              </a>
            </div>





*/