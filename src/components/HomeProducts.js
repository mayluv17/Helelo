import React from "react";
import Product from "../components/Product.js";
import Banner from "./Banner.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFave } from "../features/cart/favoriteSlice";
import { cartAction } from "../features/cart/cartSlice";

export default function HomeProducts() {
  const favSelector = useSelector((state) => state.fav.value);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);
  const favProducts = favSelector;

  function toggleCart(productData) {
    dispatch(cartAction(productData));
  }

  function handleFav(productData) {
    dispatch(addFave(productData));
  }

  async function getAllproducts() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    setAllProducts(data);
  }
  useEffect(() => {
    getAllproducts();
  }, []);

  const productComponent = allProducts.map((data, index) => (
    <Product
      key={index}
      toggleCart={toggleCart}
      isFavorite={favProducts.some((cartItem) => cartItem.id === data.id)}
      handleFav={handleFav}
      productDetails={data}
    />
  ));

  return (
    <>
      <Banner />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>
        <div className="grid grid-cols-4 gap-6">{productComponent}</div>
      </div>
    </>
  );
}
