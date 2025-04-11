import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCompleteStep = ({ productData }) => {
  const navigate = useNavigate();

  const handleOrderTracking = () => {
    navigate("/account/order", { state: { productData } });
  };
  console.log(productData);
  

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-green-600 mb-4">
        Order Complete!
      </h2>
      <p className="mb-4">Thank you for your order.</p>
      <button
        onClick={handleOrderTracking}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Track Your Order
      </button>
    </div>
  );
};

export default OrderCompleteStep;