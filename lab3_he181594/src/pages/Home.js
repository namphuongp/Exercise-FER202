import React from "react";
import Header from "../components/Header";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="text-center mt-3">
        <h1>Welcome to ProductStore</h1>
        <p>Manage and explore products for your needs.</p>
        <Button onClick={() => navigate("/products")}>View Products</Button>
      </div>
    </div>
  );
}

export default Home;
