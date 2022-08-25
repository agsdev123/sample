import React from 'react'
import Slider from "react-slick";
import "./ServicesSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSlider = () => {

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
        <div>
            <div className='ServicesSlider_conatiner'>
                {/* <h3>IBUILTUP ENGINEERING SERVICES - TUTORIAL</h3> */}
                <div className='ServicesSlider_slider'>
                    <Slider {...settings}>
                        <div className='ServicesSlider_data'>
                            <img src={require("../../../../Assets/services1.webp")} />
                            <h4>We retain top Engineers who are passionate to execute your project safely and efficiently</h4>
                        </div>
                        <div className='ServicesSlider_data'>
                        <img src={require("../../../../Assets/services2.webp")} />
                            <h4>We are aware of the current market conditions and customers anxiety for the desired product. </h4>
                        </div>
                        <div className='ServicesSlider_data'>
                        <img src={require("../../../../Assets/services3.webp")} />
                            <h4> Built by Engineers & Architects </h4>
                        </div>
                        <div className='ServicesSlider_data'>
                        <img src={require("../../../../Assets/services4.webp")} />
                            <h4> Lean methods to minimize wastages</h4>
                        </div>
                        <div className='ServicesSlider_data'>
                        <img src={require("../../../../Assets/services5.webp")} />
                            <h4> Your money at work, best of the best just for you! </h4>
                        </div>
                        <div className='ServicesSlider_data'>
                        <img src={require("../../../../Assets/services6.webp")} />
                            <h4> Value through expertise - Ethical Builder</h4>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ServicesSlider