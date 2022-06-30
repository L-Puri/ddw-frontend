import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API_URL } from '../utils/constants'

 
function UpdateExpButton() {
    const navigate = useNavigate();
    
//   const {
//     token
//   } = useContext(AuthContext);

//     let params = useParams()
//     const searchId = params.Id
//     //console.log(searchId)
//     const navigate = useNavigate();

   const directToUpdate = event => {
   //let responseAxios = await axios.put(`${BASE_API_URL}/experiences/update-entry/${searchId}`, { headers: { Authorization: `Bearer ${token}`} })
    navigate("/update-entry");
   }

  return (
    <div>
      <div className="container-delete-btn">
        <div className="div-delete-btn">
          <div className="delete-btn"></div>
                <button className="text-delete-btn" to="/update-entry" onClick={directToUpdate}>
                  Edit
                </button>
          </div>
        </div>
      </div>
  )
}

export default UpdateExpButton
