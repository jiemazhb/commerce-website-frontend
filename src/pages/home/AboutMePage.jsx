import React from "react";
import avatarImg from "../../assets/avatar.jpg";

import {
  Box,
  Typography,
  Avatar,
  Chip,
  Divider,
  Grid,
  Button,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function AboutPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const skills = [
    "Java",
    "Spring Boot",
    "React",
    "TypeScript",
    "Redux",
    "GraphQL",
    "Asp.net MVC",
    "Entity Framework",
    "LinQ",
    "Docker",
    "SQL",
    "MongoDB",
    "Git",
    "CI/CD"
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
      },
    }),
  };

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
            mb: 6,
          }}
        >
          <Avatar
            src={avatarImg}
            sx={{
              width: 180,
              height: 180,
              border: "4px solid",
              borderColor: "primary.main",
            }}
          />
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Hello, I'm Danny
            </Typography>
            <Typography variant="body1" color="text.secondary">
              A full-stack developer with a passion for elegant code and modern
              architecture. I love building scalable applications and intuitive
              user interfaces.
            </Typography>
            <Button
              component={Link}
              to="/overview"
              variant="outlined"
              size="large"
              sx={{ mt: 3, borderRadius: 10 }}
            >
              Website Overview
            </Button>
            <Typography variant="body1" color="text.secondary" mt={1}>
              This site was built as part of my job-seeking portfolio. It
              showcases my ability to build scalable full-stack applications
              using modern technologies like React, Redux, Spring Boot, and
              Docker. <br />
              <br />
              I’m currently looking for new opportunities in front-end,
              back-end, or full-stack development roles. If you're hiring or
              know of any openings, feel free to reach out to me at{" "}
              <strong>danny.h.zhao@gmail.com</strong>.
            </Typography>
          </Box>
        </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Divider sx={{ mb: 6 }} />

        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Tech Stack
          </Typography>
          <Grid container spacing={2}>
            {skills.map((skill, i) => (
              <Grid item key={skill}>
                <motion.div
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <Chip
                    label={skill}
                    color="primary"
                    sx={{
                      px: 2,
                      py: 1,
                      fontWeight: "bold",
                      fontSize: 16,
                      borderRadius: "8px",
                      background: isDark ? "#1976d2" : "#e3f2fd",
                      color: isDark ? "white" : "#1976d2",
                    }}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Divider sx={{ my: 6 }} />

        <Box>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Philosophy
          </Typography>
          <Typography color="text.secondary">
            I believe software should be maintainable, beautiful, and solve real
            problems. Whether it's building microservices, designing APIs, or
            crafting clean front-end components, I approach every challenge with
            creativity and precision.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}

// import React from "react";
// import { Box, Typography, Divider, Grid, Avatar, Paper } from "@mui/material";

// export default function AboutPage() {
//   return (
//     <Box sx={{ px: { xs: 2, md: 6 }, py: 5 }}>
//       {/* 标题 */}
//       <Typography variant="h3" fontWeight={600} gutterBottom>
//         About Me
//       </Typography>

//       {/* 子标题 */}
//       <Typography variant="subtitle1" color="text.secondary" mb={4}>
//         Let me briefly introduce myself — career, skills, and philosophy.
//       </Typography>

//       <Divider sx={{ mb: 4 }} />

//       {/* 简介内容区域 */}
//       <Grid container spacing={4} alignItems="center">
//         <Grid item xs={12} md={4}>
//           <Avatar
//             alt="Profile Photo"
//             src="https://via.placeholder.com/200"
//             sx={{ width: 200, height: 200, mx: "auto" }}
//           />
//         </Grid>
//         <Grid item xs={12} md={8}>
//           <Typography variant="h6" gutterBottom>
//             Hi, I'm a software engineer passionate about scalable architecture.
//           </Typography>
//           <Typography color="text.secondary">
//             With a solid background in Java, React, and system design, I enjoy building
//             clean, efficient, and reliable applications. Whether it's microservices or
//             front-end UI, I love solving problems and delivering intuitive user
//             experiences.
//           </Typography>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 5 }} />

//       {/* 技能块 */}
//       <Typography variant="h5" fontWeight={500} gutterBottom>
//         Skills & Technologies
//       </Typography>
//       <Grid container spacing={2}>
//         {["Java", "Spring Boot", "React", "Docker", "MySQL", "Git", "Redux", "TypeScript"].map(
//           (skill) => (
//             <Grid item key={skill}>
//               <Paper
//                 elevation={2}
//                 sx={{
//                   px: 2,
//                   py: 1,
//                   borderRadius: 3,
//                   bgcolor: "primary.light",
//                   color: "white",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {skill}
//               </Paper>
//             </Grid>
//           )
//         )}
//       </Grid>

//       {/* 结尾语 */}
//       <Box mt={6}>
//         <Typography variant="h6" gutterBottom>
//           Want to learn more?
//         </Typography>
//         <Typography color="text.secondary">
//           Feel free to reach out or browse my project sections to explore more about what I do.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }
