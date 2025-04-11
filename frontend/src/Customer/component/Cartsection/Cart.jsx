import React from 'react';
import { useNavigate } from 'react-router'


const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Basic Tee',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
      price: 35,
      size: 'M',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Casual Shirt',
      image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
      price: 50,
      size: 'L',
      quantity: 2,
    },
    {
        id: 3,
        name: 'Basic Tee',
        image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        price: 60,
        size: 'M',
        quantity: 1,
      },
      {
        id: 4,
        name: 'Casual Shirt',
        image: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg',
        price: 50,
        size: 'L',
        quantity: 2,
      },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCharge = 10;
  const tax = (subtotal * 0.1).toFixed(2); // 10% tax
  const total = (subtotal + shippingCharge + parseFloat(tax)).toFixed(2);
  const navigate =  useNavigate()

  const handleCheckOut = () => {
    navigate("/checkout?step=2")
  }


  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 h-[80vh]  sticky  top-0 px-[4rem] ">
      {/* Left Side: Cart Items */}
      <div className='flex flex-col w-[60%]'>
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <div className="CartItems  flex flex-col   gap-4 bg-white p-6 rounded-lg shadow-md overflow-y-auto overflow-hidden" >
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 border-b pb-4 mb-4">
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />
            {/* Product Details */}
            <div className="flex-1">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">Size: {item.size}</p>
              <div className='flex gap-2'>
              <p className="text-sm text-black">Price: ₹{item.price}</p>
              <p className="text-sm text-gray-600 line-through" >₹211</p>
              <p className="text-sm text-green-500">5% off</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <button className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  -
                </button>
                <span>{item.quantity}</span>
                <button className="px-2 py-1 bg-gray-200 rounded-md hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>
            {/* Remove Button */}
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        ))}
      </div>
      </div>


      {/* Right Side: Order Summary */}
      <div className="w-full lg:w-[40%] h-fit bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Shipping Charge</span>
            <span className="font-medium">${shippingCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium">${tax}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span className="text-lg font-semibold">Total</span>
            <span className="text-lg font-semibold">${total}</span>
          </div>
        </div>
        <button onClick={handleCheckOut} className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;