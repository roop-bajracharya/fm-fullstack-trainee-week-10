import { createSelector } from "@reduxjs/toolkit";
import { rootState } from "../todo.reducer";

export const selectApiData = createSelector(
  rootState,
  (state) => state.apiData
);
