import React from 'react'
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
        <h1>Profile Page</h1>
        <form action="/create-profile" method="GET">
          <button class="profile-btn" type="submit">Create Profile</button>
        </form>

        <form action="/update-profile/user._id" method="GET">
          <button class="profile-btn" type="submit">Update Profile</button>
        </form>

        <form action="/auth/user._id" method="POST">
          <button class="profile-btn" type="submit">Delete Profile</button>
        </form>

        <h2>FriendList</h2>
        {/* render list of friends, which is an array in the db */}
        <h2>BucketList</h2>
        {/* render list of your "entries", which are saved in the database */}
    </div>
  )
}

export default ProfilePage




