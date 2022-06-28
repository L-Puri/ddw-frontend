import React, {useContext} from 'react'
import { AuthContext } from '../context/auth.context' 

function UserDetails() {
    
    const { user, experiences } = useContext(AuthContext)
     //new: enable update from child components (experiences):
    console.log("here is your experience: ", experiences)
  return (
    <div>
        <h1 className="welcome-message">This is your Profile page, {user?.username}</h1>
    </div>
  )
}

export default UserDetails