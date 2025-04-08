// File: components/checkout/OrderSummaryStep.jsx
import React from "react";

const OrderSummaryStep = ({ order, onCancel }) => {
  const total = order.items.reduce((sum, item) => sum + item.price, 0) + order.shipping;

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {order.items.map((item, index) => (
          <li key={index} className="flex justify-between mb-1">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
        <li className="flex justify-between font-medium">
          <span>Shipping</span>
          <span>${order.shipping}</span>
        </li>
        <li className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </li>
      </ul>
      <button
        onClick={onCancel}
        className="text-red-600 underline text-sm"
      >
        Cancel Order
      </button>
    </div>
  );
};

export default OrderSummaryStep;
