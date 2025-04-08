// File: components/checkout/DeliveryStep.jsx
import React from "react";

const DeliveryStep = ({ address, setAddress }) => {
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { name: "firstName", label: "First Name" },
          { name: "lastName", label: "Last Name" },
          { name: "address", label: "Address" },
          { name: "city", label: "City" },
          { name: "state", label: "State" },
          { name: "postalCode", label: "Postal Code" },
          { name: "phoneNumber", label: "Phone Number" },
        ].map(({ name, label }) => (
          <input
            key={name}
            type="text"
            name={name}
            value={address[name]}
            onChange={handleChange}
            placeholder={label}
            className="p-2 border rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default DeliveryStep;
