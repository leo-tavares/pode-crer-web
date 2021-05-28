import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../hooks/auth";

const PrivateRoute = ({ component: Component, isPrivate = true, ...rest }) => {
  const user = localStorage.getItem("@podecrer:user");
  console.log(user);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isPrivate && user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
