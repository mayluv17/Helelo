import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav } from "./features/cart/favoriteSlice";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Product from "./components/Product.js";
import "./main.css";

function App() {
  const favSelector = useSelector((state) => state.fav);
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const [allProducts, setAllProducts] = useState([]);
  const [favProducts, setFavProducts] = useState(favSelector);

  function handleFav(productId) {
    console.log(productId);
    if (favProducts.includes(productId)) {
      const newFav = favProducts.filter((pid) => {
        return pid === productId;
      });

      setFavProducts(newFav);
      dispatch(addFav(setFavProducts));
    } else {
      setFavProducts((oldFav) => [...oldFav, productId]);
      dispatch(addFav(productId));
    }
  }
  async function getAllproducts() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    // console.log(data);
    setAllProducts(data);
  }
  useEffect(() => {
    getAllproducts();
  }, []);
  const productComponent = allProducts.map((data, index) => (
    <Product key={index} handleFav={handleFav} productDetails={data} />
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
