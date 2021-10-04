import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import Display from "../../components/Display/Display";

const Home = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    fetch("./topics.json")
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);
  return (
    <div className="py-5">
      <h1 style={{ textAlign: "center" }}>Our Recent Courses</h1>
      <Row xs={2} md={4} className="g-4">
        {topics.map((topic) => (
          <Display key={topic.key} topic={topic}></Display>
        ))}
      </Row>
    </div>
  );
};

export default Home;
