import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function PlayerForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // {firstName: 'a', lastName: 'b', email: 'c@sd.com'}
    // console.log(inputs);

    fetch("http://localhost:4000/players", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).catch((error) => {
      console.error("Error:", error);
    });

    setInputs({});
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={inputs.firstName || ""}
          onChange={handleChange}
          placeholder="Type first name..."
        />
        <Form.Label>Last name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Type last name..."
          name="lastName"
          value={inputs.lastName || ""}
          onChange={handleChange}
        />
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Type email..."
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add a Player
      </Button>
    </Form>
  );
}
