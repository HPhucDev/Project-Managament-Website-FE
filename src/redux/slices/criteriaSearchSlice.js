import { createSlice } from "@reduxjs/toolkit";

const handlePayloadToState = (payload, stateConvert) => {
  for (const prop in payload) {
    for (const props in stateConvert) {
      if (prop === props) stateConvert[props] = payload[prop];
    }
  }
};

export const initialState = {
  projectCriteria: {
    lectureId: null,
    major: "NULL",
    pageSize: 10,
    pageIndex: 0,
    order: "DESCENDING",
    searchKey: null,
    sort: "START_DATE",
    subjectStatus: "NULL",
  },
};

export const criteriaSearchSlice = createSlice({
  name: "criteria",
  initialState,
  reducers: {
    addProjectCriteria: (state, action) => {
      handlePayloadToState(action.payload, state.projectCriteria);
    },
  },
});

const { reducer, actions } = criteriaSearchSlice;

export const { addProjectCriteria } = actions;

export default reducer;
