import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_API_URL } from '../utils/constants'

function UpdateExpButton() {
    const navigate = useNavigate();

const directToUpdate = event => {
    navigate("/update-entry");
   }

  return (
    <div>
      <div className="container-edit-btn">
        <div className="div-edit-btn">
          <div className="edit-btn"></div>
                <button className="text-edit-btn" to="/update-entry" onClick={directToUpdate}>
                  Edit
                </button>
          </div>
        </div>
      </div>
  )
}

export default UpdateExpButton