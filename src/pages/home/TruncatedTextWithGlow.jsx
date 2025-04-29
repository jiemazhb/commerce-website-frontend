// TruncatedTextWithGlow.jsx
export default function TruncatedTextWithGlow({
    text,
    color = "#e91e63",
    lineClamp = 7,
    hoverEffect = { y: -3, rotate: -2, scale: 1.05 },
  }) {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === "dark";
  
    return (
      <Box
        component="p"
        sx={{
          mt: 2,
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: lineClamp,
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            whileHover={{
              ...hoverEffect,
              color,
              textShadow: `0 0 6px ${color}`,
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
  