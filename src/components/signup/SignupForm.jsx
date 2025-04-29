import React from "react";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";

export default function SignupForm({ formData, handleChange, handleSubmit }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // ✅ 让整个页面满屏
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4, // ✅ 增加内边距
          width: "400px", // ✅ 让表单更大
          bgcolor: "background.default",
          color: "text.primary",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>Sign Up</Typography>
        
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ py: 1.5 }}>
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
