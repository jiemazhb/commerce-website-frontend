import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatedText, UnderlineTitle } from "../../components";

export default function Overview() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const sentence =
    "This site presents a Java microservices project, covering core concepts from design to implementation. It offers insights into high concurrency, scalability, and reliability for learning and exchange.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 图标保留 */}
      <div className="icon text-primary mb-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z"
              fill="#335EEA"
            ></path>
            <path
              d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z"
              fill="#335EEA"
              opacity=".3"
            ></path>
          </g>
        </svg>
      </div>

      {/* 使用抽离后的下划线标题组件 */}
      <UnderlineTitle to="/overview" label="Website Overview" />

      {/* 使用抽离后的通用文字动画组件 */}
      <AnimatedText
        text={sentence}
        sx={{ mt: 2 }}
        maxHeight="10.5em" 
        lineClamp={7}
      />
    </motion.div>
  );
}
