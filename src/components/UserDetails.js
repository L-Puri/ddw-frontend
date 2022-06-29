import React, {useContext, useEffect} from 'react'
import { AuthContext } from '../context/auth.context' 

function UserDetails() {
   
    const { user } = useContext(AuthContext)
    //console.log("experiences:", experiences)

  
  
  return (
    <div>
        <h1 className="welcome-message">This is your Profile page, {user?.username}</h1>       
    </div>
  )
}

export default UserDetails