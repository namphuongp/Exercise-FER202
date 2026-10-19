import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import NotFound from "./NotFound";
import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return <NotFound />;
  }
  return (
    <>
      <Header></Header>
      <Link to="/products">Quay lại danh sách</Link>
      <Row>
        <Col md="6">
          <div
            className="d-flex justify-content-between ms-2"
            style={{
              padding: "100px",
              borderTop: "1px solid",
              borderBottom: "1px solid",
              borderLeft: "1px solid",
              borderRight: "1px solid",
            }}
          />
        </Col>
        <Col className="">
          {product && (
            <div>
              <h3>{product.name}</h3>
              <p>ID: {product.id}</p>
              <p>Danh mục: {product.category}</p>
              <p>Giá: ${product.price.toFixed(2)}</p>
              <p>Mô tả: {product.description} </p>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
}

export default ProductDetail;
