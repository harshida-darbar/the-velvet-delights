import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Products = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Chocolate Delight",
      price: "$15",
      desc: "Rich dark chocolate layered cake topped with smooth ganache and chocolate flakes.",
      image:
        "https://crumbsandcaramel.com/wp-content/uploads/2020/10/WS-Skull-Cake-Hero-Blog.jpg",
    },
    {
      id: 2,
      name: "Strawberry Bliss",
      price: "$12",
      desc: "Soft sponge with layers of whipped cream and fresh strawberries, a perfect delight.",
      image:
        "https://i0.wp.com/www.thelittleblogofvegan.com/wp-content/uploads/2022/07/vegan_strawberry_Cake.jpg?fit=1300%2C1789&ssl=1",
    },
    {
      id: 3,
      name: "Donut Treats",
      price: "$8",
      desc: "Sweet glazed mini donuts filled with rich vanilla cream.",
      image:
        "https://www.chocolatecoveredcompany.com/cdn/shop/products/DBDNULT12.jpg?v=1729612725",
    },
    {
      id: 4,
      name: "Snack Box",
      price: "$10",
      desc: "Mix of sweet and savory bites — perfect for any occasion.",
      image:
        "https://i.pinimg.com/736x/e6/e1/53/e6e153b4ae03df9720d7e089a5ec8a23.jpg",
    },
  ];

  return (
    <div>
      <Header />
      <div className="bg-[#fdf1f0] min-h-screen pt-28 pb-12 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-3xl shadow-lg p-6 border border-gray-100">
          <h2 className="text-center text-[#D9526B] font-semibold text-xl mb-3">
            Find Your Favorite Treat
          </h2>
          <input
            type="text"
            placeholder="Search for your favorite treat..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D9526B] text-gray-700"
          />
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`, { state: item })}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-[#F2BBB6] transition">
                  <FaHeart className="text-[#D9526B]" />
                </button>
              </div>

              <div className="p-5 text-center flex-grow">
                <h3 className="text-lg font-semibold text-[#D9526B]">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {item.desc}
                </p>
                <p className="text-gray-800 font-bold mt-2">{item.price}</p>
              </div>

              <div className="px-5 pb-5">
                <button className="w-full bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white font-medium rounded-full py-2 hover:opacity-90 transition cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
