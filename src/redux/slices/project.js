import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const billSlice = createSlice({
  name: "bill",
  initialState: {
    subscriptionPlans: [],
    totalElements: 0,
  },
  reducers: {},
  extraReducers: {},
});

const { reducer, actions } = billSlice;

export const {} = actions;
export default reducer;
