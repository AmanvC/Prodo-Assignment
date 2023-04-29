import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../utils/axios";

export const fetchProductDetails = createAsyncThunk(
  "fetchProductDetails",
  async ({ id }) => {
    const res = await makeRequest.get(`/products/${id}`);
    console.log(res);
    return res.data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductDetails.pending, (state, action) => {
      state.isLoading = true;
      state.data = null;
      state.isError = false;
    });
    builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchProductDetails.rejected, (state, action) => {
      state.isLoading = false;
      state.data = null;
      state.isError = true;
    });
  },
});

export default productDetailsSlice.reducer;
