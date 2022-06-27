import React from 'react'
import CreateEntryForm from "../components/CreateEntryForm"

function CreateEntryPage() {
  return (
    <div className="create-entry-page-div">
        <h1 className='create-entry-page-title'>Create an entry for your bucket list</h1>
        <div className='create-entry-form-div'>
          <CreateEntryForm />
        </div>
    </div>
  )
}

export default CreateEntryPage