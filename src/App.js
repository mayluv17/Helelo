import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomeProducts from "./components/HomeProducts";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import "./main.css";
import Wishlist from "./components/Wishlist";
import Cart from "./components/cart";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomeProducts />} />
        <Route exact path="product/:pid" element={<ProductPage />} />
        <Route exact path="wishlist" element={<Wishlist />} />
        <Route exact path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
