import React from "react";
import { Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = (props) => {
   
  return (
    <div className="navbar">
      <Navbar bg="dark" variant="dark" fixed="top" style={{ fontWeight: 500 }}>
        <Navbar.Brand as={Link} to="/">TRM</Navbar.Brand>
        <Nav className="justify-content-end" variant="pills" style={{ width: "100%",fontSize:18 }}>
          <Nav.Link as={Link} to="/Products" >
            Products
          </Nav.Link>
           <Nav.Link as={Link} to="/Customer" >
           Customer
          </Nav.Link>

           <NavDropdown title="Transaction" id="basic-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/transaction/rent">
             Rent Items
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/transaction/return">
              Return Items
            </NavDropdown.Item>
            
          </NavDropdown>
            <Nav.Link as={Link} to="/report/summary" >
            Report
          </Nav.Link>


            <Nav.Link as={Link} to="/Login">
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

          <Navbar.Text>| Copyright@TRM</Navbar.Text>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Layout;
