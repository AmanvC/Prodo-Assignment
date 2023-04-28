import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { makeRequest } from "../../utils/axios";

export const fetchCategoryProducts = createAsyncThunk(
  "fetchCategoryProducts",
  async ({ id, page }) => {
    const res = await makeRequest.get(
      `/products/category/${id}?limit=12&page=${page}`
    );
    return res.data;
  }
);

const categoryProductSlice = createSlice({
  name: "categoryProducts",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    selectedCategory: null,
    page: 1,
    totalItems: 0,
    totalPages: 0,
  },
  reducers: {
    changeSelectedPage: (state, action) => {
      state.page = action.payload.page;
    },
    changeSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload.selectedCategory;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload.items;
      state.totalItems = action.payload.meta.totalItems;
      state.page = action.payload.meta.currentPage;
      const divisor = Math.floor(action.payload.meta.totalItems / 12);
      const remainder = action.payload.meta.totalItems % 12;
      const totalPages = remainder ? divisor + 1 : divisor;
      state.totalPages = totalPages;
    });
    builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
      console.log("ERROR", action.payload);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { changeSelectedPage, changeSelectedCategory } =
  categoryProductSlice.actions;

export default categoryProductSlice.reducer;
