import React, { useState } from "react";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div>
      <Navbar dark expand="md">
        <div className="container">
          <NavbarToggler onClick={toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            <img
              src="assets/images/logo.png"
              height="30"
              width="41"
              alt="Ristorante Con Fusion"
            />
          </NavbarBrand>
          <Collapse isOpen={isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/stafflist">
                  <span className="fa fa-home fa-lg"></span> Nhân viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/department">
                  <span className="fa fa-home fa-lg"></span> Phòng ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/salary">
                  <span className="fa fa-home fa-lg"></span> Bảng lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
