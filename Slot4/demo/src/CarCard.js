import React from "react";
import { Card } from "react-bootstrap";
function CarCard({car}) {
  return (
    <div className="mb-3">
      <Card style={{ width: "400px" }} className={`mx-auto bg-${car.color}`}>
        <Card.Body>
          <Card.Img style={{ height: "200px" }} src={car.image} />
          <Card.Text className="text-center">{car.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CarCard;
