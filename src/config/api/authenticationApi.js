import axios from "axios";
import axiosClient from "./axiosClient";
import { REFRESH_TOKEN, REGISTER, SIGN_IN, SIGN_OUT } from "./baseURL";

export const authenticationService = {
  refreshTokenApi: async (params) => {
    return axios({
      method: "POST",
      url: REFRESH_TOKEN,
      headers: {
        "Content-Type": "text/plain",
      },
      data: params.refreshToken,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  signInApi: async (params) => {
    return axios({
      method: "POST",
      url: SIGN_IN,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  signOutApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: SIGN_OUT,
      params: {
        pushToken: params.pushToken,
      },
    });
  },
  registerApi: async (params) => {
    return axios({
      method: "POST",
      url: REGISTER,
      data: params,
    });
  },
};

// export const forgotPassword = async (params) => {
//   return axios({
//     method: "GET",
//     url: EMPLOYEES_FORGOT_PASS,
//     params: params,
//   })
//     .then((res) => {
//       hideMessageError(REST_TYPE.FORGOT_PASSWORD.FORGOT_PASSWORD);
//       return res;
//     })
//     .catch((error) => {
//       handleError(
//         `Lỗi khi đổi mật khẩu.`,
//         typeApi.forgotPassword,
//         error,
//         REST_TYPE.FORGOT_PASSWORD.FORGOT_PASSWORD
//       );
//       throw error;
//     });
// };

// export const recoverPassword = async (params) => {
//   return axios({
//     method: "PATCH",
//     url: EMPLOYEES_RECOVER_PASS,
//     params: params,
//     paramsSerializer: (params) =>
//       qs.stringify(params, { arrayFormat: "repeat" }),
//   })
//     .then((res) => {
//       hideMessageError(REST_TYPE.FORGOT_PASSWORD.RECOVER_PASSWORD);
//       return res;
//     })
//     .catch((error) => {
//       handleError(
//         `Lỗi khi đổi mật khẩu.`,
//         typeApi.forgotPassword,
//         error,
//         REST_TYPE.FORGOT_PASSWORD.RECOVER_PASSWORD
//       );
//       throw error;
//     });
// };
