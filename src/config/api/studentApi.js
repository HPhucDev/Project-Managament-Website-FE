import axios from "axios";
import axiosClient from "./axiosClient";
import { STUDENT } from "./baseURL";
import qs from "qs";

export const StudentService = {
  getAllStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: STUDENT,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  createStudentApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: STUDENT,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },

  getStudentByIDApi: async (params) => {
    return axiosClient()({
      method: "POST",
      url: `${STUDENT}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteStudentApi: async (params) => {
    return axiosClient()({
      method: "DELETE",
      url: STUDENT,
      data: params,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  updateStudentApi: async (params) => {
    return axiosClient()({
      method: "PATCH",
      url: `${STUDENT}/${params.id}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  addGroupLeaderStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${STUDENT}/addGroupLeader/${params.subjectId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  addGroupMemberStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${STUDENT}/addGroupMember/${params.subjectId}`,
      params: {
        listMember: params.listMember,
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
  deleteGroupLeaderStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${STUDENT}/addGroupLeader/${params.subjectId}`,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  deleteGroupMemberStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${STUDENT}/addGroupMember/${params.subjectId}`,
      params: {
        listMember: params.listMember,
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
  getAllInformationStudentInSubjectApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: STUDENT,
    })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      });
  },
  searchStudentApi: async (params) => {
    return axiosClient()({
      method: "GET",
      url: `${STUDENT}/search`,
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
