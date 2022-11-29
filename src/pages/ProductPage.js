import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFave } from "../features/cart/favoriteSlice";
import { cartAction } from "../features/cart/cartSlice";

export default function ProductPage() {
  const favSelector = useSelector((state) => state.fav.value);
  const cart = useSelector((state) => state.cart.value);
  const favProducts = favSelector;
  const dispatch = useDispatch();
  const { pid } = useParams();
  const [productData, setProductData] = useState({});
  const url = `https://fakestoreapi.com/products/` + pid;

  const isFav = favProducts.some((cartItem) => cartItem.id === parseInt(pid));
  const isFavoriteUi = isFav
    ? "bg-primary text-white"
    : "border-gray-300 text-gray-600 bg-transparent";

  function handleFav(productData) {
    dispatch(addFave(productData));
  }
  //check if product is in cart

  function toggleCart(productData) {
    dispatch(cartAction(productData));
  }

  const cartExist = cart.some((cartItem) => {
    return cartItem.id === parseInt(pid);
  });

  async function getProduct() {
    const res = await fetch(url);
    const data = await res.json();
    setProductData(data);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div className="container py-4 flex items-center gap-3">
        <a href="/" className="text-primary text-base">
          <i className="fa-solid fa-house"></i>
        </a>
        <span className="text-sm text-gray-400">
          <i className="fa-solid fa-chevron-right"></i>
        </span>
        <p className="text-gray-600 font-medium">Product</p>
      </div>

      <div className="container grid grid-cols-2 gap-6">
        <div>
          <img src={productData.image} alt="product" className="w-8/12" />
        </div>

        <div>
          <h2 className="text-3xl font-medium uppercase mb-2">
            {productData.title}
          </h2>
          <div className="flex items-center mb-4">
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
            <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
          </div>
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span>Availability: </span>
              <span className="text-green-600">In Stock</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Brand: </span>
              <span className="text-gray-600">Apex</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">Category: </span>
              <span className="text-gray-600">{productData.category}</span>
            </p>
            <p className="space-x-2">
              <span className="text-gray-800 font-semibold">SKU: </span>
              <span className="text-gray-600">BE45VGRT</span>
            </p>
          </div>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
            <p className="text-xl text-primary font-semibold">
              ${productData.price}
            </p>
            <p className="text-base text-gray-400 line-through">
              ${Math.round(productData.price * 2.23)}
            </p>
          </div>

          <p className="mt-4 text-gray-600">
            {productData.description}
            asperiores inventore suscipit, velit consequuntur, voluptate
            doloremque iure necessitatibus adipisci magnam porro.
          </p>

          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                +
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3 border-b border-gray-200 pb-5 pt-5">
            <a
              onClick={() => toggleCart(productData)}
              className={`${
                !cartExist ? "bg-primary text-white" : "bg-white text-primary"
              }  border border-primary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition `}
            >
              <i className="fa-solid fa-bag-shopping"></i>
              {cartExist ? "Remove from Cart" : "Add to cart"}
            </a>
            <a
              onClick={() => handleFav(productData)}
              className={`${isFavoriteUi} border px-8 py-2 font-medium rounded uppercase flex items-center gap-2 transition`}
            >
              <i className="fa-solid fa-heart"></i>
              {isFav ? "Remove Wishlist" : "Add Wishlist"}
            </a>
          </div>

          <div className="flex gap-3 mt-4">
            <a className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="container pb-16">
        <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
          Product details
        </h3>
        <div className="w-3/5 pt-6">
          <div className="text-gray-600">
            <p>
              Dolorum, quae accusantium voluptatem blanditiis sapiente
              voluptatum. Autem ab, dolorum assumenda earum veniam eius illo
              fugiat possimus illum dolor totam, ducimus excepturi.
            </p>
          </div>

          <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
            <tbody>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Color
                </th>
                <th className="py-2 px-4 border border-gray-300 ">
                  Blank, Brown, Red
                </th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Material
                </th>
                <th className="py-2 px-4 border border-gray-300 ">Latex</th>
              </tr>
              <tr>
                <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                  Weight
                </th>
                <th className="py-2 px-4 border border-gray-300 ">55kg</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
