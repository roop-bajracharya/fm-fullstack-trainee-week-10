import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getApiData = async () => {
  return await axios.get("https://pokeapi.co/api/v2/pokemon", {
    params: { limit: 10 },
  });
};

export const asyncGetData = createAsyncThunk(
  "apiData/asyncData",
  async (_, { rejectWithValue }) => {
    const data = await getApiData();
    console.log("data", data);
    if (data.data.results) {
      return data.data.results;
    } else {
      return rejectWithValue("Could not fetch data");
    }
  }
);
