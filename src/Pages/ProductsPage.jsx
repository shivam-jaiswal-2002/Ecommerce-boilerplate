// ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

function ProductsPage() {
  const { addToCart, addToFavorites } = useCart();
  const [products, setProducts] = useState([]);
  const [addedToCart, setAddedToCart] = useState([]);
  const { state } = useCart();

  useEffect(() => {
    // Fetch products from API
    fetch('https://ecommerce-boilerplate-kappa.vercel.app/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart((prev) => [...prev, product.id]);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
  };

  return (
    <div>
      <div>
        {/* Button to navigate to FavoritesPage */}
        <Link to="/fav">
          <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            View Favorites
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-4 p-5 items-center justify-center">
        {products.map((product) => (
          <div key={product.id} className="border p-4 flex flex-col bg-white justify-center">
            <Link to={`/products/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover object-center mb-2"
              />
            </Link>
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-blue-500">${product.amount}</p>
            <p className="text-white inline-block border w-6 text-center rounded text-xs bg-green-500 mb-3">
              {product.rating}
            </p>
            <div className="flex">
              <span className="ml-0 cursor-pointer" onClick={() => handleAddToFavorites(product)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={state.favorites.some((favProduct) => favProduct.id === product.id) ? 'red' : 'gray'}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </span>
              <span className="ml-auto cursor-pointer">
                <MdAddShoppingCart
                  size={25}
                  color={addedToCart.includes(product.id) ? 'black' : 'gray'}
                  onClick={() => handleAddToCart(product)}
                />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
