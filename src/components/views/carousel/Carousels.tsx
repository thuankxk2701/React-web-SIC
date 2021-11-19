import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { supArrs } from "./support";

const Carousels: React.FC = () => {
  return (
    <Carousel fade>
      {supArrs &&
        supArrs.map((supArr, index) => (
          <Carousel.Item key={index}>
            <img className="d-block w-100 image--carousel" src={supArr} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default Carousels;
