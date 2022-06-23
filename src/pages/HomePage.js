import React from 'react'
import axios from 'axios';
// import { useForm } from '@mantine/form';
// import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function HomePage() {
  return (
    <div>
        <h1>HomePage</h1>
        <p>this should be displayed with the URL "/" !!!</p>

{/* new form */}
<h2>signup form</h2>
<form action="/signup" method="POST">
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Butz8er"
          required
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="seymour_butz@bookworms.com"
          required
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="********"
          required
        />
      </div>
      <button type="submit" class="form-btn">Become a Member</button>
    </form>




      
{/* input ends */}
        
    </div>
  )

  
}




export default HomePage