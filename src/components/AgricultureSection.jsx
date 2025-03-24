import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AgricultureSection.css";

const AgricultureSection = () => {
  const images = [
    "/src/assets/fam1.jpg",
    "/src/assets/fam2.jpg",
    "/src/assets/fam3.jpg",
    "/src/assets/fam4.jpg",
    "/src/assets/fam5.jpg",
  ];

  // Carousel settings for small screens
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="agriculture-section">
      {/* Header Text */}
      <h2 className="fw-normal my-5 container">
        Changing the Game in Farming with Sustainable Practices and Cool
        Technology, Shape the Future of Agriculture
      </h2>

      {/* Original Image Layout for Large Screens */}
      <div className="image-container1">
        <img src={images[0]} alt="Farming 1" className="image img6 slide-up" />
        <img src={images[1]} alt="Farming 2" className="image img7 slide-left" />
        <img src={images[2]} alt="Farming 3" className="image img3 slide-right" />
        <img src={images[3]} alt="Farming 4" className="image img4 slide-left" />
        <img src={images[4]} alt="Farming 5" className="image img5 slide-down" />
      </div>

      {/* Decorative Dots */}
      <div className="decorative-dots top-left"></div>
      <div className="decorative-dots bottom-right"></div>

      {/* Carousel for Small Screens */}
      <div className="carousel-container">
        <Slider {...carouselSettings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Farming ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AgricultureSection;
