import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";
import routes from "../routes";
import CustomLoadable from "../../view/shared/CustomLoadable";

function RoutesComponent() {
  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoutes
          exact
          key={route.path}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          exact
          key={route.path}
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}

      {routes.simpleRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={CustomLoadable({
            loader: route.loader,
          })}
        />
      ))}
    </Switch>
  );
}

export default RoutesComponent;
