import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner3.jpg";
function Banner() {
  return (
    <div className="">
      <h2 className="text-center">PROMOTIONAL BANNER</h2>
      <div
        className="ms-auto me-auto"
        style={{ width: "70%" }}
      >
        <Carousel>
          <Carousel.Item className="">
            <img src={banner1} />
            <h2>FASHION COLLECTION 2026</h2>
          </Carousel.Item>
          {/* <h3>FASHION COLLECTION 2026</h3> */}
         <Carousel.Item>
            <img src={banner2} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner3} />
          </Carousel.Item>
          </Carousel>
      </div>
    </div>
  );
}

export default Banner;
