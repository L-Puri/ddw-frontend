import React, {useContext} from 'react'
import { AuthContext } from '../context/auth.context' 

function UserDetails() {
    
    const { user } = useContext(AuthContext)
    console.log("here is your user: ", user)
  
  return (
    <div>

        <p>welcome, {user?.username}</p>
    </div>
  )
}

export default UserDetails