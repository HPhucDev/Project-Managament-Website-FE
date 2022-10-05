import axios from "axios";
import {
  //   EMPLOYEES_FORGOT_PASS,
  REFRESH_TOKEN,
  SIGN_IN,
  SIGN_OUT,
} from "./baseURL";
import axiosClient from "./axiosClient";

export const refreshTokenApi = async (params) => {
  return axios({
    method: "POST",
    url: REFRESH_TOKEN,
    headers: {
      "Content-Type": "text/plain",
    },
    data: params.refreshToken,
  });
};

export const signInApi = async (params) => {
  return axios({
    method: "POST",
    url: SIGN_IN,
    data: params,
  });
};

export const signoutApi = async (params) => {
  return axiosClient()({
    method: "POST",
    url: SIGN_OUT,
    params: {
      pushToken: params.pushToken,
    },
  });
};

// export const forgotPassword = async (params) => {
//   return axios({
//     method: "GET",
//     url: EMPLOYEES_FORGOT_PASS,
//     params: params,
//   })
// };
