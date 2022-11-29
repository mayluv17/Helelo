import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFave } from "../features/cart/favoriteSlice";
import WishCard from "../components/WishCard";

export default function Wishlist() {
  const favSelector = useSelector((state) => state.fav.value);
  const cart = useSelector((state) => state.cart.value);
  // const cart = useSelector((state) => state.cart.value);
  const favProducts = favSelector;
  const dispatch = useDispatch();

  // function favGetter() {
  //   fetch(`https://fakestoreapi.com/products/`)
  //     .then((res) => res.json)
  //     .then(data =>)
  // }

  const products = favProducts.map((prod) => {
    const isIncart = cart.some((cartItem) => cartItem.id === prod.id);
    return <WishCard key={prod.id} data={prod} isIncart={isIncart} />;
  });

  return (
    //   <div className="container py-4 flex items-center gap-3">
    //     <a href="../index.html" className="text-primary text-base">
    //       <i className="fa-solid fa-house"></i>
    //     </a>
    //     <span className="text-sm text-gray-400">
    //       <i className="fa-solid fa-chevron-right"></i>
    //     </span>
    //     <p className="text-gray-600 font-medium">Profile</p>
    //   </div>
    <>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-9 space-y-4">{products}</div>
      </div>
    </>
  );
}
