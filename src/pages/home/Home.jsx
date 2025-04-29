import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Box } from "@mui/material";
import Introduction from "./Introduction";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

export default function Home() {
  const images = [
    `${process.env.PUBLIC_URL}/image/1.jpg`,
    `${process.env.PUBLIC_URL}/image/2.jpg`,
    `${process.env.PUBLIC_URL}/image/3.jpg`,
  ];

  return (
    <>
      {/* ⏩ 首屏图预加载 */}
      <link rel="preload" as="image" href={images[0]} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Box>
          <Container fluid className="mt-3">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Carousel fade interval={3000} controls={false} indicators={true}>
                {images.map((src, index) => (
                  <Carousel.Item key={index}>
                    <motion.img
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="d-block w-100"
                      loading={index === 0 ? "eager" : "lazy"}
                      style={{
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </Container>

          {/* 👇 也可加动画包裹 Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Introduction />
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
}
