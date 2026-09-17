import React from "react";
import {
  Card,
  Container,
  Navbar,
  Nav,
  Form,
  InputGroup,
} from "react-bootstrap";
import { GrFormSearch } from "react-icons/gr";
function Header() {
  return (
    <Navbar className="bg-dark" variant="dark">
      <Container className="d-flex justify-content-between" style={{ width: "75%" }}>
        <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about-us">About Us</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Form inline>
          <InputGroup>
            <Form.Control placeholder="Search" />
            <InputGroup.Text>
              <GrFormSearch />
            </InputGroup.Text>
          </InputGroup>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
