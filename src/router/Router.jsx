import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import PrivateRoute from '../router/PrivateRoute';
import Admin from '../pages/Admin';
import DetailProducts from '../pages/DetailProducts';
// import Cart from '../pages/Cart';

import { useLocation } from 'react-router';
import Cart from '../pages/NewCart';
import { useCookies } from 'react-cookie';
import CheckOuts from '../pages/Checkouts';
const Router = () => {
  const location = useLocation();

  
  return (
    <>
      {/* {location.pathname !== '/cart' && <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detailProduct/:id" element={<DetailProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkouts" element={<CheckOuts/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
