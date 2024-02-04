import React from "react";

const CheckoutPopup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="green"
            className="w-20 h-20 m-auto"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold m-auto text-center">
          Order Placed Successfully!
        </h2>
        <p className="text-center">It will be delivered in 5 days</p>
        <div className="mx-20">
        <button
          className="bg-green-500 text-white py-2 px-10 rounded mt-4"
          onClick={onClose}
        >
          Close
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutPopup;
