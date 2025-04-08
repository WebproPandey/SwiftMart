import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const OrderTracking = () => {
  const location = useLocation();
  const { productData } = location.state || {};

  const [ratings, setRatings] = useState({}); // State to store ratings

  if (!productData) {
    return <p>No order details available.</p>;
  }

  const product = [1, 2, 3, 56, 7, 87];

  const handleRating = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
    alert(`You rated product ${productId} with ${rating} stars!`);
  };

  return (
    <div className="px-[4rem] ">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <div className="min-h-[50vh] w-full static flex gap-2 ">
        <div className="left h-[50vh] w-[30%] bg-red-300"></div>
        <div className="right_orderdata h-[80vh] overflow-y-auto w-full bg-red-800/40 p-2 ">
          {product.map((data) => (
            <div
              key={data}
              className="orderdata w-full flex items-start justify-between mb-4 bg-gray-200 rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-[0.99]"
            >
              {/* Product Image */}
              <div className="productimage h-[30vh] w-[25vh] bg-slate-400 flex-shrink-0 p-4 rounded-md">
                <img
                  src=""
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="productinfo flex-1 flex items-start justify-between rounded-md p-4">
                <div>
                  <h1 className="text-lg font-bold">Product Name</h1>
                  <h1>Size: M</h1>
                  <h1>Color: Black</h1>
                </div>
                <h1 className="mt-2 text-xl font-semibold">₹120</h1>
              </div>

              {/* Delivery Date and Rating */}
              <div className="productDeiveDate w-[30vh] text-left flex-shrink-0 p-4">
                <p>
                  Expected delivery by <br /> <strong>April 15, 2025</strong>
                </p>

                {/* Rating Section */}
                <div className="rating mt-4">
                  <p className="mb-2">Rate this product:</p>
                  <div className="stars flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(data, star)}
                        className={`text-xl ${
                          ratings[data] >= star
                            ? "text-yellow-500"
                            : "text-gray-400"
                        } hover:text-yellow-600`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;