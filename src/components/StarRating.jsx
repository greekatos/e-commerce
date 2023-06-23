import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
    setShowSnackbar(true);

    setTimeout(() => {
      setShowSnackbar(false);
    }, 2000);
  };

  const handleStarHover = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className='flex items-center mt-4'>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns='http://www.w3.org/2000/svg'
          className={`h-6 w-6 ${
            star <= (hoverRating || rating)
              ? "text-yellow-500"
              : "text-gray-300"
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarHover(star)}
          onMouseLeave={handleMouseLeave}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 2l3.09 6.32L22 9.25l-5 4.87 1.18 6.84L12 17.32l-6.18 3.64L7 14.12l-5-4.87 6.91-1.93L12 2z'
          />
        </svg>
      ))}
      {showSnackbar && (
        <div className='bg-[#228B22] text-white px-4 py-2 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
          Thank you for your review!
        </div>
      )}
    </div>
  );
};

export default StarRating;
