import React from "react";

//import { useTheme } from "@mui/material/styles";

import { motion } from "framer-motion";
import { AnimatedText, UnderlineTitle } from "../../components";

export default function AboutMe() {
  //const theme = useTheme();
  //const isDarkMode = theme.palette.mode === "dark";

  const sentence =
    "I am a developer focused on building scalable applications. I constantly explore new tech to enhance my problem-solving skills, and this project showcases my ability to combine design and...";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* 图标保留 */}
      <div className="icon mb-3">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="M0 0h24v24H0z"></path>
            <path
              d="M7 3h10a4 4 0 110 8H7a4 4 0 110-8zm0 6a2 2 0 100-4 2 2 0 000 4z"
              fill="#335EEA"
            ></path>
            <path
              d="M7 13h10a4 4 0 110 8H7a4 4 0 110-8zm10 6a2 2 0 100-4 2 2 0 000 4z"
              fill="#335EEA"
              opacity=".3"
            ></path>
          </g>
        </svg>
      </div>

      {/* 使用抽离后的下划线标题组件 */}
      <UnderlineTitle to="/about" label="Who I Am" />

      {/* 使用抽离后的通用文字动画组件，传递 maxHeight 和 lineClamp */}
      <AnimatedText
        text={sentence}
        sx={{ mt: 2 }}
        maxHeight="10.5em" 
        lineClamp={7}
      />
    </motion.div>
  );
}

