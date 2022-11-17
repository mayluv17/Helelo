import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Product from "./components/Product.js";
import "./main.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllproducts();
  }, []);

  async function getAllproducts() {
    const res = await fetch("https://fakestoreapi.com/products/");
    const data = await res.json();
    console.log(data);
    setAllProducts(data);
  }
  const productComponent = allProducts.map((data, index) => (
    <Product key={index} productDetails={data} />
  ));

  return (
    <>
      <Header />
      <Banner />

      <div className="container pb-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          recomended for you
        </h2>
        <div className="grid grid-cols-4 gap-6">{productComponent}</div>
      </div>
      <Nav />
      <Footer />
    </>
  );
}

export default App;
