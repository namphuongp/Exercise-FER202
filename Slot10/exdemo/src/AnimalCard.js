import React from "react";
import PropTypes from "prop-types";
import { Card, Button, ListGroup } from "react-bootstrap";

export default function AnimalCard({
  name,
  scientificName,
  size,
  diet,
  additional = {
    notes: "No Additional Information",
    link: "No Additional Information",
  },
  showAdditional,
}) {
  return (
    <>
      <Card className="shadow p-3 border-0 fw-bold">
        <h2 className="text-danger fw-bold text-center my-2">{name}</h2>

        <Card.Body className="p-0 mt-2">
          <ListGroup variant="flush">
            <div
              style={{
                padding: "10px",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <strong>Scientific Name:</strong> {scientificName}
            </div>

            <div
              style={{
                padding: "10px",
                borderBottom: "1px solid #dee2e6",
              }}
            >
              <strong>Size:</strong> {size} kg
            </div>

            <div
              style={{
                padding: "10px",
              }}
            >
              <strong>Diet:</strong> {diet.join(", ")}.
            </div>
          </ListGroup>

          <div className="text-center mt-3">
            <Button
              variant="danger"
              style={{ fontWeight: "bold", padding: "8px 20px" }}
              onClick={() => showAdditional(additional)}
            >
              More Info
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

// Kiểm tra kiểu dữ liệu với PropTypes[cite: 1]
AnimalCard.propTypes = {
  name: PropTypes.string.isRequired,
  scientificName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  additional: PropTypes.shape({
    link: PropTypes.string,
    notes: PropTypes.string,
  }),
  showAdditional: PropTypes.func.isRequired,
};

// Khai báo giá trị mặc định cho prop không bắt buộc[cite: 1]
AnimalCard.defaultProps = {
  additional: {
    notes: "No Additional Information",
    link: "No Additional Information",
  },
};
