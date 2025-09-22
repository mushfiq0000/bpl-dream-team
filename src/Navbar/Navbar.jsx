import React from 'react';
import navImg from "../assets/image/logo.png"
import dollar from "../assets/image/dollar 1.png"

const Navbar = () => {
    return (
        <div className="navbar py-5 max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center text-gray-700 gap-4">
          <a href="">Home</a>
          <a href="">Fixture</a>
          <a href="">Teams</a>
          <a href="">Schedules</a>
          <button className=" border-1 p-2 rounded-md gap-1 flex items-center  text-black font-semibold border-gray-300">
            <span>6000000000</span>Coin <img className="w-5 h-5" src={dollar} alt="" />
          </button>
        </div>
      </div>

    );
};

export default Navbar;