import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export const Login = () => {
  const navigate = useNavigate();

  const navigateToforgetPass = () => {
    // 👇️ navigate to /contacts
    navigate("/forgetpassword");
  };
  const navigateToSignUP = () => {
    // 👇️ navigate to /contacts
    navigate("/signup");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 2.5 }}
    >
      <section className="login " id="backLogin">
        <div className="login_box">
          <div className="left">
            <div className="top_link">
              <a
                onClick={navigateToSignUP}
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <img
                  style={{ color: "#D92525" }}
                  src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                  alt=""
                />
                CREATE ACCOUNT
              </a>
            </div>
            <div className="contact">
              <form action="" className="login_input">
                <h1 style={{ textAlign: "center", color: "#012030" }}>
                  SIGN IN
                </h1>
                <input
                  type="text"
                  placeholder="USERNAME"
                  style={{ marginTop: "0" }}
                />
                <input type="text" placeholder="PASSWORD" />
                <button className="submit" style={{ marginTop: "20px" }}>
                  LET'S GO
                </button>
                <div className="login_icons">
                  <p>Or login with</p>
                  <span style={{ textAlign: "center" }}>
                    {" "}
                    <BsFacebook
                      style={{
                        color: "#184C78",
                        fontSize: "36px",
                        marginRight: "5px",
                      }}
                    />
                    <AiFillTwitterCircle
                      style={{
                        color: "#159A9C",
                        fontSize: "42px",
                        marginRight: "5px",
                      }}
                    />
                    <AiFillGoogleCircle
                      style={{ color: "#BD2A2E", fontSize: "40px" }}
                    />
                  </span>
                  <a
                    onClick={navigateToforgetPass}
                    style={{ marginTop: "10px", fontWeight: "bold" }}
                  >
                    ForgetPassword
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="right">
            {/* <div className="right-text">
              <h2>LOGO</h2>
              <h5>A great company to work with!</h5>
            </div> */}
            <div className="right-inductor">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
