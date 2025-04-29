import "./App.css";
import { MainLayout } from "./components";
import { Home, Login, Product, CartPage,AboutMePage, OverviewPage,TechPage,CheckoutPage, Signup } from "./pages";
import { UserProvider } from "./contexts";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material"; 
import { useSelector } from "react-redux";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";


function App() {

  const { mode, primaryColor } = useSelector((state) => state.theme);


  const theme = createTheme({
    palette: {
      mode, // light 或 dark 模式
      primary: {
        main: primaryColor, // Redux 里的主色
      },
    },
  });

  return (
    <ThemeProvider theme={theme}> 
      <CssBaseline />
      <UserProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="product" element={<Product />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="cart" element={<CartPage />} /> 
                <Route path="/about" element={<AboutMePage />} />
                <Route path="/overview" element={<OverviewPage />} />
                <Route path="/techStack" element={<TechPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Route>
            </Routes>
          </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
