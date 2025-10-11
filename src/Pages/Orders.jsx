import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("the-velvet-delights")) || {};
    const savedOrders = Object.values(data.orders || {}); // assuming you save orders in localStorage
    setOrders(savedOrders);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-[#fdf1f0] min-h-screen py-24 px-6 mt-8 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 w-full max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#D9526B] mb-8">
            Your Orders
          </h2>

          {orders.length === 0 ? (
            <div className="text-center text-gray-600 py-10">
              <p>No orders yet!</p>
              <button
                onClick={() => navigate("/products")}
                className="mt-6 bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white py-3 px-6 rounded-full font-medium hover:opacity-90 transition"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl shadow-sm p-5 bg-[#FAF9EE]"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-[#D9526B] font-semibold text-lg">
                      Order #{index + 1}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 border rounded-lg p-3 bg-white"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <p className="text-gray-800 font-semibold">
                            {item.name}
                          </p>
                          <p className="text-gray-600 text-sm">{item.price}</p>
                          <p className="text-gray-500 text-sm">
                            Qty: {item.quantity}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-right">
                    <p className="font-semibold text-gray-800">
                      Total:{" "}
                      <span className="text-[#D9526B]">
                        ${order.total || "0.00"}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <button
              onClick={() => navigate("/profile")}
              className="border-2 border-[#D9526B] text-[#D9526B] py-3 px-6 rounded-full font-medium hover:bg-[#fdf1f0] transition"
            >
              Back to Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Orders;
