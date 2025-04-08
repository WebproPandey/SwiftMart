import React from 'react';
import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';

const UserReview = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'https://via.placeholder.com/50',
      rating: 4,
      review: 'Great product! The quality is amazing, and it arrived on time.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'https://via.placeholder.com/50',
      rating: 5,
      review: 'Absolutely love it! Highly recommend this to everyone.',
    },
    {
      id: 3,
      name: 'Alice Johnson',
      photo: 'https://via.placeholder.com/50',
      rating: 3,
      review: 'The product is good, but the delivery was delayed.',
    },
    {
        id: 4,
        name: 'Alice Johnson',
        photo: 'https://via.placeholder.com/50',
        rating: 3,
        review: 'The product is good, but the delivery was delayed.',
      },
  ];

  return (
    <div className="userReview space-y-6 overflow-y-auto h-[50vh]">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
        >
          {/* User Photo */}
          <img
            src={review.photo}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Review Content */}
          <div className="flex-1">
            {/* User Name */}
            <h2 className="text-sm font-semibold text-gray-800">{review.name}</h2>

            {/* Rating */}
            <div className="flex items-center space-x-1 mt-1">
              {[...Array(5)].map((_, index) =>
                index < review.rating ? (
                  <SolidStarIcon
                    key={index}
                    className="h-5 w-5 text-yellow-500"
                  />
                ) : (
                  <OutlineStarIcon
                    key={index}
                    className="h-5 w-5 text-gray-300"
                  />
                )
              )}
            </div>

            {/* Review Text */}
            <p className="mt-2 text-sm text-gray-600">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserReview;