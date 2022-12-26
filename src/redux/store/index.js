import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { criteriaSearchReducer, projectReducer } from "../slices";

const appReducer = combineReducers({
  projectStore: projectReducer,
  criteriaSearchStore: criteriaSearchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STATE") {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
