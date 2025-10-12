import React from "react";

function Section1() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-10 px-6 sm:px-8 lg:px-20 lg:gap-16 py-16 bg-[#fdf1f0] overflow-hidden">
      <div
        className="relative bg-[#E43F99] rounded-xl flex items-center justify-start shadow-lg
          px-4 py-3 sm:px-5 sm:py-4 md:px-5 md:py-4 lg:px-6 lg:py-5 w-full sm:w-[48%] lg:w-[500px] h-auto sm:h-64 md:h-64 lg:h-64"
      >
        <div className="text-left w-full z-10 pr-16 sm:pr-20 md:pr-24">
          <h2 className="text-white font-bold text-lg sm:text-xl mb-1">
            Desert you love,
            <br />
            delivered to you
          </h2>
          <p className="text-gray-100 text-xs sm:text-sm leading-relaxed mb-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <button className="bg-white text-[#E43F99] rounded-full w-[130px] sm:w-[150px] h-10 cursor-pointer">
            Order Now
          </button>
        </div>
        <img
          src="src/assets/images/sec1_1.png"
          alt="Box 1"
          className="absolute right-[-40px] sm:right-[-50px] top-1/2 transform -translate-y-1/2 w-36 sm:w-44 md:w-44 lg:w-44 object-contain"
        />
      </div>

      <div
        className="relative bg-[#E43F99] rounded-xl flex items-center justify-start shadow-lg
          px-4 py-3 sm:px-5 sm:py-4 md:px-5 md:py-4 lg:px-6 lg:py-5 w-full sm:w-[48%] lg:w-[500px] h-auto sm:h-64 md:h-64 lg:h-64"
      >
        <div className="text-left w-full z-10 pr-16 sm:pr-20 md:pr-24">
          <h2 className="text-white font-bold text-lg sm:text-xl mb-1">
            Have you tried our
            <br />
            delicious new cake?
          </h2>
          <p className="text-gray-100 text-xs sm:text-sm leading-relaxed mb-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <button className="bg-white text-[#E43F99] rounded-full w-[130px] sm:w-[150px] h-10 cursor-pointer">
            Order Now
          </button>
        </div>
        <img
          src="src/assets/images/sec1_2.png"
          alt="Box 2"
          className="absolute right-[-40px] sm:right-[-50px] top-1/2 transform -translate-y-1/2 w-36 sm:w-44 md:w-44 lg:w-44 object-contain"
        />
      </div>
    </div>
  );
}

export default Section1;
