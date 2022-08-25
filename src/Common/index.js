/* eslint-disable import/no-anonymous-default-export */
import { lazy } from "react";

// Authentiaction Tools
const LoginPage = lazy(() => import("./Auth/Login/LoginPage"));
const SignupPage = lazy(() => import("./Auth/Signup/Signup"));

export default {
  LoginPage,
  SignupPage
};
