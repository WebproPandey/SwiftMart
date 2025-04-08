import React from 'react';

const RatingReview = () => {
  const ratings = [
    { label: 'Excellent', percentage: 70, color: 'bg-green-500' },
    { label: 'Very Good', percentage: 20, color: 'bg-blue-500' },
    { label: 'Good', percentage: 5, color: 'bg-yellow-500' },
    { label: 'Average', percentage: 3, color: 'bg-orange-500' },
    { label: 'Poor', percentage: 2, color: 'bg-red-500' },
  ];

  return (
    <section className="p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-lg font-semibold mb-4">Recent Review & Rating</h1>
      <div className="w-full space-y-4">
        {ratings.map((rating, index) => (
          <div key={index} className="flex items-center space-x-4">
            {/* Label */}
            <span className="w-24 text-sm font-medium text-gray-700">{rating.label}</span>
            {/* Progress Bar */}
            <div className="flex-1 h-2 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`h-full ${rating.color}`}
                style={{ width: `${rating.percentage}%` }}
              ></div>
            </div>
            {/* Percentage */}
            <span className="text-sm font-medium text-gray-700">{rating.percentage}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RatingReview;