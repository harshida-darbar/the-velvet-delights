import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!state) {
    return <div className="text-center mt-20 text-red-500">No product found!</div>;
  }

  const { image, name, desc, price } = state;

  return (
    <div>
      <Header />
      <div className="bg-[#fdf1f0] min-h-screen pt-28 pb-12 px-6 sm:px-12 flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={image}
            alt={name}
            className="rounded-3xl shadow-lg w-80 sm:w-96 object-cover"
          />
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 w-full lg:w-1/2 border border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#D9526B] mb-3">{name}</h2>
          <p className="text-gray-700 text-sm sm:text-base mb-4">{desc}</p>
          <p className="text-xl font-semibold text-gray-900 mb-6">{price}</p>

          {/* ➕➖ Counter */}
          <div className="flex items-center mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="bg-[#F2BBB6] px-4 py-2 rounded-l-full font-bold text-[#D9526B]"
            >
              −
            </button>
            <span className="px-6 py-2 bg-white border-t border-b text-gray-800 font-semibold">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="bg-[#D9526B] px-4 py-2 rounded-r-full text-white font-bold cursor-pointer"
            >
              +
            </button>
          </div>

          <button className="w-full bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white cursor-pointer py-3 rounded-full font-medium hover:opacity-90 transition mb-4">
            Add to Cart
          </button>

          <button
            onClick={() => navigate("/products")}
            className="w-full border border-[#D9526B] text-[#D9526B] py-3 rounded-full font-medium hover:bg-[#fdf1f0] transition"
          >
            ← Back to Products
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
