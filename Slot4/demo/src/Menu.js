import React from "react";
import { Container, Card, Button, Col, Row } from "react-bootstrap";
import pizza from "./images/pizza.png";
import margherita from "./images/margherita.png";
import cheese from "./images/4cheese.png";
import pepperoni from "./images/pepperoni.png";
import vegetarian from "./images/vegetarian.png";
function Menu() {
  const menuItems = [
    { name: "Margherita", oldPrice: 10, newPrice: 8, image: margherita },
    { name: "4 Cheese", oldPrice: 12, newPrice: 10, image: cheese },
    { name: "Pepperoni", oldPrice: 11, newPrice: 9, image: pepperoni },
    { name: "Vegetarian", oldPrice: 9, newPrice: 7, image: vegetarian },
  ];
  return (
    <Container fluid className="bg-dark p-0">
      <div>
        <img src={pizza} style={{ width: "100%", height: "500px" }} />
        <div
          className="position-absolute text-center text-white p-3"
          style={{
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <h1 className="fw-bold">Neapolitan Pizza</h1>
          <p className="fs-5">
            Thưởng thức hương vị Ý chính hiệu áđâsiđausahđoáioáid
          </p>
        </div>
      </div>

      <div className="text-white px-5 mt-4">
        <h3>Our Menu</h3>
        <Row>
          {menuItems.map((menu) => (
            <Col md={3} key={menu.name}>
              <Card className=" text-white border-0 mb-3 mx-auto">
                <Card.Img src={menu.image} style={{ width: "100%", height: "300px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="text-dark">{menu.name} Pizza</Card.Title>
                  <Card.Text className="text-dark">
                    <del>${menu.oldPrice.toFixed(2)}</del> 
                    <Card.Text className=" ms-2 text-warning d-inline">
                      ${menu.newPrice.toFixed(2)}
                    </Card.Text>
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                  <Button className= "bg-dark">Order Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h3 className="text-center text-white">Book Your Table</h3>
      </div>
    </Container>
  );
}

export default Menu;
