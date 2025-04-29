import React from "react";
import { Grid, Typography, Link, Box, Divider, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme(); 

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default, 
        color: theme.palette.text.primary, 
        py: 5,
        mt: 5,
      }}
    >
      {/* <Container> */}
        <Grid container spacing={4} justifyContent="center">
          {/* Company Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="text.primary" display="block">
              About
            </Link>
            <Link href="#" color="text.primary" display="block">
              Careers
            </Link>
            <Link href="#" color="text.primary" display="block">
              Blog
            </Link>
            <Link href="#" color="text.primary" display="block">
              Customers
            </Link>
            <Link href="#" color="text.primary" display="block">
              Hire us
            </Link>
          </Grid>

          {/* Features Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Features
            </Typography>
            <Link href="#" color="text.primary" display="block">
              Press
            </Link>
            <Link href="#" color="text.primary" display="block">
              Release Notes
            </Link>
            <Link href="#" color="text.primary" display="block">
              Integrations
            </Link>
            <Link href="#" color="text.primary" display="block">
              Pricing
            </Link>
          </Grid>

          {/* Documentation Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Documentation
            </Typography>
            <Link href="#" color="text.primary" display="block">
              Support
            </Link>
            <Link href="#" color="text.primary" display="block">
              Docs
            </Link>
            <Link href="#" color="text.primary" display="block">
              Status
            </Link>
            <Link href="#" color="text.primary" display="block">
              API Reference
            </Link>
          </Grid>

          {/* Resources Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Link href="#" color="text.primary" display="block">
              Help
            </Link>
            <Link href="#" color="text.primary" display="block">
              Your Account
            </Link>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider sx={{ my: 4, bgcolor: theme.palette.text.secondary }} /> {/* ✅ 让 Divider 颜色自适应 */}

        {/* Copyright Section */}
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} My Company. All rights reserved.
        </Typography>
      {/* </Container> */}
    </Box>
  );
}
