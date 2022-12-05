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
const ComingSoon = lazy(() => import("../../container/pages/Other/ComingSoon"));

const Help = lazy(() => import("../../container/pages/Other/support"));

const Project = lazy(() => import("../../container/pages/Project/Project"));

const ProjectDetail = lazy(() =>
  import("../../container/pages/Project/ProjectDetails")
);

export const userRoutes = [
  {
    path: pathName.DashBoard,
    component: ComingSoon,
    title: "DashboardBase",
  },
  {
    path: pathName.Help,
    component: Help,
    title: "Help",
  },
  {
    path: `${pathName.Project}/detail/:id`,
    component: ProjectDetail,
    title: "ProjectDetail",
  },
  {
    path: pathName.Project,
    component: Project,
    title: "Project",
  },

  {
    path: "*",
    component: (props) => {
      if (props.location.pathname === "/") {
        return <Redirect to={pathName.DashBoard} />;
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
