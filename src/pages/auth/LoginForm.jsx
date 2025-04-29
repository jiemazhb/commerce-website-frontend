import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5" align="center" gutterBottom>
        Please Sign in
      </Typography>

      <TextField
        label="Email address"
        type="email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        sx={{
          mt: 2,
          input: { color: "text.primary" },
          "& label": { color: "text.secondary" },
          "& fieldset": { borderColor: "text.disabled" },
          "&:hover fieldset": { borderColor: "primary.main" },
        }}
      />

      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        sx={{
          mt: 2,
          input: { color: "text.primary" },
          "& label": { color: "text.secondary" },
          "& fieldset": { borderColor: "text.disabled" },
          "&:hover fieldset": { borderColor: "primary.main" },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          mt: 3,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          "&:hover": { bgcolor: "primary.dark" },
        }}
      >
        Login
      </Button>
    </form>
  );
}
