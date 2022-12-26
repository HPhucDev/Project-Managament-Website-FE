import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { ProjectService } from "../../config/api/projectApi";

export const searchProjects = createAsyncThunk(
  "project/searchProjects",
  async (params, { dispatch }) => {
    try {
      const response = await ProjectService.searchProjectApi(params);
      dispatch(setProjects(response.data));
    } catch (error) {
      toast.error("Lỗi khi tải dữ liệu đề tài !");
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = projectSlice;

export const { setProjects } = actions;
export default reducer;
