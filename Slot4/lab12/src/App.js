import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Banner from "./components/Banner"
function App() {
  //  const [cartCount, setCartCount] = useState(0);
  //  setCartCount(0);
  return (
    <div className="App">
      <Header cartCount={1 } />
      <Banner/>
    </div>
  );
}

export default App;
