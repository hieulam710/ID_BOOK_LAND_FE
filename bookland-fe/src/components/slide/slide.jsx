import React, { useState } from 'react';
import './test.css';

const SlideCarousel = ({ bookList }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    const index = currentIndex === 0 ? bookList.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const index = currentIndex === bookList.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="slide-carousel">
      <div className="card-container">
        {bookList.map((book, index) => (
          <div
            className={`card ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="prev-button" onClick={handlePrev}>
          Prev
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default SlideCarousel;
