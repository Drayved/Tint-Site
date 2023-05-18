import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';

export default function SlideShow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return images.length - 1; // Loop to the last image
      }
      return prevIndex - 1;
    });
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0; // Loop to the first image
      }
      return prevIndex + 1;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSwipe = (index) => {
    if (index === images.length + 1) {
      // Reached the cloned last image, loop to the first image
      setCurrentIndex(0);
    } else if (index === 0) {
      // Reached the cloned first image, loop to the last image
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index - 1);
    }
  };

  const renderImages = () => {
    // Clone the first and last images to create a seamless circular loop
    const clonedImages = [images[images.length - 1], ...images, images[0]];

    return clonedImages.map((image, index) => (
      
      <div key={index} className="slide">
        
        <img src={image} alt="Slide" className="current-img" />
        <div className="img-film">{renderBubbles()}</div>
      </div>
    ));
  };

  const renderBubbles = () => {
    // Exclude the cloned images when rendering the bubbles
    return images.map((_, index) => (
      <div
        key={index}
        className={currentIndex === index ? 'bubble active' : 'bubble'}
        onClick={() => setCurrentIndex(index)}
      />
    ));
  };

  return (
    <div className="slideshow-container">
      <div className={window.innerWidth > 600 ? 'slideshow' : ''}>
        {window.innerWidth > 600 ? (
          // Large screens: use arrow buttons
          <>
            <img
              src={images[currentIndex]}
              alt="Slide"
              className="current-img"
            />
            <div className="img-film">{renderBubbles()}</div>
            <div className="arrow-container">
              <button onClick={previousImage} className="arrows">
                &#8249;
              </button>
              <button onClick={nextImage} className="arrows">
                &#8250;
              </button>
            </div>
          </>
        ) : (
          // Small screens: use swipeable views
          <SwipeableViews
            index={currentIndex + 1}
            onChangeIndex={handleSwipe}
            resistance
            resistanceFactor={0.6}
          >
            
            {renderImages()}
          </SwipeableViews>
        )}
      </div>
    </div>
  );
}
