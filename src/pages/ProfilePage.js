import React, {useContext} from 'react'
// import { Link } from "react-router-dom";
import EntryCard from '../components/EntryCard'
import UserDetails from "../components/UserDetails"
import ProfileDetailsButton from '../components/ProfileDetailsButton';
import LogoutButton from "../components/LogoutButton"
import DeleteButton from '../components/DeleteButton';
import UpdateProfileButton from '../components/UpdateProfileButton';
import AddEntry from '../components/AddEntryButton';
import FriendCard from '../components/FriendCard';

// testwise
import { AuthContext } from '../context/auth.context'


function ProfilePage(props) {
  //testwise
  const { experiences } = useContext(AuthContext)
  console.log("experiences: ", experiences)
  // end of test
  return (
    <div className="profile-page">
      <div className='user-details-div'>
        <p className="user-details-title">User Profile</p>
        
        <UserDetails />
        <div className='profile-btns'>
          {/* <ProfileDetailsButton /> 
          <UpdateProfileButton /> */}
          <LogoutButton />
          <DeleteButton />
        </div>
      </div>
        {/* render list of your "entries", which are saved in the database */}
        <div className='bucket-list-div'>
        <h2 className="bucket-list-title">Personal Bucket List</h2>
        <div className='add-entry-card-div'>
            <AddEntry />
          </div>
        <div className='bucket-list-card-div'>
          <EntryCard />
          
          
        </div>
      </div>
      {/* render list of friends, which is an array in the db */}
      <div className='list-friends-div'>
        <h2 className="friends-list-title">List of Friends</h2>
        <FriendCard />
      </div>    
    </div>
  )
}

export default ProfilePage




