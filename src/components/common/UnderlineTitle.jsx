import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function UnderlineTitle({ to, label, hoverColor = "#1565c0" }) {
  return (
    <Box
      component="h5"
      sx={{
        position: "relative",
        display: "inline-block",
        fontSize: "1.25rem",
        fontWeight: 600,
        color: "#1976d2", 
        transition: "color 0.3s ease",
        "&:hover": {
          color: hoverColor,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -4,
          width: "0%",
          height: "2px",
          backgroundColor: "#1976d2",
          transition: "width 0.3s ease",
        },
        "&:hover::after": {
          width: "100%",
        },
      }}
    >
      <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
        {label}
      </Link>
    </Box>
  );
}
