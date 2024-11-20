import { Link, NavLink, useNavigate } from "react-router-dom";
import "./styles.css"
import { useState } from "react";

function Navbar() {
  const navigagte = useNavigate();

  const [openNav,setOpenNav]= useState(false)
  const toggleNav= function (){
    const navLinks= document.querySelector('.nav--links')
    setOpenNav(!openNav)
      navLinks.classList.toggle("open")
  }
  return (
    <nav className="flex justify-between items-center p-4 max-md:fixed max-md:w-full max-md:bg-gradient-to-r max-md:from-purple-200 max-md:via-purple-100 max-md:to-pink-200 z-20">
      <div className="text-2xl font-bold text-pink-700">
        <Link to={'/'}>
        <img
          className="w-[80px] h-[50px] max-sm:w-[50px] max-sm:h-[40px]"
          src="/Breast-Cancer-Ribbon-PNG-Image (1).png"
          alt=""
        />
        </Link>
      </div>
      <ul className="nav--links flex space-x-8 text-gray-700 font-semibold max-md:flex-col max-md:absolute max-md:top-[98%] max-md:left-0 max-md:items-start max-md:bg-pink-200 max-md:w-full max-md:h-screen max-md:gap-12 max-md:pt-10">
       <li></li>
        <li>
          <NavLink to={"/scan"}>Scan Image</NavLink>
        </li>
        <li>
          <NavLink to={"/chat"}>Chat with our AI</NavLink>
        </li>
        <li>
          <NavLink to={"/screening"}>Screening</NavLink>
        </li>
        <li>
          <NavLink to={"/community"}>Community</NavLink>
        </li>
        <button
        className="md:hidden bg-pink-700 text-white px-7 py-2 rounded-full hover:bg-pink-600 font-semibold max-md:w-40"
        onClick={() => navigagte("/register")}
      >
        Sign up
      </button>
      </ul>
      <button
        className="max-md:hidden bg-pink-700 text-white px-7 py-2 rounded-full hover:bg-pink-600 font-semibold"
        onClick={() => navigagte("/register")}
      >
        Sign up
      </button>
      <button id="hamburger" onClick={toggleNav} className="hamburger hidden max-md:block p-2 focus:outline-none max-lg:text-black">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </nav>
  );
}

export default Navbar;
