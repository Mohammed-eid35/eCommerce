import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./signUp.css";
export const SignUp = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    // 👇️ navigate to /contacts
    navigate("/login");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 2.5 }}
    >
      <section className="login" id="backLogin">
        <div className="login_box">
          <div className="left">
            <div className="top_link">
              <a
                onClick={navigateToLogin}
                style={{
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                <img
                  src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                  alt=""
                />
                SIGN IN
              </a>
            </div>
            <div className="contact">
              <form action="" className="login_input">
                <h1 style={{ textAlign: "center", color: "#012030" }}>
                  SIGN UP
                </h1>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input
                  type="email"
                  placeholder="Email"
                  style={{ marginTop: "0" }}
                />
                <input type="text" placeholder="PASSWORD" />

                <button className="submit">
                  <a onClick={navigateToLogin}> CREATE ACCOUNT</a>
                </button>
              </form>
            </div>
          </div>

          <div className="rightt">
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
