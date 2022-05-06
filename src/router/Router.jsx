import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import PrivateRoute from "../router/PrivateRoute";
import Admin from '../pages/Admin';
import DetailProducts from '../pages/DetailProducts';
import Cart from '../pages/Cart';
import { useLocation } from 'react-router';
const Router = () => {
  const location =useLocation();
  return (
    <>
      {
        location.pathname !== '/cart' && (
          <Header />
        )
      }
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/detailProduct" element={<DetailProducts/>}/>
        <Route path="/cart" element={<Cart/>}/> 
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
