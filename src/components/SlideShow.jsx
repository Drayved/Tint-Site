import React, { useState, useEffect } from 'react';

export default function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState('');

  const previousImage = () => {
    const index = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const index = (currentIndex + 1) % images.length;
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setSwipeDirection('');
  };

  const handleTouchMove = (e) => {
    if (touchStartX !== null) {
      const touchCurrentX = e.touches[0].clientX;
      const diffX = touchStartX - touchCurrentX;
      const threshold = 50;

      if (diffX > threshold) {
        setSwipeDirection('left');
      } else if (diffX < -threshold) {
        setSwipeDirection('right');
      } else {
        setSwipeDirection('');
      }

      setTouchStartX(null);
    }
  };

  // Automatically switch to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="slideshow-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => {
        setTouchStartX(null);
      }}
    >
      {swipeDirection && (
        <div className="swipe-indicator">
          Swipe {swipeDirection === 'left' ? 'left' : 'right'}
        </div>
      )}
      <div className="slideshow">
        <img
          src={images[currentIndex]}
          alt="Slide"
          className="current-img"
        />
        <div className="img-film">
          {images.map((image, index) => (
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
