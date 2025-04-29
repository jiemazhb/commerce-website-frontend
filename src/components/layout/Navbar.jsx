import React, { useState, useContext, useMemo } from "react";
import { UserContext } from "../../contexts";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Switch,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavbarMenu from "./NavbarMenu";
import NavbarDrawer from "./NavbarDrawer";
import { useSelector, useDispatch } from "react-redux";
import { themeActions } from "../../redux";
import { useNavigate } from "react-router-dom"; 

export default function Navbar() {
  const navigate = useNavigate(); 
  const { auth } = useContext(UserContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.theme);

  const cartItems = useSelector((state) => state.cart.itemsById || {});
  const totalItems = useMemo(() => {
    return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Store
            </Typography>

            {/* 主题切换 */}
            <Switch
              checked={mode === "dark"}
              onChange={() => dispatch(themeActions.toggleMode())}
              color="default"
            />

            {/* ✅ 购物车徽标点击跳转 */}
            <IconButton color="inherit" sx={{ mr: 2 }} onClick={handleCartClick}>
              <Badge badgeContent={totalItems} color="error" invisible={totalItems === 0}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <NavbarMenu auth={auth} />

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
      </Box>

      <Toolbar sx={{ height: 80 }} />
      <NavbarDrawer auth={auth} open={mobileOpen} onClose={handleDrawerToggle} />
    </>
  );
}

// export default function Navbar() {
//   const { auth } = useContext(UserContext);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const dispatch = useDispatch();
//   const { mode } = useSelector((state) => state.theme);

//   // 获取购物车商品总数
//   const cartItems = useSelector((state) => state.cart.itemsById || {});

//   const totalItems = useMemo(() => {
//     return Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
//   }, [cartItems]);
 


//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   return (
//     <>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="fixed" color="primary">
//           <Toolbar>
//             <Typography variant="h6" sx={{ flexGrow: 1 }}>
//               My Store
//             </Typography>

//             {/* 主题切换 */}
//             <Switch
//               checked={mode === "dark"}
//               onChange={() => dispatch(themeActions.toggleMode())}
//               color="default"
//             />

//             {/* 购物车徽标（大屏显示） */}
//             <IconButton color="inherit" sx={{ mr: 2 }}>
//               <Badge
//                 badgeContent={totalItems}
//                 color="error"
//                 invisible={totalItems === 0}
//               >
//                 <ShoppingCartIcon />
//               </Badge>
//             </IconButton>

//             {/* 普通菜单 */}
//             <NavbarMenu auth={auth} />

//             {/* 移动端菜单按钮 */}
//             <IconButton
//               color="inherit"
//               edge="end"
//               onClick={handleDrawerToggle}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//       </Box>

//       <Toolbar sx={{ height: 80 }} />
//       <NavbarDrawer auth={auth} open={mobileOpen} onClose={handleDrawerToggle} />
//     </>
//   );
// }
