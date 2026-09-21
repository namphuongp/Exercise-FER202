import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import products from "../products";

function ProductCard() {
  return (
    <Container fluid className="my-4">
      <h2 className="mb-4">Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id}  md={4}className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: "250px" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductCard;
