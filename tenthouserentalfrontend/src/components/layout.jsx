import React from "react";
import { Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = (props) => {
   
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

           <NavDropdown title="Transaction" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/transaction/rent">
             Rent Items
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/transaction/return">
              Return Items
            </NavDropdown.Item>
            
          </NavDropdown>
            <Nav.Link as={Link} to="/report/summary" style={{ textColor: "white" }}>
            Report
          </Nav.Link>


            <Nav.Link as={Link} to="/Login" style={{ textColor: "white" }}>
           Login
          </Nav.Link>
           {/* <Button  variant="dark"  onClick={handleClick} style={{ textColor: "white" }}>
           {text}
          </Button>
           */}

          
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
