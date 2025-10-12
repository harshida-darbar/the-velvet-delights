import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "Harshida Darbar",
    email: "harshida@example.com",
    phone: "+91 98765 43210",
    city: "Ahmedabad",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("the-velvet-delights")) || {};
    if (data.userdetails) {
      setUser({
        name: data.userdetails.name || "Guest User",
        email: data.userdetails.email || "guest@example.com",
        phone: data.userdetails.phone || "N/A",
        city: data.userdetails.city || "Unknown",
      });
    }
  }, []);

  const handleSave = () => {
    const data = JSON.parse(localStorage.getItem("the-velvet-delights")) || {};
    data.userdetails = user;
    localStorage.setItem("the-velvet-delights", JSON.stringify(data));
    setIsEditing(false);
    toast.info("Profile updated successfully!");
  };

  return (
    <>
      <Header />
      <div className="bg-[#fdf1f0] min-h-screen flex flex-col items-center justify-center py-24 px-6 mt-8">
        <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 w-full max-w-md text-center">
          <div className="flex flex-col items-center">
            {/* <img
              src="https://cdn-icons-png.flaticon.com/512/219/219970.png"
              alt="User Avatar" />*/}
            <FaUserCircle className="w-20 h-20 rounded-full shadow-md border-4 border-[#F2BBB6] mb-4" />
            {isEditing ? (
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                className="border border-gray-300 rounded-lg px-3 py-2 text-center text-[#D9077A] font-semibold w-full max-w-xs"
              />
            ) : (
              <h2 className="text-2xl sm:text-3xl font-bold text-[#D9077A]">
                {user.name}
              </h2>
            )}
            <p className="text-gray-600 font-medium">{user.email}</p>
          </div>

          <div className="mt-8 text-left space-y-4">
            {["phone", "city"].map((field) => (
              <div
                key={field}
                className="bg-[#FAF9EE] rounded-lg p-4 shadow-sm"
              >
                <p className="text-gray-700 font-semibold capitalize">
                  {field}:
                </p>
                {isEditing ? (
                  <input
                    type="text"
                    value={user[field]}
                    onChange={(e) =>
                      setUser({ ...user, [field]: e.target.value })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-2 text-gray-700 w-full mt-1"
                  />
                ) : (
                  <p className="text-gray-600">{user[field]}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 w-full max-w-md mx-auto">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="flex-1 bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white cursor-pointer py-3 rounded-full font-medium hover:opacity-90 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 border-2 border-[#D9526B] text-[#D9526B] py-3 rounded-full font-medium hover:bg-[#fdf1f0] transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => navigate("/orders")}
                  className="flex-1 border-2 border-[#D9526B] text-[#D9526B] py-3 rounded-full font-medium hover:bg-[#fdf1f0] transition"
                >
                  View Orders
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="w-full bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white cursor-pointer py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Profile;
