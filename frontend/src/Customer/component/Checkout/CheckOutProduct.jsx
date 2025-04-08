// File: CheckOutProduct.jsx
import React, { useState } from "react";
import LoginStep from "./LoginStep";
import DeliveryStep from "./DeliveryStep";
import OrderSummaryStep from "./OrderSummaryStep";
import PaymentStep from "./PaymentStep";
import OrderCompleteStep from "./OrderCompleteStep";

const steps = ["Login", "Delivery", "Order Summary", "Payment", "Done"];

const CheckOutProduct = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    phoneNumber: "",
    postalCode: "",
  });

  const [order, setOrder] = useState({
    items: [
      { name: "Item 1", price: 50 },
      { name: "Item 2", price: 30 },
    ],
    shipping: 10,
  });

  const [payment, setPayment] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
  });

  const [productData, setProductData] = useState(null);

  const validateAddress = () => {
    return Object.values(address).every((value) => value.trim() !== "");
  };

  const handleNext = () => {
    if (currentStep === 2 && !validateAddress()) {
      alert("Please fill all delivery fields.");
      return;
    }

    if (currentStep === 4) {
      const finalData = {
        address,
        order,
        payment,
      };
      setProductData(finalData);
    }

    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleCancelOrder = () => {
    setCurrentStep(1);
    setAddress({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      phoneNumber: "",
      postalCode: "",
    });
    setPayment({
      cardNumber: "",
      cardholderName: "",
      expiryDate: "",
      cvv: "",
    });
    setProductData(null);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <LoginStep />;
      case 2:
        return (
          <DeliveryStep address={address} setAddress={setAddress} />
        );
      case 3:
        return (
          <OrderSummaryStep
            order={order}
            onCancel={handleCancelOrder}
          />
        );
      case 4:
        return <PaymentStep payment={payment} setPayment={setPayment} />;
      case 5:
        return <OrderCompleteStep productData={productData} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 h-screen flex flex-col justify-between">
      {/* Stepper */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`text-center p-2 rounded-full font-medium text-xs sm:text-sm ${
              currentStep === index + 1
                ? "bg-indigo-600 text-white"
                : index + 1 < currentStep
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white p-4 rounded-lg shadow-md flex-1">
        {renderStep()}
      </div>

      {/* Nav buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="px-4 py-2 bg-gray-200 rounded-md disabled:opacity-50"
        >
          Back
        </button>
        {currentStep !== 5 && (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {currentStep === 4 ? "Done" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckOutProduct;
