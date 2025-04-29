import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

export default function TechPage() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const techList = [
    {
      title: "Frontend",
      stack: "React, Redux Toolkit, Material UI",
      description: "A responsive and dynamic UI built with React and styled using Material UI. State is managed using Redux Toolkit."
    },
    {
      title: "Backend",
      stack: "Java, Spring Boot",
      description: "Microservices-based backend using Spring Boot with well-defined REST APIs and high scalability."
    },
    {
      title: "Database",
      stack: "MySQL",
      description: "Relational data is stored in a MySQL database, with optimized queries and indexing."
    },
    {
      title: "Containerization",
      stack: "Docker",
      description: "Each microservice is containerized using Docker to enable seamless deployment and scaling."
    },
    {
      title: "Deployment",
      stack: "AWS EC2 / Azure / Kubernetes",
      description: "Cloud-ready deployment for production, supporting high concurrency and fault tolerance."
    },
    {
      title: "Testing",
      stack: "Jest / React Testing Library / JUnit",
      description: "Unit and integration tests are implemented to ensure stability, using tools like Jest for frontend and JUnit for backend."
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", color: isDarkMode ? "#fff" : "#000" }}
        >
          Tech Stack & Implementation
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 800, color: isDarkMode ? "#ccc" : "#555" }}
        >
          This website showcases a full-stack e-commerce project demonstrating the use of Java microservices, containerization, database integration, frontend architecture, testing, and cloud deployment.
        </Typography>
      </motion.div>

      <Grid container spacing={3}>
        {techList.map((tech, index) => (
          <Grid item xs={12} sm={6} md={4} key={tech.title}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: 240,
                  borderRadius: 2,
                  backgroundColor: isDarkMode ? "#1c1c1c" : "#fafafa",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  overflow: "hidden"
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  color="primary"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {tech.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                >
                  {tech.stack}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    flexGrow: 1
                  }}
                >
                  {tech.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}