import axios from "axios";
import axiosClient from "./axiosClient";
import { SUBJECT } from "./baseURL";

export const ProjectService = {
  getAllProjectApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: SUBJECT,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  createProjectApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: SUBJECT,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteProjectApi: async (params) => {
    return axiosClient()({
      method: "DELETE",
      url: SUBJECT,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  getProjectByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${SUBJECT}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  updateProjectApi: async (params) => {
    return axiosClient()({
      method: "PATCH",
      url: `${SUBJECT}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  approveProjectByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${SUBJECT}/deny/${params.subjectId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  denyProjectByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${SUBJECT}/deny/${params.subjectId}`,
      params: {
        description: params.description,
      },
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  searchProjectApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${SUBJECT}/search`,
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
