import React from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, NavDropdown,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Layout = () => {
   const [loginState,setloginState]=React.useState("Login")
   const[flag,setFlag]=React.useState(false)
   const[token,setToken]=React.useState(null)
   let history = useHistory();

   React.useEffect(()=>{
    //  console.log(localStorage.getItem('jsonToken'))
    //  setToken(localStorage.getItem('jsonToken'))
    //  console.log(token)
    window.addEventListener('storage', () => {
   setFlag((newValue)=>!newValue);
  //  setCart(JSON.parse(localStorage.getItem('myCart')) || [])
   setToken(localStorage.getItem('jsonToken'))   
});
   },[flag])

  
  
   const handleClick=()=>{
         setFlag((newValue)=>!newValue);
    if(localStorage.getItem('jsonToken')!=null){
               localStorage.removeItem('jsonToken')
    }

    history.push('/Login')
}

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


           <Button  variant="dark"  onClick={handleClick} style={{ textColor: "white" }}>
           {localStorage.getItem('jsonToken')?"Logout":"Login"}
          </Button>
          

          
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
