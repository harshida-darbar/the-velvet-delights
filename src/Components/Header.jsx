import { FaUserAlt, FaShoppingCart, FaHeart } from "react-icons/fa"; // changed FcLike to FaHeart
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#FAF9EE] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="/logo.png"
              alt="The Velvet Delights"
              className=" w-auto object-contain lg:h-15 h-12 mx-auto sm:mx-0"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#D9526B] hover:text-[#c13f5e] font-medium transition">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-[#c13f5e] font-medium transition">Products</Link>
            <Link to="/menu" className="text-gray-700 hover:text-[#c13f5e] font-medium transition">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#c13f5e] font-medium transition">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#c13f5e] font-medium transition">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <FaUserAlt className="text-gray-700 cursor-pointer hover:text-[#D9526B] transition" 
            size={22} 
            onClick={() => navigate("/profile")}/>
            <FaShoppingCart className="text-gray-700 cursor-pointer hover:text-[#D9526B] transition" size={22} />
            <FaHeart className="text-gray-700 cursor-pointer hover:text-[#D9526B] transition" size={22}/>
            <button
              onClick={() => navigate("/login")}
              className="bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] hover:opacity-90 cursor-pointer text-white font-medium rounded-full px-5 py-2 transition"
            >
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center justify-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col space-y-3 px-6 py-3">
            <Link to="/" onClick={() => setMenuOpen(false)} className="text-[#D9526B] font-medium">Home</Link>
            <Link to="/products" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Products</Link>
            <Link to="/menu" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Menu</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">Contact</Link>
            <div className="flex items-center space-x-4 mt-2">
              <FaUserAlt className="text-gray-700" size={22} />
              <FaShoppingCart className="text-gray-700" size={22} />
              <FaHeart className="text-gray-700" size={22} onClick={() => navigate("/profile")} />
            </div>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#D9526B] hover:bg-[#c13f5e] text-white cursor-pointer rounded-full px-5 py-2 font-medium transition mt-2"
            >
              Login
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
