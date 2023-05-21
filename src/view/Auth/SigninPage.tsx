import React from "react";
import "./Styles/styles.css";
function SigninPage() {
  return (
    <div className="app__singnin">
      <div className="singnin__login">
        <div className="singnin__left">
          <div className="left__top">
            <span className="cloud">登录到 Home Cloud</span>
            <span className="cloud__text">
              {" "}
              简单轻松，一步上云，立刻登录到 Home Cloud
            </span>
          </div>

          <div className="singnin__form">
            <div className="input__form">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input__form">
              <input type="text" placeholder="Password" />
            </div>
          </div>

          <div className="signin__buttons">
            <div className="singin__button">
              <span>立刻登录</span>
            </div>

            <div className="link__signup">
                
                <span>
                
                没有账户吗？
                
                </span>
                </div>
          </div>
        </div>

        <div className="singin__right">
          <img src="/auth/auth.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
