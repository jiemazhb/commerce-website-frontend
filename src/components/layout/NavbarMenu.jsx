import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { MainLayout } from "../index";

export default function NavbarMenu({ auth }) {
  return (
    <Stack direction="row" spacing={2} sx={{ display: { xs: "none", md: "flex" } }}>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/product">
        Product
      </Button>
      <Button color="inherit" component={Link} to="/signup">
        Sign Up
      </Button>
      {auth ? (
        <MainLayout userName={auth.username} />
      ) : (
        <Button color="inherit" component={Link} to="/login">
          Login
        </Button>
      )}
    </Stack>
  );
}
