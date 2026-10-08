import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import animals from './data';
import AnimalCard from './AnimalCard';
import EventHandlingDemo from "./EventHandingDemo";
import RenderAndCommitDemo from "./RenderAndCommitDemo";
import SnapshotDemo from "./SnapshotDemo";
function App() {
  const showAdditionalData = (additional) => {
    const safeData = additional || {};
    const text = Object.entries(safeData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
      
    alert(text);
  };

  return (
    <Container className="py-5">
          <EventHandlingDemo />
    <RenderAndCommitDemo />
    <SnapshotDemo />
      <h1 className="text-center mb-4 display-4 fw-bold">Animals</h1>
      
      <Row className="g-4 justify-content-center">
        {animals.map((animal) => (
          <Col 
            key={animal.name} 
            xs={12} 
            sm={6} 
            md={4} 
            className="d-flex justify-content-center"
          >
            <AnimalCard
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              showAdditional={showAdditionalData}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;