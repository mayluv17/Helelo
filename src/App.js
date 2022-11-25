import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFave, removeFav } from "./features/cart/favoriteSlice";
import { cartAction } from "./features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Product from "./components/Product.js";
import "./main.css";

function App() {
  const favSelector = useSelector((state) => state.fav.value);
  const dispatch = useDispatch();

  const [allProducts, setAllProducts] = useState([]);

  //initiate favorite state from redux
  const favProducts = favSelector;

  function handleFav(productId) {
    if (favProducts && favProducts.includes(productId)) {
      dispatch(removeFav(productId));
    } else {
      dispatch(addFave(productId));
    }
  }

  function toggleCart(productData) {
    dispatch(cartAction(productData));
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
      isFavorite={favProducts.includes(data.id)}
      handleFav={handleFav}
      productDetails={data}
    />
  ));

  return (
    <>
      <Header />
      <Nav />
      <Banner />
      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>
        <div className="grid grid-cols-4 gap-6">{productComponent}</div>
      </div>
      <Footer />
    </>
  );
}

export default App;
