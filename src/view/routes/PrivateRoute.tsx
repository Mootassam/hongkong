import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import PermissionChecker from "@modules/auth/permissionChecker";

function PrivateRoute({ component: Component, currentTenant, currentUser, ...rest }) {
  const location = useLocation();
  const permissionChecker = new PermissionChecker(currentTenant, currentUser);

  if (!permissionChecker.isAuthenticated) {
    return (
      <Redirect
      
        to={{
          pathname: '/auth/signin',
          state: { from: location },
        }}
      />
      
    );
   

  
  }

  return <Route component={Component} {...rest} />;
}

export default PrivateRoute;
