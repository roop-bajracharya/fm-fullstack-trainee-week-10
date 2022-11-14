import { createSlice } from "@reduxjs/toolkit";
import { asyncGetData } from "./apiData.effect";

// API Data SLICE
const apiDataSlice = createSlice({
  name: "apiData",
  initialState: {
    loading: false,
    error: "",
    data: [],
  },
  reducers: {
    /**@TODO */
    resetApiData(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(asyncGetData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(asyncGetData.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload;
    });
  },
});

export const apiDataReducer = apiDataSlice.reducer;
