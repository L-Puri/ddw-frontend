import React, { useState, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";

const API_URL = "http://localhost:5005";
 
const AuthContext = createContext();
 
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [experiences, setExperiences] = useState([])

  const storeToken = (newToken) => {       
    localStorage.setItem('authToken', newToken);
    setToken(newToken)
  }

  const authenticateUser = () => {    
                   
    const storedToken = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setIsLoading(false);
      // Get the user
    } else if (storedToken) {
      axios.get(
        `${API_URL}/auth/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        const user = response.data;    
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);
        setToken(storedToken)   
      })
      .catch((error) => {
              
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }
  
  const removeToken = () => {                    
    localStorage.removeItem("authToken");
    setToken(null);
  }

  const logOutUser = () => {                 
    removeToken();   
    authenticateUser();
  }  


  const updateExperiences = () => {
    axios.get(`${API_URL}/auth/confirm-experiences`, { headers: { Authorization: `Bearer ${token}`}}
    )
    .then((response) => {
      //console.log("this users experiences from db:", response.data)
      setExperiences(response.data)
    })    
  } 

  useEffect(() => {                                                
    authenticateUser(); 
    //updateExperiences();
  }, []);

  useEffect(() => {     
    if (isLoggedIn)     {                                      
   updateExperiences();
  } 
  }, [isLoggedIn]);

  useEffect(() => {      
    if (token) {
      authenticateUser(); 
    }                                          
  }, [token]);

 
  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      isLoading, 
      user,
      storeToken,
      token,
      authenticateUser,
      logOutUser,
      experiences
      }}
      >
      {props.children}
    </AuthContext.Provider>
  )
}
 
export { AuthProviderWrapper, AuthContext }