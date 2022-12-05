import axios from "axios";
import axiosClient from "./axiosClient";
import { LECTURER } from "./baseURL";
import qs from "qs";

export const CommentService = {
  getAllCommentApi: async () => {
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
  createCommentApi: async (data) => {
    return axiosClient()({
      method: "POST",
      url: LECTURER,
      data: data,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  updateCommentApi: async (params) => {
    return axiosClient()({
      method: "PATCH",
      url: `${LECTURER}/${params.id}`,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  getCommentByIDApi: async (params) => {
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
  deleteCommentApi: async (params) => {
    return axiosClient()({
      method: "DELETE",
      url: `${LECTURER}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  getCommentByProgressIDApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${LECTURER}/getByProgress/${params.progressId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  searchCommentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${LECTURER}/paging/`,
      params: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
};
