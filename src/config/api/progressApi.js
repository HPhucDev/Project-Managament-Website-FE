import axiosClient from "./axiosClient";
import { PROGRESS } from "./baseURL";
import qs from "qs";

export const ProgressService = {
  getAllProgressApi: async () => {
    return axiosClient()({
      method: "GET",
      url: PROGRESS,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  createProgressApi: async (data) => {
    return axiosClient()({
      method: "POST",
      url: PROGRESS,
      data: data,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteProgressApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${PROGRESS}/progress/`,
      params: {
        listProgressId: params.listProgressId,
      },
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  getProgressByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${PROGRESS}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  updateProgressApi: async (params) => {
    return axiosClient()({
      method: "PUT",
      url: `${PROGRESS}/${params.id}`,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
};
