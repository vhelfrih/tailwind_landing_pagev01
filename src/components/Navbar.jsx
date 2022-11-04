import React, { useState } from "react";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import CloseIcon from "@mui/icons-material/Close";
import {
  Link,
  } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="fixed w-full h-[60px] flex justify-end items-center px-6 bg-slate-600 text-gray-300 text-lg font-medium mt-10 opacity-75">
        <ul className="hidden md:flex">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
     
        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <DensitySmallIcon /> : <CloseIcon />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">Works</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">About</li>
          <li className="py-6 text-4xl">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
