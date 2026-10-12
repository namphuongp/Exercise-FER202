import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "../data/data";
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  function keywwordChangeHandler(e) {
    const newKeyword = e.target.value;
    setSearchParams({ keyword: newKeyword });
  }
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">List of Products</Link>
      </nav>

      <h2>List of Products</h2>
      <div>
        <label>Tìm kiếm theo tên: </label>

        <input
          type="text"
          placeholder="Search products..."
          value={searchParams.get("keyword") || ""}
          onChange={keywwordChangeHandler}
        />
      </div>
      <ul>
        {products.map((product) => (
          <li style={{ marginBottom: "10px" }} key={product.id}>
            <strong>{product.name}</strong>
            {" - "}
            <strong>{product.price.toFixed(2)}</strong>
            {" - "}
            <Link to={`/products/${product.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
