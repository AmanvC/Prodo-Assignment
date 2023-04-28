import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../utils/axios";

export const fetchCategories = createAsyncThunk("fetchCategories", async () => {
  const res = await makeRequest.get("/categories");
  return res.data;
});

const categorySlice = createSlice({
  name: "category",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      console.log("ERROR", action.payload);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default categorySlice.reducer;
