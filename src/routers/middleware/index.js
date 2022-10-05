import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { checkExpToken } from "../../utils/tokenUtils";

const checkRememberLogin = () => {
  return (
    localStorage.getItem("expiry-remember-me-crm") &&
    new Date().getTime() < localStorage.getItem("expiry-remember-me-crm")
  );
};

const Authmiddleware = ({
  path,
  component: Component,
  layout: Layout,
  title: Title,
}) => {
  return (
    <Route
      path={path}
      render={(props) => {
        if (
          !checkRememberLogin() ||
          !checkExpToken(localStorage.getItem("refreshToken-crm"))
        ) {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        }
        // if (!checkRoleRoute(keyRoute)) {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/page-not-found",
        //         state: { from: props.location },
        //       }}
        //     />
        //   );
        // }
        return (
          <Layout title={Title}>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
};

export default withRouter(Authmiddleware);
