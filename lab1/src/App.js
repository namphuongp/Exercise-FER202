import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner"
import ProductCard from "./components/ProductCard";
function App() {
  //  const [cartCount, setCartCount] = useState(0);
  //  setCartCount(0);
  return (
    <div className="App">
      <Header cartCount={1 } />
      <Banner/>
      <ProductCard/>
    </div>
  );
}

export default App;
