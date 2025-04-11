import React from "react";

const OrderDetails = () => {
  const orders = [
    { id: 1, name: "Product Name", status: "Delivered", date: "April 5, 2025" },
    { id: 2, name: "Product name", status: "Out for Delivery", date: "April 9, 2025" },
    { id: 3, name: "Product name", status: "Shipped", date: "April 8, 2025" },
    { id: 4, name: "Product name", status: "Order Confirmed", date: "April 7, 2025" },
    { id: 5, name: "Product name", status: "Order Placed", date: "April 6, 2025" },
  ];

  const deliveredOrders = orders.filter((order) => order.status === "Delivered");
  const pendingOrders = orders.filter((order) => order.status !== "Delivered");

  return (
    <div className="p-6 px-[4rem]">
      {/* Order Details Section */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-2">Order Details</h2>
        <p className="text-gray-700">Order ID: #123456789</p>
        <p className="text-gray-700">Order Date: April 5, 2025</p>
        <p className="text-gray-700">Total Amount: ₹5000</p>
      </div>

      {/* Order Progress Tracker */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Order Progress</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              1
            </div>
            <p className="text-sm mt-2">Order Placed</p>
          </div>
          <div className="h-1 w-full bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              2
            </div>
            <p className="text-sm mt-2">Order Confirmed</p>
          </div>
          <div className="h-1 w-full bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              3
            </div>
            <p className="text-sm mt-2">Shipped</p>
          </div>
          <div className="h-1 w-full bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              4
            </div>
            <p className="text-sm mt-2">Out for Delivery</p>
          </div>
          <div className="h-1 w-full bg-gray-300 mx-2"></div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              5
            </div>
            <p className="text-sm mt-2">Delivered</p>
          </div>
        </div>
      </div>

      {/* PendingOrders Section */}
      <div className="  bg-gray-100 p-4  rounded-lg shadow-md  mb-6 top-0 sticky   h-[100vh] overflow-hidden ">
        <h2 className="text-xl font-bold mb-4">Pending Orders</h2>
        <div className="PendingOrders overflow-y-auto h-full ">
         {pendingOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-start gap-4    bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <div className="productimage h-[30vh] w-[25vh] bg-slate-400 flex-shrink-0 p-4 rounded-md">
                <img
                  src=""
                  alt="Product"
                  className="h-full w-full object-cover"
                />
            </div>
            <div>
              <h3 className="text-lg font-bold">{order.name}</h3>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">Date: {order.date}</p>
            </div>
          </div>
         ))}
           {deliveredOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-md mb-4"
          >
            <div className="productimage h-[30vh] w-[25vh] bg-slate-400 flex-shrink-0 p-4 rounded-md">
                <img
                  src=""
                  alt="Product"
                  className="h-full w-full object-cover"
                />
            </div>
            <div>
              <h3 className="text-lg font-bold">{order.name}</h3>
              <p className="text-gray-600">Status: {order.status}</p>
              <p className="text-gray-600">Date: {order.date}</p>
            </div>
          </div>
        ))}
        </div>
      </div>

      {/* <div className="bg-gray-100 p-4   rounded-lg shadow-md    h-[50vh] overflow-hidden">
        <h2 className="text-xl font-bold mb-4">Delivered Orders</h2>
       <div className="overflow-y-auto h-full " >
      
       </div>

      </div> */}
    </div>
    
  );
};

export default OrderDetails;