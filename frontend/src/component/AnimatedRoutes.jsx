import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./homePage/Home";
import { Login } from "./login/Login";
import { SignUp } from "./signup/signUp";
import { AnimatePresence } from "framer-motion";
import { ForgetPassword } from "./forgetPass/forgetPassword";
import { ResetPassword } from "./forgetPass/resetPass";
import ProductDetails from './ProductsPage/ProductDetails';
export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/products/:productID" element={<ProductDetails/>} />
      </Routes>
      {/* <ForgetPassword /> */}
    </AnimatePresence>
  );
};
