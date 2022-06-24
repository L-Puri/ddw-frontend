import React from 'react'
import { Link } from "react-router-dom";


function ProfilePage() {
  return (
    <div>
      <div>
      <h1>Profile Page</h1>
      {/* <img src={url} alt=" " className=" " /> */}
      </div>
        

        <Link to="/ProfilePage"> About </Link>

        {/* render list of friends, which is an array in the db */}
        <div>
        <h2>List of Friends</h2>
        </div>
      
        {/* render list of your "entries", which are saved in the database */}
        <div>
        <h2>Personal BucketList</h2>
        <button>Add List</button>
          </div>
    </div>
  )
}

export default ProfilePage




