import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderTracking = () => {
  const location = useLocation();
  const { productData } = location.state || {};

  const [ratings, setRatings] = useState({}); 

  // if (!productData) {
  //   return <p>No order details available.</p>;
  // }

  const product = [1, 2, 3, 56, 7, 87];

  const handleRating = (productId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [productId]: rating,
    }));
    alert(`You rated product ${productId} with ${rating} stars!`);
  };
 
  const navigate = useNavigate()

  return (
    <div className="px-[4rem] ">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <div className="min-h-[50vh] w-full static flex gap-2 ">
      <div className="left h-[50vh] w-[30%] bg-gray-100 rounded-lg p-4 shadow-md">
  <h1 className="text-xl font-bold mb-4 text-gray-800">Filter</h1>
  <div className="h-full">
    <h1 className="text-lg font-semibold capitalize mb-3 text-gray-700">Order Status</h1>
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          id="on-the-way"
        />
        <label htmlFor="on-the-way" className="ml-3 text-lg text-gray-600">
          On The Way
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          id="delivered"
        />
        <label htmlFor="delivered" className="ml-3 text-lg text-gray-600">
          Delivered
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          id="cancelled"
        />
        <label htmlFor="cancelled" className="ml-3 text-lg text-gray-600">
          Cancelled
        </label>
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          id="returned"
        />
        <label htmlFor="returned" className="ml-3 text-lg text-gray-600">
          Returned
        </label>
      </div>
    </div>
  </div>
      </div>
        <div className="right_orderdata h-[80vh] overflow-y-auto w-full  p-2 ">
          {product.map((data) => (
            <div
             onClick={() => navigate(`/account/order/${5}`)}
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