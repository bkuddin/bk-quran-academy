import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import DisplayService from "../../components/DisplayService/DisplayService";
import DisplayService2 from "../../components/DisplayService2/DisplayService2";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./servicesData.JSON")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1 style={{ fontFamily: "Roboto", textAlign: "center", margin: "30px" }}>
        Our Services
      </h1>
      <Row xs={1} md={4} className="g-4 mx-5 my-5">
        {services.map((service) => (
          <DisplayService key={service.id} service={service}></DisplayService>
        ))}
      </Row>

      <div
        style={{ fontFamily: "Roboto", textAlign: "center", margin: "30px" }}
      >
        <h2>Prioritize Your Success.</h2>
        <p>Now is the time to begin your educational journey.</p>
      </div>

      <div>
        <Row xs={1} md={4} className="g-4 mx-5 my-5">
          {services.map((service) => (
            <DisplayService2
              key={service.id}
              service={service}
            ></DisplayService2>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
