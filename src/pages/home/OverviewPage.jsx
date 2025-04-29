import React from "react";
import { Box, Typography, Grid, Chip, Divider, Fade, Zoom } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion } from "framer-motion";

export default function OverviewPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <Fade in timeout={500}>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Website Overview
          </Typography>

          <Typography variant="h6" color="text.secondary" mb={4}>
            This site is a modern e-commerce demo platform showcasing my full-stack development skills. It emphasizes clean UI/UX, responsive layout, state management, and microservice architecture.
          </Typography>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h5" fontWeight={600} mb={2}>
            🔧 Tech Stack Highlights
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {[{
            icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
            title: "Frontend",
            label: "React + MUI",
            color: "primary"
          }, {
            icon: <StorageIcon sx={{ fontSize: 40, color: "secondary.main" }} />,
            title: "Backend",
            label: "Java + Spring Boot",
            color: "secondary"
          }, {
            icon: <CloudIcon sx={{ fontSize: 40, color: "info.main" }} />,
            title: "DevOps",
            label: "Docker + Kubernetes",
            color: "info"
          }, {
            icon: <AutoAwesomeIcon sx={{ fontSize: 40, color: "success.main" }} />,
            title: "Features",
            label: "Dark Mode, Cart, Auth",
            color: "success"
          }].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <Box textAlign="center">
                  {item.icon}
                  <Typography variant="subtitle1" fontWeight={600} mt={1}>
                    {item.title}
                  </Typography>
                  <Chip label={item.label} color={item.color} variant="outlined" size="small" />
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 5 }} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="body1" sx={{ fontSize: "1.1rem", color: "text.secondary" }}>
            The goal of this project is to simulate a scalable, professional-grade commerce platform with an emphasis on component-based architecture, responsive design, persistent state with Redux + localStorage, and seamless UI transitions. It also demonstrates CI/CD practices and modular backend integration.
          </Typography>
        </motion.div>
      </Box>
    </Fade>
  );
}