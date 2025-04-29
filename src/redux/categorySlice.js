import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("http://localhost:8222/api/v1/products/categories");
    
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [], // 存储分类数据
    selectedCategory: 0, // 默认选中 "All Categories"
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  },
  reducers: {
    setSelectedCategory: (state, action) => {     
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = [{ id: 0, name: "All Categories" }, ...action.payload];
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setSelectedCategory } = categorySlice.actions;
export default categorySlice.reducer;
