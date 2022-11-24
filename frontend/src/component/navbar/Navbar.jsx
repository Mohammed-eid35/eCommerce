import React, { useState } from "react";
import "./Navbar.css";
import { SlBasketLoaded } from "react-icons/sl";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "./img/logo.webp";

import "bootstrap/dist/css/bootstrap.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <MDBNavbar expand="lg" className=" bg-dark ">
      <MDBContainer>
        <MDBNavbarBrand href="#">
          <img src={logo} alt="" className="nav_Logo" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic} className="navContent">
          <MDBNavbarNav className="navItems">
            <MDBNavbarItem>
              <MDBNavbarLink aria-current="page" href="#" className="item">
                <Link to="/" style={{ color: "#FFA626" }}>
                  HOME
                </Link>
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" className="item">
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link item">
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>MENS</MDBDropdownItem>
                  <MDBDropdownItem link> WOMENS</MDBDropdownItem>
                  <MDBDropdownItem link>children</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink
                href="#"
                tabIndex={-1}
                aria-disabled="true"
                className="item"
              >
                ABOUT
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#" className="item">
                {" "}
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <Link to="/login">
            {" "}
            <IoPersonCircleSharp
              size={"30px"}
              style={{ marginRight: "20px" }}
            />
          </Link>

          <SlBasketLoaded size={"30px"} />

          {/* <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <MDBBtn color="primary">Search</MDBBtn>
          </form> */}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
