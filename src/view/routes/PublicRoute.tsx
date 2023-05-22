import React from "react";
import SigninPage from "../Auth/SigninPage";
import { Route } from "react-router-dom";
function PublicRoute(props) {
  return (
    <Route
      render={(props) => {
        return <SigninPage />;
      }}
    />
  );
}

export default PublicRoute;
