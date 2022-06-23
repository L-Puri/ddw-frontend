import React from 'react'
import DdwLogo from '../images/DDW-Logo.png'
import axios from 'axios'
import {useState} from 'react'

function HomePage() {
  
  const [username, setUsername] =  useState(" ")
  const [email, setEmail] =  useState(" ")
  const [password, setPassword] =  useState(" ")  

  const handleSubmit = async event => {
    event.preventDefault()
    let newUser = {
      username,
      email,
      password
    }
    let responseAxios = await axios.post("http://localhost:5005/auth/signup", newUser)
    //createUser(values)
  }
  
  const handleChange = event => {
    console.log (event.target.name)
    if (event.target.name === "username") {
    setUsername(event.target.value)
  } else if (event.target.name === "email") {
    setEmail(event.target.value)
  } else {
    setPassword(event.target.value)
  }
  }
  
  
  return (
    <div>
        <h1>HomePage</h1>
        <p>this should be displayed with the URL "/" !!!</p>

{/* new form */}
{/* use conditional rendering: default: login form, a link should rerender to signup */}


<h2>signup form</h2>
<form onSubmit={(e) => {handleSubmit(e)}}>
      <div>
        <label htmlFor="username">Username</label>
        <input onChange = {handleChange}
          type="text"
          id="username"
          name="username"
          placeholder="Butz8er"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input onChange = {handleChange}
          type="text"
          id="email"
          name="email"
          placeholder="seymour_butz@bucketlist.com"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input onChange = {handleChange}
          type="password"
          id="password"
          name="password"
          placeholder="********"
          required
        />
      </div>
      <button type="submit">Become a Member</button>
    </form>




      
{/* input ends */}
        
    </div>
  )

  
}




export default HomePage