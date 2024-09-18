// src/ImageSlider.js
import React, { useState } from 'react';
import './ImageSlider.css'; // For styling the slider

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle right arrow click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle left arrow click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {/* Left arrow */}
      <button className="left-arrow" onClick={prevSlide}>
        &#10094;
      </button>

      {/* Display the current image */}
      <div className="slider-image">
        <img src={images[currentIndex]} alt="slider" />
      </div>

      {/* Right arrow */}
      <button className="right-arrow" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
