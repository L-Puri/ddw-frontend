import React from 'react'
// import SignupForm from '../components/SignupForm'
// import GenButton from '../components/Button'
import LoginForm from '../components/LoginForm'


function TestPage() {
  return (
  <div className='container-background'>
    <div className='div-intro-texts'>
      <h1 className='title-test'>Don't Die Without...</h1>
      <h2 className='title-text'>Living the life you dreamt!</h2>
    </div>
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