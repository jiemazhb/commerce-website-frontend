import './App.css';
import Product from './component/product';
import Signup from './component/signup';
import Login from './component/login';
import Home from './component/home';
import MainLayout from './component/MainLayout';
import { UserProvider } from './component/userContext';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
