import React from "react";

import { Redirect, Route, useLocation } from "react-router-dom";
import Home from "../Home/Home";
function PrivateRoute(porps) {
  return (
    <Route
      render={(props) => {
        return <Home />;
      }}
    />
  );
}

export default PrivateRoute;
