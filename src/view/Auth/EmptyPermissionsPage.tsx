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
    <div className="app__empty">
      <div className="no__permission">

        You have no permissions yet. Wait for the admin to grant you privileges.
      </div>

      <button type="button" onClick={doSignout} className="signout">
        Signout
      </button>
    </div>
  );
}

export default EmptyPermissionsPage;
