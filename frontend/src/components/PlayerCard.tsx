import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type PlayerCardProps = {
  playerFirstName: String;
  playerLastName: String;
  playerEmail: String;
  handleDelete: void;
};

export default function PlayerCard({
  playerFirstName,
  playerLastName,
  playerEmail,
  handleDelete,
}: PlayerCardProps) {
  return (
    <Card className="m-2" style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>
          {playerFirstName} {playerLastName}
        </Card.Title>
        <Card.Text>Email is {playerEmail}</Card.Text>
        <div className="d-flex justify-content-space-between">
          <Button variant="primary">Edit Player</Button>
          <Button onClick={handleDelete} variant="danger">
            Delete Player
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
