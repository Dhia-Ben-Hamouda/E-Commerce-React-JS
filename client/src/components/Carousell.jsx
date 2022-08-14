import React from "react";
import { Carousel } from "react-bootstrap";
import img5 from "../images/carousel/img5.jpg";
import img6 from "../images/carousel/img6.jpg";
import img7 from "../images/carousel/img7.jpg";
import img12 from "../images/carousel/img12.jpg";

const Carousell = () => {
  return (
    <>
      <Carousel interval={4000} style={ {padding:"0 1rem" , marginTop:"1rem" , marginBottom:"1rem"} }>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img6}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img7}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img12}
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousell;