import React from 'react'
import { Form, Input} from 'react'

function TestFormCSS() {
  return (
    <div>
      <div className="login-wrapper">
        <Form action="" className="form">
          <img src="img/avatar.png" alt="" />
          <h2>Login</h2>
          <div className="input-group">
            <Input type="text" name="loginUser" id="loginUser" required />
            <label for="loginUser">Username</label>
          </div>
          <div className="input-group">
            <Input type="password" name="loginPassword" id="loginPassword" required />
            <label for="loginPassword">Password</label>
          </div>
          <Input type="submit" value="Login" className="submit-btn" />
          <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
        </Form>

        <div id="forgot-pw">
      <Form action="" className="form">
        <a href="#" className="close">&times;</a>
        <h2>Reset Password</h2>
        <div className="input-group">
          <Input type="email" name="email" id="email" required />
          <label for="email">Email</label>
        </div>
        <Input type="submit" value="Submit" className="submit-btn" />
      </Form>
    </div>
      </div>
    </div>
  )
}

export default TestFormCSS
