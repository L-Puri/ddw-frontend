import React, {useContext} from 'react'
import DetailsCard from '../components/DetailsCard'
import { AuthContext } from '../context/auth.context'
import { useParams } from 'react-router-dom';

function DetailsPage() {
  const { experiences } = useContext(AuthContext)
  let params = useParams()
  console.log("id/url: ", params)

  const searchId = params.Id
  console.log(params.Id)
  console.log("experiences: ", experiences)


if (!experiences) return <DetailsCard /> 
else {
  const searchObject = experiences.filter((specificExperience) => specificExperience._id == params.Id)
  console.log("searchObject:", searchObject)
  return (
    <div className='details-card-page-div'>
    <div className='details-card-div'>
        <div className='details-card-title-div'>
            <h1>{searchObject[0]?.title}</h1>
        </div>
        <div className='details-card-photo-div'>
            <img className='details-card-photo' src={searchObject[0]?.picture} />
        </div>
        <div className='details-card-info-div'>
            {/* <p className='details-card-info-location'>South Africa</p> */}
            <p className='details-card-info-description'>{searchObject[0]?.description}</p>
        </div>
        <div className='details-card-btns-div'>
            <button className="update-experience-btn" to="/" >
              Edit
            </button>
            <button className="delete-experience-btn" to="/" >
              Delete
            </button>
        </div>
        
    </div>
  
</div>
    )
}






}
export default DetailsPage



/*  WORKING
  if (experiences) {
    const searchObject = experiences.filter((specificExperience) => specificExperience._id == params.Id)
    console.log("searchObject:", searchObject)
  return  (
    <div className='details-card-page-div'>
    <div className='details-card-div'>
        <div className='details-card-title-div'>
            <h1>{searchObject[0]?.title}</h1>
        </div>
        <div className='details-card-photo-div'>
            <img className='details-card-photo' src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3300&q=80"/>
        </div>
        <div className='details-card-info-div'>
            <p className='details-card-info-location'>South Africa</p>
            <p className='details-card-info-description'>{searchObject[0]?.description}</p>
        </div>
        <div className='details-card-btns-div'>
            <button className="update-experience-btn" to="/" >
              Edit
            </button>
            <button className="delete-experience-btn" to="/" >
              Delete
            </button>
        </div>
        
    </div>
  
</div>
  )

}
*/