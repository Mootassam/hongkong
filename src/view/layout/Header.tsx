import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../../modules/auth/authActions";

function Header() {
  const dispatch = useDispatch();
  const doSignout = () => {
    dispatch(authActions.doSignout());
  };
  return (
    <div className="app__header">
      <div className="style__header">
      <div></div>
      <div>
        <span onClick={doSignout}> logout</span>
      </div>
      </div>
    </div>
  );
}

export default Header;
