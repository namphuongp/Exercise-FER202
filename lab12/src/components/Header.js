import React from "react";
import {
  Card,
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../images/logo.jpg";
function Header({ cartCount }) {
  return (
    <Navbar className="bg-dark" variant="dark">
      <Container
        className="d-flex justify-content-between"
        style={{ width: "200%" }}
      >
      
          <img src={logo} style={{ width: "10%", height: "100px" }} />
       
        <Nav className="me-auto ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#product-list">Products</Nav.Link>
          <Nav.Link href="#men">Men</Nav.Link>
          <Nav.Link href="#women">Women</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#cart">
            <FaShoppingCart></FaShoppingCart> Cart ({cartCount})
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
