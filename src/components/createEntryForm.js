import React from 'react'

function createEntryForm() {
  return (
    <div>
        <form className ="form" onSubmit={(e) => {handleSubmit(e)}}>
      <div>
        <label htmlFor="title">Title</label>
        <input onChange = {handleChange}
          type="text"
          id="title"
          name="title"
          placeholder="Butz8er"
          required
        />
      </div>     

      <div>
        <label htmlFor="description">Description</label>
        <input onChange = {handleChange}
          type="text"
          id="description"
          name="description"
          placeholder="Butz8er"
          required
        />
      </div>     

      <div>
        <label htmlFor="picture">Picture</label>
        <input onChange = {handleChange}
          type="text"
          id="picture"
          name="picture"
          placeholder="Butz8er"
          required
        />
      </div>     
       
      <button type="submit">Update your personal info</button>
    </form>


    </div>
  )
}

export default createEntryForm


