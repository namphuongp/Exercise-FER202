import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/data";
function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) {
    return (
      <>
        <div>Product not found</div>
        <Link to="/products">Back to Product List</Link>
      </>
    );
  }
  return (
    <>
    <Link to="/products">Back to Product List</Link>
      <div>ProductDetail</div>
      <p>Product ID: {id}</p>
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
