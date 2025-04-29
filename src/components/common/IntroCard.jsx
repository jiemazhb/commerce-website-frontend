import React from "react";
import { Card, CardContent, useTheme } from "@mui/material";

export default function IntroCard({ children, onClick }) {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Card
      onClick={onClick} // 点击事件（可选）
      sx={{
        height: "280px",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s, transform 0.2s",
        backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
        cursor: "pointer", // 小手
        "&:hover": {
          boxShadow: isDarkMode
            ? "0px 4px 20px rgba(255, 255, 255, 0.2)"
            : 6,
          transform: "scale(1.05)",
        },
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitLineClamp: 6,
          WebkitBoxOrient: "vertical",
        }}
      >
        {children}
      </CardContent>
    </Card>
  );
}
