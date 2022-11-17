import React from "react";

export default function () {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36"
        style={{ backgroundImage: `url("assets/images/banner-bg.jpg")` }}
      >
        <div className="container">
          <h1 className="text-6xl text-gray-800 font-medium mb-4 capitalize">
            best collection for <br /> home decoration
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
            <br />
            accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
            odio
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="bg-primary border border-primary text-white px-8 py-3 font-medium 
                    rounded-md hover:bg-transparent hover:text-primary"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src={"assets/images/icons/delivery-van.svg"}
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="assets/images/icons/money-back.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
              <p className="text-gray-500 text-sm">30 days money returs</p>
            </div>
          </div>
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img
              src="assets/images/icons/service-hours.svg"
              alt="Delivery"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container py-16">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">
          shop by category
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src={"assets/images/category/category-1.jpg"}
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Bedroom
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="assets/images/category/category-2.jpg"
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Mattrass
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="assets/images/category/category-3.jpg"
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Outdoor
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="assets/images/category/category-4.jpg"
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Sofa
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="assets/images/category/category-5.jpg"
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Living Room
            </a>
          </div>
          <div className="relative rounded-sm overflow-hidden group">
            <img
              src="assets/images/category/category-6.jpg"
              alt="category 1"
              className="w-full"
            />
            <a
              href="#"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
            >
              Kitchen
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
}
