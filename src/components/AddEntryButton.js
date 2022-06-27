import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function AddEntry() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-add-btn">
        <div className="div-add-btn">
            <div className="add-btn"></div>
                <button className="text-add-btn" src="/create-entry">
                  Add Entry
                </button>
        </div>
      </div>
    </div>
  )
}

export default AddEntry
