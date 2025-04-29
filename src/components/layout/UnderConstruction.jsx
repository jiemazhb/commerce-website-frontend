import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Switch,
  Badge,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavbarMenu from "./NavbarMenu";
import NavbarDrawer from "./NavbarDrawer"; 
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../redux";
import { useCartActions } from "../../hooks";

export default function UnderConstruction() {
  const { auth } = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {totalItems} = useCartActions()

  const { mode } = useSelector((state) => state.theme);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* 顶部提示条 */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#FFD700",
          color: "black",
          textAlign: "center",
          py: 1,
          fontWeight: "bold",
          fontSize: 16,
          letterSpacing: 1,
        }}
      >
        🚧 Under construction – but at least we don’t need hard hats! 🏗️
      </Box>

      {/* 顶部导航栏 */}
      <AppBar position="sticky" color="primary" sx={{ mb: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Portfolio
          </Typography>

          {/* 主题切换 */}
          <Switch
            checked={mode === "dark"}
            onChange={() => dispatch(themeActions.toggleMode())}
            color="default"
          />

          {/* 点击跳转购物车 */}
          <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleCartClick}>
            <Badge
              badgeContent={totalItems}
              color="error"
              invisible={totalItems === 0}
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* 菜单栏 */}
          <NavbarMenu auth={auth} />

          {/* 移动端菜单按钮 */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 滑入菜单 Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        transitionDuration={300} 
      >
        <NavbarDrawer auth={auth} onClose={handleDrawerToggle} />
      </Drawer>
    </>
  );
}
