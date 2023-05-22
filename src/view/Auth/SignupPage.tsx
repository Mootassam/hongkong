import React from 'react'
import './Styles/styles.css'
function SignupPage() {
  return (
    <div className="app__singnin">
      <div className="singin__page">
        <div className="singin__header">
          <h1>Signup</h1>
          <span>Let’s build something greate</span>
        </div>

        <div className="singin__form">
          <div className="singin__group">
            <label htmlFor="">E-mail or phone number</label>
            <input
              type="text"
              placeholder="Enter your Email"
              className="singin__input"
            />
          </div>

          <div className="singin__group">
            <label htmlFor="">Password</label>
            <input
              type="text"
              placeholder="Enter your passowrd"
              className="singin__input"
            />
          </div>

          <div className="singin__button">
            <span>Login</span>
          </div>

          <div className="singin__donthaveaccount">
            <span>
              Don’t have an account? <label htmlFor="" className="signup__link"> Sign up</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage


