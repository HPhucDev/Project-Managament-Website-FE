import React from "react";
import { Redirect } from "react-router";
import * as pathName from "../constants/pathName";
import { Dashboard, Login } from "../pages";

const userRoutes = [
  // Dashboard
  {
    path: pathName.dashboard,
    component: Dashboard,
    title: "Tổng quan",
  },

  // Redirect
  {
    path: "*",
    component: (props) => {
      if (props.location.pathname === "/")
        return <Redirect to={`${pathName.dashboard}`} />;
      return <Redirect to="/page-not-found" />;
    },
  },
];

const authRoutes = [
  // Authentication
  {
    path: pathName.forgotPassword,
    component: "",
    title: "",
  },
  { path: pathName.login, component: Login, title: "Login" },

  { path: pathName.register, component: "", title: "Register" },

  // Other page
  { path: pathName.pageNotFound, component: "", title: "Not Found" },
];

export { authRoutes, userRoutes };
