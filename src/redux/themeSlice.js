import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", // 默认主题
  primaryColor: "#1976d2", // MUI 默认蓝色
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setPrimaryColor: (state, action) => {
      state.primaryColor = action.payload;
    },
  },
});

export const { toggleMode, setPrimaryColor } = themeSlice.actions;
export default themeSlice.reducer;
