import React from "react";
import { Card } from "react-bootstrap";
function UserCard({ user }) {
  return (
    <div className="mb-3">
      <Card style={{ width: "80%" }} className="mx-auto">
        <Card.Body>
          <Card.Img src={user.image} />
          <Card.Title>Name: {user.name}</Card.Title>
          <Card.Text>ID: {user.id}</Card.Text>
          <br />
          <Card.Text>Age: {user.age}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
