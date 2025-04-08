import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
      <Link to="/Projects">
        <button className="px-6 py-2.5 bg-indigo-600 text-white font-sans font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
          View My Work
        </button>
      </Link>
      <Link to="/contacts">
        <button className="px-6 py-2.5 bg-transparent border-2 border-indigo-400 text-indigo-400 font-sans font-semibold rounded-full hover:bg-indigo-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
          Contact Me
        </button>
      </Link>
    </div>
  );
};

export default Buttons;