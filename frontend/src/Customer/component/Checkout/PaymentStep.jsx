// File: components/checkout/PaymentStep.jsx
import React from "react";

const PaymentStep = ({ payment, setPayment }) => {
  const handleChange = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="cardholderName"
          value={payment.cardholderName}
          onChange={handleChange}
          placeholder="Cardholder Name"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="cardNumber"
          value={payment.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="expiryDate"
          value={payment.expiryDate}
          onChange={handleChange}
          placeholder="MM/YY"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="cvv"
          value={payment.cvv}
          onChange={handleChange}
          placeholder="CVV"
          className="p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default PaymentStep;
