import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

export default function AnimatedText({
    text,
    sx = {},
    maxHeight = "6.5em",
    lineClamp = 4,
  }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
  
    return (
      <Box
        component="p"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: lineClamp,
          maxHeight,
          ...sx,
        }}
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            whileHover={{
              y: -3,
              rotate: -2,
              scale: 1.05,
              color: "#e91e63",
              textShadow: "0 0 6px #e91e63",
            }}
            transition={{ duration: 0.2 }}
            style={{
              display: "inline-block",
              marginRight: "6px",
              color: isDarkMode ? "#fff" : "#555",
              cursor: "default",
            }}
          >
            {word}
          </motion.span>
        ))}
      </Box>
    );
  }
  