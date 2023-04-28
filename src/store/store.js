import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import categoryProductsReducer from "./slice/categoryProductsSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    categoryProducts: categoryProductsReducer,
  },
});
