import React from "react";
import bgImage from "../assets/images/background.png";

function Section4() {
  return ( 
    <div className="bg-[#fdf1f0] pb-10">
  <div
    className="w-full rounded-xl relative bg-cover bg-center"
    style={{ backgroundImage: `url(${bgImage})` }}
  >
    <div className="flex flex-col md:flex-row p-8 md:p-10 gap-6 md:gap-8 h-auto md:h-[500px]">
      <div className="md:w-1/2 flex flex-col justify-center items-center text-center lg:items-start lg:text-left px-4 md:px-8 lg:px-12">
        <h2 className="text-[#D9077A] text-4xl font-bold whitespace-nowrap">
          Our Food Gallery
        </h2>
        <p className="text-white mt-3 leading-relaxed max-w-md">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat nostrud amet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center lg:items-start justify-center lg:justify-start">
          <button className="bg-white text-black font-medium rounded-full h-10 w-[150px] cursor-pointer transition">
            Order Now
          </button>
          <button className="bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white font-medium rounded-full h-10 w-[150px] hover:opacity-90 transition border border-white">
            Contact Us
          </button>
        </div>
      </div>
    {/* Desktop & Tablet Images */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center gap-4">
        <div className="flex flex-col gap-3">
          <img
            src="/src/assets/images/birthday cake.png"
            alt="Birthday Cake"
            className="w-36 md:w-48 rounded-lg"
          />
          <img
            src="/src/assets/images/chocolate bar.png"
            alt="Chocolate Bar"
            className="w-36 md:w-48 rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-3 mt-4 md:mt-0">
          <img
            src="/src/assets/images/donutt.png"
            alt="Donut"
            className="w-36 md:w-48 rounded-lg"
          />
          <img
            src="/src/assets/images/snackss.png"
            alt="Snacks"
            className="w-36 md:w-48 rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>

  {/* Mobile Images */}
  <div className="flex flex-wrap justify-center gap-4 p-4 md:hidden mt-6">
    <div className="flex flex-col gap-3">
      <img
        src="/src/assets/images/birthday cake.png"
        alt="Birthday Cake"
        className="w-40 rounded-lg"
      />
      <img
        src="/src/assets/images/chocolate bar.png"
        alt="Chocolate Bar"
        className="w-40 rounded-lg"
      />
    </div>
    <div className="flex flex-col gap-3">
      <img
        src="/src/assets/images/donutt.png"
        alt="Donut"
        className="w-40 rounded-lg"
      />
      <img
        src="/src/assets/images/snackss.png"
        alt="Snacks"
        className="w-40 rounded-lg"
      />
    </div>
  </div>
</div>
        
  );
}
export default Section4;
