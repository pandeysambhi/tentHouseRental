import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark" fixed="top" style={{ fontWeight: 600 }}>
        <Navbar.Brand as={Link} to="/">PIM</Navbar.Brand>
        <Nav className="justify-content-end" style={{ width: "90%" }}>
          <Nav.Link as={Link} to="/Products">
            Products
          </Nav.Link>
           <Nav.Link as={Link} to="/Customer" style={{ textColor: "white" }}>
           Customer
          </Nav.Link>
           <Nav.Link as={Link} to="/transaction/rent" style={{ textColor: "white" }}>
           Transaction
          </Nav.Link>
           <Nav.Link as={Link} to="/report/summary" style={{ textColor: "white" }}>
            Report
          </Nav.Link>

          <NavDropdown title="User" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/userDetails">
              User Details
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/Login">
              Sign In
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/register">
              Register
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Nav>
          <Navbar.Text>All rights reserved | </Navbar.Text>

          <Navbar.Text>| Copyright@Pim</Navbar.Text>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Layout;
