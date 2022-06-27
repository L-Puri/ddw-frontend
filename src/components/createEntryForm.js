import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

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
    <div>
      <form
        className="form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            placeholder="Butz8er"
            required
          />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            id="description"
            name="description"
            placeholder="Butz8er"
            required
          />
        </div>

        <div>
          <label htmlFor="picture">Picture</label>
          <input
            onChange={handleChange}
            type="text"
            id="picture"
            name="picture"
            placeholder="Butz8er"
            required
          />
        </div>

        <button type="submit">Update your personal bucketlist</button>
      </form>
    </div>
  );
}
export default CreateEntryForm;
