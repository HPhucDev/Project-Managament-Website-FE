import axios from "axios";
import axiosClient from "./axiosClient";
import { LECTURER } from "./baseURL";
import qs from "qs";

export const LecturerService = {
  getAllLecturerApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: LECTURER,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  createLecturerApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: LECTURER,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },

  deleteLecturerApi: async (params) => {
    return axiosClient()({
      method: "DELETE",
      url: LECTURER,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  updateLecturerApi: async (params) => {
    return axiosClient()({
      method: "PATCH",
      url: `${LECTURER}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },

  getLecturerByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${LECTURER}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  searchLecturerApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${LECTURER}/search`,
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
