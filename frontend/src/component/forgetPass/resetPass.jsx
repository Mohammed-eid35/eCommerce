import { motion } from "framer-motion";
import React from "react";
import "./forgetPassword.css";
export const ResetPassword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -1000 }}
      transition={{ duration: 2.5 }}
    >
      <div className="ResetPassword">
        <div className="card login-form ResetPass">
          <div className="card-body">
            <h3 className="card-title text-center">Reset password</h3>

            <div className="card-text">
              <form>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ marginBottom: "20px" }}
                  >
                    Your new password must be different from previously used
                    passwords
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="New Password"
                    style={{ marginBottom: "20px", height: "45px" }}
                  />
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    placeholder="Confirm Password"
                    style={{ marginBottom: "20px", height: "45px" }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ height: "45px" }}
                >
                  Send password reset email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
