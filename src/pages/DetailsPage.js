import React, {useContext} from 'react'
import DetailsCard from '../components/DetailsCard'
import { AuthContext } from '../context/auth.context'
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { experiences } = useContext(AuthContext)
  let params = useParams()
  console.log("id/url: ", params)


 
  // if (!experiences) {
  //   console.log ("no experiences found")
  //   // insert & return default carf
  // } else { 
  //   console.log ("experiences: ", experiences);
  //   // find specific object in array
  //   const specificExperience = experiences.find(experience, index) {
  //     if (experience._id = ); // specific ID found in url!
  //     return true
  //     // on success: specificExperience will countain the array with the specific exp
  //     // on failure: undefined
  //   }
  //   // isnert & return card with details!
  //}

  return (
   

    <div>
      <DetailsCard />
    </div>
  )
}

export default DetailsPage



// old code:

 // <div className='details-page-div'>
    //   <h1>DetailsPage</h1>
    //   <div className='details-page-photo'>
    //     <p>This will be automatically fed with the image of the experience</p>
    //   </div>
    //   <div className='details-page-info'>
    //     <p>Title</p>
    //     <p>Location</p>
    //     <p>Text</p>
    //     <p>Update / Delete</p>
    //   </div>
    // </div>