import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../features/cart/cartSlice";
import CartCard from "./cartCard";

export default function Cart() {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  function toggleCart(productData) {
    dispatch(cartAction(productData));
  }

  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );

  const cartItems = cart.map((cartItem) => (
    <CartCard
      key={cartItem.id}
      cartDetails={cartItem}
      toggleCart={toggleCart}
    />
  ));

  return (
    <>
      <div className="container py-10 items-center gap-3">
        <div className="col-span-3 space-y-4">
          <h2 className="text-3xl font-medium">Cart</h2>
          <h4>
            check out the list of item and pay using using your credit card
          </h4>
        </div>

        <div className="col-span-9 space-y-4 my-6">
          {cart.length > 0 ? cartItems : `There is no Item in cart`}
        </div>

        <hr />
        <div className="container grid grid-row space-between">
          <div className="col-span-2 mt-6">
            <h4 className="text-2xl">TOTAL: ${total}</h4>
          </div>
          <div className="mt-4">
            <Link className="bg-primary border border-primary text-white px-8 py-2 rounded hover:bg-transparent hover:text-primary transition">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
