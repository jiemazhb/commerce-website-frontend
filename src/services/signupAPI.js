import axios from "axios";

const API_URL = "http://localhost:8222/api/v1/identity/register"; 

export const registerUser = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};
