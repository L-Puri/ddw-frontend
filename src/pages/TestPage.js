import React from 'react'
import BackgroundImage from '../images/homepage-bcg.jpg'
import SignupForm from '../components/SignupForm'


function TestPage() {
  return (
  <div className='container'>
    <h1 className='title-test'>Don't Die Without... TestPage</h1>
    <img className="bcg-homepage" src={BackgroundImage}
    alt="man on top of mountain" />
    <SignupForm />
  </div>
  

  )
}

export default TestPage