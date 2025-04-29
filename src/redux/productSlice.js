import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// export const fetchProductsByCategory = createAsyncThunk(
//   "products/fetchByCategory",
//   async (categoryId: number | undefined | null) => {
//     const baseUrl = "http://localhost:8222/api/v1/products";
//     const url = categoryId === 0 || categoryId == null
//       ? baseUrl
//       : `${baseUrl}/category?selectedCategory=${categoryId}`;
    
//     const response = await axios.get(url);
  
//     return response.data;
//   }
// );

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (categoryId) => {
    const baseUrl = "http://localhost:8222/api/v1/products";
    const url = categoryId === 0 || categoryId == null
      ? baseUrl
      : `${baseUrl}/category?selectedCategory=${categoryId}`;
    
    const response = await axios.get(url);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload
        
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.error("Error fetching products:", action.error.message);
      });
  },
});

export default productSlice.reducer;
