import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slice/categorySlice";
import categoryProductsReducer from "./slice/categoryProductsSlice";
import productDetailReducer from "./slice/productDetailSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    categoryProducts: categoryProductsReducer,
    productDetails: productDetailReducer,
  },
});
