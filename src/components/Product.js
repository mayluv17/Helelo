import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Product({
  productDetails,
  handleFav,
  isFavorite,
  toggleCart,
}) {
  //initiate favorite state from redux
  const cart = useSelector((state) => state.cart.value);
  const isFavoriteUi = isFavorite ? "bg-primary" : "";

  //check if product is in cart
  const cartExist = cart.some((cartItem) => {
    return cartItem.id === productDetails.id;
  });

  return (
    <>
      <div className="bg-white shadow rounded overflow-hidden group">
        <div className="relative">
          <div
            className="w-full prod-img"
            style={{ backgroundImage: `url("${productDetails.image}")` }}
          ></div>
          <div
            className="absolute inset-0 bg-black bg-opacity-40 flex items-top 
                    justify-right gap-2 opacity-0 group-hover:opacity-100 transition"
          >
            <a
              onClick={() => handleFav(productDetails)}
              className={`${isFavoriteUi} ml-2 mt-2 text-white text-lg w-9 h-8 rounded-full flex items-center justify-center hover:bg-red-800 transition`}
              title="add to wishlist"
            >
              <i className="fa-solid fa-heart"></i>
            </a>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <Link to={`product/${productDetails.id}`}>
            <h4 className="font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
              {productDetails.title.substr(0, 20)}...
            </h4>
          </Link>
          <div className="flex items-baseline mb-1 space-x-2">
            <p className="text-xl text-primary font-semibold">
              ${productDetails.price}
            </p>
            <p className="text-sm text-gray-400 line-through">
              ${productDetails.price / 4}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex gap-1 text-sm text-yellow-400">
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
              <span>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="text-xs text-gray-500 ml-3">
              ({productDetails.rating.count})
            </div>
          </div>
        </div>

        <button
          onClick={() => toggleCart(productDetails)}
          className={`block w-full py-1 text-center text-white  border ${
            cartExist ? "bg-transparent text-primary" : "bg-primary"
          } border-primary rounded-b hover:bg-transparent hover:text-primary transition`}
        >
          {cartExist ? "Remove from Cart" : "Add to cart"}
        </button>
      </div>
    </>
  );
}
