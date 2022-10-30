import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import * as pathName from '../../constants/pathName';

const Login = lazy(() => import('../../container/profile/authentication/overview/SignIn'));
const SignUp = lazy(() => import('../../container/profile/authentication/overview/Signup'));
const ForgotPass = lazy(() => import('../../container/profile/authentication/overview/ForgotPassword'));
const NotFound = lazy(() => import('../../container/pages/404'));

const Performance = lazy(() => import('../../container/dashboard/Performance'));
const LecturerList = lazy(() => import('../../container/Lecturer/LecturerList'));
const StudentList = lazy(() => import('../../container/pages/StudentList'));
const Project = lazy(() => import('../../container/project/Project'));
const ProjectDetails = lazy(() => import('../../container/project/ProjectDetails'));

export const userRoutes = [
  {
    path: pathName.Dashboard,
    component: Performance,
    title: 'Dashboard',
  },
  {
    path: `${pathName.Student}`,
    component: StudentList,
    title: 'Student',
  },
  {
    path: `${pathName.Lecturer}`,
    component: LecturerList,
    title: 'Lecturer',
  },
  {
    path: pathName.Project,
    component: Project,
    title: 'Project',
  },
  {
    path: `${pathName.Project}/:id`,
    component: ProjectDetails,
    title: 'ProjectDetails',
  },
  {
    path: '*',
    component: props => {
      if (props.location.pathname === '/') {
        return <Redirect to="/dashboard" />;
      }
      return <Redirect to="/page-not-found" />;
    },
  },
];

export const authRoutes = [
  {
    path: pathName.Login,
    component: Login,
    title: 'Login',
  },
  {
    path: pathName.Register,
    component: SignUp,
    title: 'SignUp',
  },
  {
    path: pathName.ForgotPassword,
    component: ForgotPass,
    title: 'ForgotPass',
  },
  {
    path: pathName.PageNotFound,
    component: NotFound,
    title: 'Not Found',
  },
];
