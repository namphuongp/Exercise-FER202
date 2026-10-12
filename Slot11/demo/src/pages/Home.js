import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/products">List of Products</Link>
      </nav>
      <h3>Home Page</h3>
      <p>Đây là trang chủ</p>
      <p>Demo param và searchParam</p>
    </div>
  );
}

export default Home;
