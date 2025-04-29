import React from "react";
import AboutMe from "./AboutMe";
import Overview from "./Overview";
import TechStack from "./TechStack";
import { Box, Grid, useTheme } from "@mui/material";
import {IntroCard} from "../../components";

export default function Introduction() {
 // const theme = useTheme();
  //const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box sx={{ mt: 6, mb: 6}}> 
    <Grid container spacing={3} justifyContent="center">
    <Grid item xs={12} sm={6} md={4}>
      <IntroCard>
        <AboutMe />
      </IntroCard>
    </Grid>
  
    <Grid item xs={12} sm={6} md={4}>
      <IntroCard>
        <Overview />
      </IntroCard>
    </Grid>
  
    <Grid item xs={12} sm={6} md={4}>
      <IntroCard>
        <TechStack />
      </IntroCard>
    </Grid>
  </Grid>
  </Box>
  );
}
