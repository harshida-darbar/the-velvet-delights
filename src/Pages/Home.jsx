import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Section2 from "../Components/Section2";
import Section1 from "../Components/Section1";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";

function Home() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[#fdf1f0] min-h-screen pt-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-[#D9077A] text-3xl sm:text-4xl md:text-5xl font-bold leading-snug text-center md:text-left">
          Food You Love,<span className="block md:hidden"></span>
          <span className="block">delivered to you</span>
        </h1>
        <p className="text-[#F2A007] text-base sm:text-lg md:text-lg leading-relaxed  px-4 sm:px-6 md:px-0 max-w-full md:max-w-md mx-auto md:mx-0 text-center md:text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim velit mollit. Exercitation veniam
          consequat nostrud amet.
        </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-5 mt-8">
            <button className="bg-gradient-to-r from-[#D9526B] to-[#F2BBB6] text-white font-medium py-3 px-8 rounded-full w-[200px] shadow-md hover:shadow-lg transition">
              Explore Menu
            </button>

            <div className="flex items-center gap-2 cursor-pointer border border-white rounded-full  w-[200px]  px-5 py-2">
              <MdOutlineSlowMotionVideo size={30} className="text-[#D9526B]" />
              <p className="text-gray-800 text-lg font-medium">Watch Video</p>
            </div>
          </div>
        </div>

       <div className="relative w-full md:w-1/2 flex justify-center md:mt-0">
          <img
            src="src/assets/images/cake.png"
            alt="The Velvet Delights"
            className="w-full sm:w-4/5 md:w-[90%] lg:w-full h-auto object-contain"
          />
          <img
            src="src/assets/images/group2.png"
            alt="review"
            className="absolute top-4 left-6 sm:top-2 sm:left-10 md:left-16 w-1/3"
          />
          <img
            src="src/assets/images/group1.png"
            alt="review"
            className="absolute right-6 top-[60%] md:top-[55%] w-1/3 transform -translate-y-1/2"
          />
          <img
            src="src/assets/images/group3.png"
            alt="review"
            className="absolute bottom-4 left-4 sm:bottom-2 sm:left-8 w-1/2 md:w-1/3"
          />
        </div>
      </div>
      <Section1/>
      <Section2 />
      <Section3/>
      <Section4/>
      <Section5/>
      
    </>
  );
}
export default Home;
