import React from "react";
import { Route } from "react-router-dom";
import SecureLayout from "../layouts/SecureLayout";
import BasicLayout from "../layouts/BasicLayout";

const DasboardRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <SecureLayout key={props.match.path}>
          <BasicLayout>
            <Component {...props} />
          </BasicLayout>
        </SecureLayout>
      )}
    />
  );
};

export default DasboardRoutes;
