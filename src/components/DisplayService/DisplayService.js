import React from "react";
import { Card, Col } from "react-bootstrap";
import "./DisplayService.css";

const DisplayService = (props) => {
  console.log(props.service);
  const { service, content, img } = props.service;

  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} className="w-100" />
          <Card.Body>
            <Card.Title>{service}</Card.Title>
            <Card.Text>{content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default DisplayService;
