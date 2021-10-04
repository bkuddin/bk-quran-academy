import React from "react";
import { ButtonGroup as Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DisplayService2.css";

const DisplayService2 = (props) => {
  const { plan } = props.service;
  return (
    <Col>
      <Card style={{ textAlign: "center", fontFamily: "Livvic" }}>
        <Card.Body>
          <p>{plan.option}</p>
          <Card.Title
            style={{
              fontSize: "3rem",
              fontWeight: "700",
              color: "#FFDD40",
              backgroundColor: "#184e77",
              letterSpacing: "2px",
            }}
          >
            {plan.category}
          </Card.Title>
          <Card.Text className="text-body">
            <strong>Class: </strong>
            <p style={{ color: "white" }}>{plan.class}</p>
          </Card.Text>

          <Card.Text className="text-body">
            <strong>Class type: </strong>
            <p style={{ color: "white" }}>{plan.classType}</p>
          </Card.Text>

          <Card.Text className="text-body">
            <strong>Class duration: </strong>
            <p style={{ color: "white" }}>{plan.classDuration}</p>
          </Card.Text>

          <Card.Text className="text-body">
            <strong>Course period: </strong>
            <p style={{ color: "white" }}>{plan.coursePeriod}</p>
          </Card.Text>

          <Card.Text className="text-body">
            <strong>Gender: </strong>
            <p style={{ color: "white" }}>{plan.gender}</p>
          </Card.Text>

          <Card.Text className="text-body">
            <strong>Languages: </strong>
            <p style={{ color: "white" }}>{plan.languages}</p>
          </Card.Text>

          <Link style={{ textDecoration: "none" }} to="/">
            <Button className="btn-register">Register Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayService2;
