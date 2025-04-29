// src/services/authService.js
import axios from "axios";

export const loginUser = async (userInfo) => {
  const response = await axios.post("http://localhost:8222/api/v1/identity/login", userInfo);
  return response.data; // 返回 token 和 refreshToken
};
