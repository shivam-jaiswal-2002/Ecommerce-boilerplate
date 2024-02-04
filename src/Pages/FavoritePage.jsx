// FavoritesPage.jsx
import React from 'react';
import { useCart } from '../CartContext';

function FavoritesPage() {
  const { state, removeFromFavorites } = useCart();

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">My Favorite Products</h2>
      <div className="grid grid-cols-5 gap-4 p-5 items-center justify-center">
        {state.favorites.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col bg-white justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover object-center mb-2"
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-blue-500">${product.amount}</p>
            <p className="text-white inline-block border w-6 text-center rounded text-xs bg-green-500 mb-3">
              {product.rating}
            </p>
            <div className="flex">
              <span className="ml-0 cursor-pointer" onClick={() => handleRemoveFromFavorites(product)}>
                {/* Remove button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="red"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritesPage;
