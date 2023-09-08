import React, { useState, useEffect } from "react";
import baznabo from "./baznabo.jpg";
import B from "./B.jpg";
import C from "./C.jpg";
import "./galary.css";

function Galary() {
  const images = [baznabo, B, C,B,C,B,C];
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }, 3000); // Switch every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, images]);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <div className="galarycon">
      <div className="galary">
        <img src={selectedImage} alt="Selected" />
      </div>
      <div className="sidebar">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
    <div className="buttoncon">
    <button className="nav-button prev-button" onClick={handlePrevious}>
        <i className="fas fa-chevron-left"></i> 
      </button>
      <button className="nav-button next-button" onClick={handleNext}>
         <i className="fas fa-chevron-right"></i>
      </button>
      </div>
    </div>
  );
}

export default Galary;
