import React, {useContext} from 'react'
import { AuthContext } from '../context/auth.context' 

function EntryList() {
    
    
  
  return (
    <div>

        <p>welcome, {user?.username}</p>
    </div>
  )
}

export default EntryList