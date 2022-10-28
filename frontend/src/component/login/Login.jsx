import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillGoogleCircle } from "react-icons/ai";
import "./Login.css";
export const Login = () => {
  return (
    <>
      <section className="login">
        <div className="login_box">
          <div className="left">
            <div className="top_link">
              <a
                href="#"
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
    </>
  );
};
