import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import { useState } from "react";

import {
  LuUserRound,
  LuHouse,
  LuShoppingBag,
  LuUsers,
  LuBookOpen,
  LuMail,
  LuMenu,
  LuX,
} from "react-icons/lu";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function NavBar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#faf5ed] border-b border-[#273524]/20 shadow-sm   ">
      <div className="px-5 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <img src="./logo.png" className="w-12 " alt="Logo" />

          <div>
            <h1 className="text-[#273524] text-2xl font-semibold font">
              Sahaaj
            </h1>

            <p className="text-xs italic text-[#273524]">
              for people, for nature
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-[#273524] font-medium ">
          <button
            className="cursor-pointer hover:text-green-700 transition-colors"
            onClick={() => navigate("/")}
          >
            Home
          </button>

          <li className="cursor-pointer hover:text-green-700 transition-colors">
            Shop
          </li>

          <button
            className="cursor-pointer hover:text-green-700 transition-colors"
            onClick={() => navigate("/impact")}
          >
            Our Impact
          </button>

          <li className="cursor-pointer hover:text-green-700 transition-colors">
            Blogs
          </li>

          <li className="cursor-pointer hover:text-green-700 transition-colors">
            Stories
          </li>
          <li className="cursor-pointer hover:text-green-700 transition-colors">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex">
          <LuUserRound size={22} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#273524] transition-smooth "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <LuX size={28} /> : <LuMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={` absolute w-full md:hidden overflow-hidden transition-all duration-300 ease-in-out  ${
          isOpen ? "max-h-150" : "max-h-0"
        }`}
      >
        <div className="w-full border-b border-[#273524]">
          <ul className="flex flex-col bg-[#faf5ed] border-t border-[#273524]/10">
            <li className="px-6 py-4 hover:bg-[#e0e4d5] cursor-pointer transition-colors flex flex-row items-center gap-3 hover:text-[#273524] hover:font-bold">
              <LuHouse size={18} />
              <div>Home</div>
            </li>

            <li className="px-6 py-4 hover:bg-[#e0e4d5] cursor-pointer transition-colors flex flex-row items-center gap-3 hover:text-[#273524] hover:font-bold">
              <LuShoppingBag size={18} />
              <div>Shop</div>
            </li>

            <li className="px-6 py-4 hover:bg-[#e0e4d5] cursor-pointer transition-colors flex flex-row items-center gap-3 hover:text-[#273524] hover:font-bold">
              <LuUsers size={18} />
              <div>About Us</div>
            </li>

            <li className="px-6 py-4 hover:bg-[#e0e4d5] cursor-pointer transition-colors flex flex-row items-center gap-3 hover:text-[#273524] hover:font-bold">
              <LuBookOpen size={18} />
              <div>Our Impact</div>
            </li>

            <li className="px-6 py-4 hover:bg-[#e0e4d5] cursor-pointer transition-colors flex flex-row items-center gap-3 hover:text-[#273524] hover:font-bold">
              <LuMail size={18} />
              <div>Contact</div>
            </li>

            <div className="flex gap-5 px-6 py-5 border-t border-[#273524]/10 bg-[#273524] text-white">
              <FaInstagram
                className="cursor-pointer hover:text-[#273524] "
                size={18}
              />
              <FaFacebookF
                className="cursor-pointer hover:text-[#273524]"
                size={18}
              />
              <FaYoutube
                className="cursor-pointer hover:text-[#273524]"
                size={18}
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
