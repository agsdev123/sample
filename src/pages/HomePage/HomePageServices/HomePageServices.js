import React from "react";
import Slider from "react-slick";
import "./HomePageServices.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageServices = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerMode: false,
          variableWidth: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true,
          autoplay: false,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="HomePageServices_conatiner">
      <h3>IBUILTUP ENGINEERING SERVICES - TUTORIAL</h3>
      <div className="HomePageServices_slider">
        <Slider {...settings}>
          <div className="service_discription">
            <img src={require("../../../Assets/s1.jpg")} />
            <h4>Editable Drawing for your plot size</h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s2.webp")} />
            <h4>Get a high level and a detailed level estimation for your paradise</h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s3.webp")} />
            <h4>TECHNICAL EXPERT ON THE SITE - ATM - ANYTIME MAN</h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s43.webp")} />
            <h4>TRANSPARENCY - TIME AND MONEY WITH IBUILTUP</h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s5.webp")} />
            <h4>Full Vaastu Report as per your site coordinates</h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s6.webp")} />
            <h4>
              EXCUTED BY EXPERTS AND OUR EXPERTS ARE NOT JUST THROUGH EXPERRIENCE, ALSO ARE
              QUALIFIED THROUGH EDUCATION
            </h4>
          </div>
          <div className="service_discription">
            <img src={require("../../../Assets/s7.webp")} />
            <h4>iBuiltup - Dashboard - All Rights Reserved</h4>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HomePageServices;
