import React from 'react'
import BackgroundImage from '../images/homepage-bcg.jpg'
import SignupForm from '../components/SignupForm'
import GenButton from '../components/Button'
import LoginForm from '../components/LoginForm'


function TestPage() {
  return (
  <div className='container-background'>
    <h1 className='title-test'>Don't Die Without... TestPage</h1>
    {/* {<img className="bcg-homepage" src={BackgroundImage}} 
    alt="man on top of mountain" /> */}
    {/* <SignupForm /> */}
    {/* <GenButton /> */}
    <div className="container-form">
      <LoginForm />
    </div>
  </div>
  

  )
}

export default TestPage