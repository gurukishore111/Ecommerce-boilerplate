import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FaUserAlt,FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../app.css"

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" className="navcont " id="navbarmain">
     <Container>
     
     <Link to="/" className="navhead " id="navleftitem" >Adi Ecom.</Link>

     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto navitem" id="navrightitems">
        <div className="cartnavitem">
      <Link to="/cart" className="navrightitems">
     <FaShoppingCart className="carticon"/>Cart
      </Link>
      </div>
      <div className="signnavitem">

      <Link to="/login" className="navrightitems"><FaUserAlt className="usericon"/>Sign in</Link>
    
      </div>
     

    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>

    </div>
  )
}

export default Header