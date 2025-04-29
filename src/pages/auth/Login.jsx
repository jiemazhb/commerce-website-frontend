import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts";
import { loginUser } from "../../services";
import LoginForm from "./LoginForm";
import { Box } from "@mui/material";

export default function Login() {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const { token, refreshToken } = await loginUser({ email, password });
      login(token, refreshToken);
      navigate("/");
    } catch (error) {
      alert(error.response?.data || "Login failed. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          width: 400,
          p: 4,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 3, // 只有这里有 boxShadow
        }}
      >
        <LoginForm onSubmit={handleLogin} />
      </Box>
    </Box>
  );
}
