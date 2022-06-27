import React, {useContext} from 'react'
import axios from 'axios'
import { AuthContext } from '../context/auth.context' 
const API_URL = "http://localhost:5005" 

function UserDetails() {
  
    const { user } = useContext(AuthContext)
    console.log("here is your user: ", user)
    
  return (
    <div>
        <p>welcome, </p>
    </div>
  )
}

export default UserDetails

