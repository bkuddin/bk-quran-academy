import React from "react";
import { ButtonGroup as Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../images/error.gif";

const Error = () => {
  return (
    <div className="my-5" style={{ textAlign: "center" }}>
      <img src={img} alt="" />
      <h1 style={{ fontSize: "8rem", color: "#5558C5" }}>Oops!</h1>
      <h2>404-Not Found</h2>
      <p>
        The page you are looking for might have been removed had <br /> its name
        changed or is temporarily unavailable!
      </p>

      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button style={{ backgroundColor: "#5558C5", padding: "10px 30px" }}>
          Go to Home page
        </Button>
      </Link>
    </div>
  );
};

export default Error;
