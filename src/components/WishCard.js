import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFave } from "../features/cart/favoriteSlice";
import { cartAction } from "../features/cart/cartSlice";

export default function WishCard({ data, isIncart }) {
  const favSelector = useSelector((state) => state.fav.value);
  const favProducts = favSelector;
  const dispatch = useDispatch();

  function toggleCart(productData) {
    dispatch(cartAction(productData));
  }

  function handleFav(productData) {
    dispatch(addFave(productData));
  }

  const inCart = isIncart ? "" : "";

  return (
    <>
      <div className="flex items-center justify-between border gap-6 p-4 border-gray-200 rounded">
        <div className="w-28">
          <img src={data.image} alt="datauct 6" className="w-full" />
        </div>
        <div className="w-1/3">
          <h2 className="text-gray-800 text-xl font-medium uppercase">
            {data.title}
          </h2>
          <p className="text-gray-500 text-sm">
            Availability: <span className="text-green-600">In Stock</span>
          </p>
        </div>
        <div className="text-primary text-lg font-semibold">${data.price}</div>
        {isIncart ? (
          "Already in cart"
        ) : (
          <a
            onClick={() => toggleCart(data)}
            className="px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
          >
            add to cart
          </a>
        )}
        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i onClick={() => handleFav(data)} className="fa-solid fa-trash"></i>
        </div>
      </div>
    </>
  );
}
