import React from "react";
import {
  CDBFooter,
  CDBFooterLink,
  CDBBtn,
  CDBIcon,
  CDBContainer,
  CDBBox,
} from "cdbreact";
import { ImLocation } from "react-icons/im";
import { MdAddCall, MdOutgoingMail } from "react-icons/md";
export const Footer = () => {
  return (
    <CDBFooter className="shadow" style={{ backgroundColor: "#C7FFED" }}>
      <CDBBox
        display="flex"
        flex="column"
        className="mx-auto py-5"
        style={{ width: "90%" }}
      >
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox alignSelf="center">
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="logo" src="logo" width="30px" />
              <span className="ml-3 h5 font-weight-bold">Devwares</span>
            </a>
            <CDBBox className="mt-5" display="flex">
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="facebook-f" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3 p-2">
                <CDBIcon fab icon="twitter" />
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <CDBIcon fab icon="instagram" />
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Information
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">Contact Us</CDBFooterLink>
              <CDBFooterLink href="/">About Us</CDBFooterLink>
              <CDBFooterLink href="/">Contact</CDBFooterLink>
              <CDBFooterLink href="/">Blog</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              My Account
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">Order History</CDBFooterLink>
              <CDBFooterLink href="/">NewsLetter</CDBFooterLink>
              <CDBFooterLink href="/">Specials</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: "600" }}>
              Contact us
            </p>
            <CDBBox display="flex" flex="column" style={{ cursor: "pointer" }}>
              <CDBFooterLink href="/">
                <p>
                  <ImLocation />
                  869 Lexington Ave, New York, NY 10065, USA
                </p>
              </CDBFooterLink>
              <CDBFooterLink href="/">
                <p>
                  <MdAddCall />
                  +91 123 456 789 0
                </p>
              </CDBFooterLink>
              <CDBFooterLink href="/">
                <p>
                  <MdOutgoingMail />
                  countZero@gmail.com
                </p>
              </CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">
          &copy; CountZero, 2022. All rights reserved.
        </small>
      </CDBBox>
    </CDBFooter>
  );
};
