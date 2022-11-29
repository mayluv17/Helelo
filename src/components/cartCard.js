import React from "react";

export default function cartCard({ cartDetails, toggleCart }) {
  return (
    <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
      <div className="w-28">
        <img src={cartDetails.image} alt="product 6" className="w-full" />
      </div>
      <div className="w-1/3">
        <h2 className="text-gray-800 text-xl font-medium uppercase">
          {cartDetails.title}
        </h2>
        <p className="text-gray-500 text-sm">
          Availability: <span className="text-green-600">In Stock</span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">
        ${cartDetails.price}
      </div>

      <div className="text-gray-600 cursor-pointer hover:text-primary">
        <i
          onClick={() => toggleCart(cartDetails)}
          className="fa-solid fa-trash"
        ></i>
      </div>
    </div>
  );
}
