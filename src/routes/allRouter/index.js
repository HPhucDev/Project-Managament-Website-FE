import React, { lazy } from "react";
import { Redirect } from "react-router-dom";
import * as pathName from "../../constants/pathName";

const Login = lazy(() =>
  import("../../container/profile/authentication/overview/SignIn")
);
const SignUp = lazy(() =>
  import("../../container/profile/authentication/overview/Signup")
);
const ForgotPass = lazy(() =>
  import("../../container/profile/authentication/overview/ForgotPassword")
);
const NotFound = lazy(() => import("../../container/pages/Other/404"));

const Notification = lazy(() => import("../../container/pages/Notification"));

export const userRoutes = [
  {
    path: pathName.Notification,
    component: Notification,
    title: "Notification",
  },

  {
    path: "*",
    component: (props) => {
      if (props.location.pathname === "/") {
        return <Redirect to={pathName.Notification} />;
      }
      return <Redirect to={pathName.PageNotFound} />;
    },
  },
];

export const authRoutes = [
  {
    path: pathName.Login,
    component: Login,
    title: "Login",
  },
  {
    path: pathName.Register,
    component: SignUp,
    title: "SignUp",
  },
  
  {
    path: pathName.ForgotPassword,
    component: ForgotPass,
    title: "ForgotPass",
  },
];
