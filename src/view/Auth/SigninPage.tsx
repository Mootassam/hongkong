import React from "react";
import "./Styles/styles.css";
import { useDispatch, useSelector } from "react-redux";


function SigninPage() {
  const dispatch = useDispatch();

  return (
    <div className="app__singnin">
      <div className="singin__page">
        <div className="singin__header">
          <h1>Sign In</h1>
          <span>Let’s build something greate</span>
        </div>
        <form  >
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
                Don’t have an account?{" "}
                <label htmlFor="" className="signup__link">
                  {" "}
                  Sign up
                </label>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SigninPage;
