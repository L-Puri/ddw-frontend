import React, {useContext} from 'react'
import { AuthContext } from '../context/auth.context' 

function UserDetails() {
    
    const { user } = useContext(AuthContext)
    console.log("here is your user: ", user)
  
  return (
    <div>

        <h1 className="welcome-message">This is your Profile page, {user?.username}</h1>
    </div>
  )
}

export default UserDetails