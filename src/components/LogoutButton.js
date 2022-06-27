import React from 'react'
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";

function LogoutButton() {

  const {
    isLoggedIn,
    user,
    logOutUser,
  } = useContext(AuthContext);

  return (
    <div>
      <div className="container-gen-btn">
        <div className="div-gen-btn">
            <div className="gen-btn"></div>
                <button className="text-gen-btn" to="/" onClick={logOutUser}>
                  Logout
                </button>
        </div>
      </div>
    </div>
  )
}

export default LogoutButton
