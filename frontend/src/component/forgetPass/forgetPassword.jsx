import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgetPassword.css";
import logoicon from "./img/logoicon.svg";
export const ForgetPassword = () => {
  const navigate = useNavigate();

  const navigateToResetPass = () => {
    // 👇️ navigate to /contacts
    navigate("/resetpassword");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 2.5 }}
    >
      <div className="ForgetPasswordPage">
        <div className="card text-center forgetPass">
          <div className="card-header h5 text-white bg-dark">
            Password Reset
          </div>
          <div className="card-body px-5">
            <img src={logoicon} alt="" style={{ width: "50px" }} />
            <p className="card-text py-2">
              Enter your email address and we'll send you an email with
              instructions to reset your password.
            </p>
            <div className="form-outline">
              <input
                type="email"
                id="typeEmail"
                className="form-control my-3 emailInput"
              />
              <label className="form-label" htmlFor="typeEmail">
                Enter Your Email
              </label>
            </div>
            <a className="btn btn-dark w-100" onClick={navigateToResetPass}>
              Reset password
            </a>
            <div className="d-flex justify-content-between mt-4">
              <a className="" href="#">
                Login
              </a>
              <a className="" href="#">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
