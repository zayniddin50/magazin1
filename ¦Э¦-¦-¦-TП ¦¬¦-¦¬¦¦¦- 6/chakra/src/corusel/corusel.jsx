import React, { Component } from "react";
import Slider from "react-slick";
import Img1 from "../assets/img/main_page_banner.jpg.png";
import { Container, Image } from "@chakra-ui/react";

const Corusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image borderRadius={"2xl"} src={Img1} />
        </div>
        <div>
          <Image borderRadius={"2xl"} src={Img1} />
        </div>
        <div>
          <Image borderRadius={"2xl"} src={Img1} />
        </div>
        <div>
          <Image borderRadius={"2xl"} src={Img1} />
        </div>
      </Slider>
    </div>
  );
};
export default Corusel;
