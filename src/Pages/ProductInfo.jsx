import React from "react";
import { useParams } from "react-router-dom";

function ProductInfo({ products }) {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  console.log(product);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex h-full bg-white">
      {/* Left half - Image */}
      <div className="w-1/2 p-4 flex justify-center items-center">
        <span>
          <img
            src={product.image}
            alt={product.title}
            className="w-30 h-30"
          />
        </span>
      </div>

      {/* Horizontal Line */}
      <div className="border border-l-emerald-400 border-b-8"></div>

      {/* Right half - Product Info */}

      <div className="w-1/2 p-10 m-10">
        <h2 className="text-3xl font-bold mb-4">{product.title}</h2>

        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold mb-4">${product.amount}</p>
        <div className="flex">
          <button className="text-black border border-black bg-white p-4">
            Buy Now
          </button>
          <button className="text-white bg-black p-4 ml-auto">
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
