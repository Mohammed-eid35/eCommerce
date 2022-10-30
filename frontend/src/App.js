import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/homePage/Home";
import { Login } from "./component/login/Login";
import { Navbar } from "./component/navbar/Navbar";
import ProductsPage from "./component/ProductsPage/ProductsPage";
import { SignUp } from "./component/signup/signUp";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
