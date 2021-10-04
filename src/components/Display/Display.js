import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Display.css";

const Display = (props) => {
  const { title, description, img } = props.topic;
  return (
    <div>
      <Col>
        <Card
          className="display-card"
          style={{ width: "85%", borderRadius: "20px" }}
        >
          <Card.Img variant="top" w-25 src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Display;
