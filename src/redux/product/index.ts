import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, } from "../../services/auth";

export const fetchProductsAction = createAsyncThunk(
  "get/products",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await fetchProducts();
      if (response) {
				return fulfillWithValue(response);
			}
			return fulfillWithValue([]);
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);