import React, { useState, useEffect } from 'react';

export default function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const previousImage = () => {
    if (!isTransitioning) {
      const index = (currentIndex - 1 + images.length) % images.length;
      setNextIndex(index);
      setIsTransitioning(true);
    }
  };

  const nextImage = () => {
    if (!isTransitioning) {
      const index = (currentIndex + 1) % images.length;
      setNextIndex(index);
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setCurrentIndex(nextIndex);
      setIsTransitioning(false);
    }, 200); // Adjust the transition duration here (in milliseconds)

    return () => clearTimeout(transitionTimeout);
  }, [nextIndex]);

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className={`current-img ${isTransitioning ? 'transitioning' : ''}`}
        />
        <div className="img-film">
          {images.map((_, index) => (
            <div
              key={index}
              className={currentIndex === index ? 'bubble active' : 'bubble'}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
        <div className="arrow-container">
          <button onClick={previousImage} className="arrows">
            &#8249;
          </button>
          <button onClick={nextImage} className="arrows">
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
}
