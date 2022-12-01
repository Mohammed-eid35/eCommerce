import React from "react";

import { BrowserRouter, Router } from "react-router-dom";
import { Navbar } from "./component/navbar/Navbar";

import { Footer } from "./component/footer/footer";
import { AnimatedRoutes } from "./component/AnimatedRoutes";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
