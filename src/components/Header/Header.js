import React from "react";
import { Carousel } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> Quran Recitation tutors in Bangladesh</h3>
            <p>
              A professional Online Quran Teacher with tajweed Through Bengali
              or English medium.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7249191/pexels-photo-7249191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Hire the best online Quran tutors for kids & adults</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7249178/pexels-photo-7249178.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>
              QURAN LEARN offers one of the most effective Arabic and online
              Quran teaching websites
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
