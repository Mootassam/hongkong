import React from "react";
import selectors from "@modules/auth/authSelectors";
import actions from "@modules/auth/authActions";
import { useDispatch, useSelector } from "react-redux";

function EmptyPermissionsPage() {
  const dispatch = useDispatch();

  const doSignout = () => {
    dispatch(actions.doSignout());
  };
  return (
    <div>
      EmptyPermissionsPage
      <button type="button" onClick={doSignout}>
        {" "}
        Signout
      </button>
    </div>
  );
}

export default EmptyPermissionsPage;
