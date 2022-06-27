import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import DDWText from '../images/DDW-Text.png'

function CreateEntryForm() {
  const [title, setTitle] = useState(" ");
  const [description, setDescription] = useState(" ");
  const [picture, setPicture] = useState(" ");
  const {token} = useContext(AuthContext)

  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    let newExperience = {
      title,
      description,
      picture
    };
    console.log(newExperience)

    let responseAxios = await axios.post("http://localhost:5005/experiences/create-entry", newExperience, { headers: { Authorization: `Bearer ${token}`} })
    navigate("/profile");
    
  };
  

  const handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === "title") {
      setTitle(event.target.value);
      console.log(event.target.value)
    } else if (event.target.name === "description") {
      setDescription(event.target.value);
    } else {
      setPicture(event.target.value);
    }
  };

  return (
    /*WORKING FORM*/
    // <div className="create-entry-page">
    //   <form
    //     className="form"
    //     onSubmit={(e) => {
    //       handleSubmit(e);
    //     }}
    //   >
    //     <div>
    //       <label htmlFor="title">Title</label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         id="title"
    //         name="title"
    //         placeholder="Butz8er"
    //         required
    //       />
    //     </div>

    //     <div>
    //       <label htmlFor="description">Description</label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         id="description"
    //         name="description"
    //         placeholder="Butz8er"
    //         required
    //       />
    //     </div>

    //     <div>
    //       <label htmlFor="picture">Picture</label>
    //       <input
    //         onChange={handleChange}
    //         type="text"
    //         id="picture"
    //         name="picture"
    //         placeholder="Butz8er"
    //         required
    //       />
    //     </div>

    //     <button type="submit">Update your personal bucketlist</button>
    //   </form>
    // </div>

    <div className="create-entry-container">
      <div className="wrap-login100">
          <form className="login100-form validate-form" onSubmit={(e) => {
          handleSubmit(e);}}>
            <div className='logo-container'>
              <img className="logo-text" src={DDWText}
      alt="Don't Die Without logo" />
              <span className="login100-form-title p-b-26">
                Add New Experience
              </span>
              <span className="login100-form-title p-b-48">
                <i className="zmdi zmdi-font"></i>
              </span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="title"
            required/>
              <span className="focus-input100" data-placeholder="Title"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="description"
            required/>
              <span className="focus-input100" data-placeholder="Description"></span>
            </div>

            <div className="wrap-input100 validate-input">
              <input className="input100" onChange={handleChange}
            type="text"
            name="picture"
            required/>
              <span className="focus-input100" data-placeholder="Picture"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" type="submit">
                  Add Entry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div> 
  );
}
export default CreateEntryForm;
