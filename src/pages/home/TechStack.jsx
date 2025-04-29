import React from "react";
//import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { AnimatedText, UnderlineTitle } from "../../components";

export default function TechStack() {
  //const theme = useTheme();
  //const isDarkMode = theme.palette.mode === "dark";

  const sentence =
    "Built with Java, Spring Boot, Docker, and MySQL to handle high concurrency efficiently. The architecture demonstrates the practical application of modern microservices.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 图标保留 */}
      <div className="icon text-primary mb-3">
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M17.272 8.685a1 1 0 111.456-1.37l4 4.25a1 1 0 010 1.37l-4 4.25a1 1 0 01-1.456-1.37l3.355-3.565-3.355-3.565zm-10.544 0L3.373 12.25l3.355 3.565a1 1 0 01-1.456 1.37l-4-4.25a1 1 0 010-1.37l4-4.25a1 1 0 011.456 1.37z"
              fill="#335EEA"
            ></path>
            <rect
              fill="#335EEA"
              opacity=".3"
              transform="rotate(15 12 12)"
              x="11"
              y="4"
              width="2"
              height="16"
              rx="1"
            ></rect>
          </g>
        </svg>
      </div>

      {/* 使用抽离后的下划线标题组件 */}
      <UnderlineTitle to="/techStack" label="Tech Stack & Implementation" />

      {/* 使用抽离后的通用文字动画组件 */}
      <AnimatedText
        text={sentence}
        sx={{ mt: 2 }}
        maxHeight="10.5em" 
        lineClamp={6}
      />
    </motion.div>
  );
}
