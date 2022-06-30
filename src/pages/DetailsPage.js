import React, {useContext} from 'react'
import DetailsCard from '../components/DetailsCard'
import { AuthContext } from '../context/auth.context'
import { useParams, useNavigate } from 'react-router-dom';
import {TextInput} from "react-native"
import { useForm } from "react-hook-form"
import DeleteExpButton from "../components/DeleteExpButton"



function DetailsPage() {
  const { experiences } = useContext(AuthContext)
  let params = useParams()
  const navigate = useNavigate();
  //console.log("id/url: ", params)

  const searchId = params.Id
  //console.log(params.Id)
  //console.log("experiences: ", experiences)

//                Code for creating comments
const form = useForm({
  initialValues: {
    comment: " ",
  },
});

const createComment = async newComment => {
  try {
    const response = await newComment(`${params.Id}/comment`,
    JSON.stringify(newComment))
    console.log("createComment: ", response)

  } catch (error) {
    console.log("creating a comment failed", (error))
  }
}


const handleSubmit = values => {
  console.log(values)
  createComment(values)
  values.comment = " "
  navigate(`/details/${searchId}`)
}
/// until here


if (!experiences) return <DetailsCard /> 
else {
  const searchObject = experiences.filter((specificExperience) => specificExperience._id == params.Id)
  //console.log("searchObject:", searchObject)
  return (
    <div className='details-card-page-div'>
    <div className='details-card-div'>
        <div className='details-card-title-div'>
            <h1>{searchObject[0]?.title}</h1>
        </div>
        <div className='details-card-photo-div'>
            <img className='details-card-photo' src={searchObject[0]?.picture} alt='default'/>
        </div>
        <div className='details-card-info-div'>
            <p className='details-card-info-description'>{searchObject[0]?.description}</p>
        </div>     
        <div className='details-card-comments-div'>
                <p className='details-card-text-comment'>Leave your comment here:</p>

                {/* NEW: Create & posr comment here: */}
                <form  onSubmit={(e) => {handleSubmit(e)}}>
                  <input value =" " label="comment" placeholder="click here and leave comment" type="textarea "required />
                  <button type="submit">Submit</button>
                </form>
              {/*  end of comment section, inside of className='details-card-comments-div'!*/}

            </div> 
        <div className='details-card-btns-div'>
            <button className="update-experience-btn">
              Edit
            </button>
            <DeleteExpButton/>
        </div>
        
    </div>
  
</div>
    )
}
}
export default DetailsPage

/* taken from line 77 to 83
<button className="delete-experience-btn" type="submit" to="/profile">
              Delete 
              
            </button>


*/