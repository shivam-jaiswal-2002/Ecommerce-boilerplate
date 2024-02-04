// // MyCart.jsx

// import React from "react";
// import { useCart } from "../CartContext";

// function MyCart() {
//   const { state, incrementQuantity, decrementQuantity } = useCart();

//   return (
//     <div className="bg-blue-50">
//       {/* left part */}
//       <div className="bg-white inline-block p-10 m-10 border border-spacing-1 border-solid">
//         <h2 className="mb-5">My Cart</h2>
//         <ul className="m-2">
//           {state.cart.map((item, index) => (
//             <li key={index} className="flex items-center mb-2">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-20 h-20 object-cover object-center mr-2"
//               />
//               <div className="flex flex-col">
//                 <span>
//                   {item.title} - ${item.amount}
//                 </span>
//                 <div className="flex items-center">
//                   <button
//                     className="mr-2 p-1 border"
//                     onClick={() => decrementQuantity(item.id)}
//                   >
//                     -
//                   </button>
//                   <span className="mr-2">{item.quantity}</span>
//                   <button
//                     className="p-1 border"
//                     onClick={() => incrementQuantity(item.id)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* right part */}
//       <div>

//       </div>
//     </div>
//   );
// }

// export default MyCart;


import React, { useState } from "react";
import { useCart } from "../CartContext";
import CheckoutPopup from "./CheckoutPopup";

function MyCart() {
  const { state, incrementQuantity, decrementQuantity } = useCart();

  // Calculate total price of all items in the cart
  const totalPrice = state.cart.reduce(
    (total, item) => total + item.amount * item.quantity,
    0
  );

  // Delivery charge
  const deliveryCharge = 50;
  const discount = 100;
  // Total amount
  const totalAmount = totalPrice + deliveryCharge - discount;

  const [isCheckoutPopupVisible, setCheckoutPopupVisible] = useState(false);

  const handleCheckout = () => {
    // Perform any checkout logic here
    // For demonstration purposes, let's just toggle the visibility of the popup
    setCheckoutPopupVisible(true);
  };

  const handlePopupClose = () => {
    setCheckoutPopupVisible(false);
  };

  return (
    <div className="bg-blue-50 flex">
      {/* left part */}
      <div className="bg-white inline-block p-10 m-10 border border-spacing-1 border-solid">
        <h2 className="mb-5">My Cart</h2>
        <ul className="m-2">
          {state.cart.map((item, index) => (
            <li key={index} className="flex items-center mb-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover object-center mr-2"
              />
              <div className="flex flex-col">
                <span>
                  {item.title} - ${item.amount}
                </span>
                <div className="flex items-center">
                  <button
                    className="mr-2 p-1 border"
                    onClick={() => decrementQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mr-2">{item.quantity}</span>
                  <button
                    className="p-1 border"
                    onClick={() => incrementQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
          onClick={handleCheckout}
        >
          Place Order
        </button>
      </div>

      {/* right part */}
      <div className="bg-white inline-block p-10 m-10 border border-spacing-1 border-solid h-30">
        <h2 className="mb-5 font-semibold text-gray-500 text-xl">
          Price Details
        </h2>
        <div className="p-2">
          <div className="flex justify-between mb-2">
            <span>Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="mr-5">Delivery Charge: </span>
            <span>${deliveryCharge.toFixed(2)}</span>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="flex justify-between">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Popup */}
      {isCheckoutPopupVisible && (
        <CheckoutPopup onClose={handlePopupClose} />
      )}
    </div>
  );
}

export default MyCart;
