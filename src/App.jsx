import { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa6";
import { FaSeedling } from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";

import ScreenSizeIndicator from "./screen";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      <ScreenSizeIndicator />
      {/* mobile screen view navbar */}
      <div
        className={`fixed inset-0 z-50 bg-[#faf5ed] text-white transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${
          menuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center bg-[#273624] px-4 py-3 border-b border-white/20 text-white ">
          <div className="flex items-center gap-2 ">
            <img src="./logo.png" className="w-10" alt="Logo" />

            <div>
              <h1 className="text-xl font-semibold tracking-wide">Sahaaj</h1>
              <p className="text-[10px] italic">for people, for nature</p>
            </div>
          </div>

          <button onClick={() => setMenuOpen(false)}>
            <LuX size={25} className="" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center h-[calc(100vh-80px)] gap-8 text-xl  bg-[#faf5ed] text-[#273624] uppercase ">
          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-2
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Home
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-2
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Shop
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-2
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            About Us
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-2
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Our Impact
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-2
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Contact
          </a>
        </nav>
      </div>
      {/* top banner */}
      <div className="w-full bg-[#273624] flex justify-between items-center h-8 text-[12px] px-4 text-white md:text-[14px] md:px-6 lg:px-10 ">
        <div className="flex items-center gap-2">
          <FaSeedling />
          <span>Empowering Women. Nurturing Nature.</span>
        </div>

        <div className="flex items-center gap-3">
          <FaInstagram />
          <FaFacebookF />
          <FaYoutube />
        </div>
      </div>
      {/* navbar */}
      <div className="px-4 h-18 md:px-6 lg:px-10 py-3 flex justify-between items-center shadow-sm  bg-[#faf5ed] border-b border-b-[#273624]/20">
        {/* Logo */}
        <div className="flex items-center gap-2 text-[#273624] lg:gap-3">
          <img src="./logo.png" className="w-10 lg:w-12" alt="Logo" />

          <div>
            <h1 className="text-xl font-semibold  lg:text-3xl tracking-wide ">
              Sahaaj
            </h1>
            <p className="text-[10px] italic">for people, for nature</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex  gap-5 items-center  text-xs  text-[#273624]  md:text-base  lg:gap-12">
          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Home
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Shop
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            About Us
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Our Impact
          </a>

          <a
            href="#"
            className="relative inline-block   transition-colors duration-300
             after:absolute after:left-0 after:-bottom-1
             after:h-[3px] after:w-0
             after:bg-[#273624]
             after:transition-all after:duration-300
             hover:after:w-full "
          >
            Contact
          </a>
        </div>

        <div className=" hidden md:flex ">
          <LuUserRound size={20} />
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="relative w-8 h-8">
            <LuMenu
              size={30}
              className={`absolute transition-all duration-300
                ${
                  menuOpen
                    ? "opacity-0 rotate-180 scale-50"
                    : "opacity-100 rotate-0 scale-100"
                }`}
            />

            <LuX
              size={30}
              className={`absolute transition-all duration-300
                ${
                  menuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-180 scale-50"
                }`}
            />
          </div>
        </button>
      </div>
      {/* herosection */}
      <div className="flex   flex-col px-4  text-[#273624] md:flex-row bg-[#faf5ed] md:px-0  ">
        {/* text */}
        <div className="flex py-8 flex-col  gap-7  md:w-1/2   justify-center  md:pl-6 md:py-0 lg:pl-10 lg:gap-7 ">
          <div className="text-3xl font-bold  tracking-wide leading-10   lg:text-5xl lg:leading-13 md:tracking-wider xl:leading-15 ">
            Empowering Women. <br />
            Nurturing Nature.
          </div>

          <div className="text-sm tracking-wide font-light   leading-5 lg:text-base lg:leading-6">
            Handcrafted bags by rural women <br />
            and green choices for a better tomorrow.
            <br />
            Together, let's create a sustainable world.
          </div>

          <div className="  flex flex-row text-sm gap-4 text-[#273624] ">
            <button className="bg-[#273624] text-white px-5 py-2 border border-[#273624] rounded-sm lg:px-7  lg:text-base">
              Shop Now
            </button>
            <button className="  px-5 py-2 border border-[#273624] rounded-sm lg:px-7  lg:text-base">
              Our Impact
            </button>
          </div>

          <div className="  flex flex-row gap-5 text-[10px] md:gap-8 text-sm lg:text-base ">
            <div className="flex flex-row gap-2   items-center">
              <img src="./icon-1.png" className="h-8 "></img>
              <div className=" font-light tracking-wide">
                Women <br />
                Empowerment
              </div>
            </div>

            <div className="flex flex-row gap-2  items-center">
              <img src="./icon-2.png" className="h-8 "></img>
              <div className=" font-light tracking-wide">
                Eco <br />
                Friendly
              </div>
            </div>

            <div className="flex flex-row gap-2  items-center">
              <img src="./icon-3.png" className="h-8 "></img>
              <div className="font-light tracking-wide">
                Better Planet <br />
                Better Future
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div className="w-full hidden md:block md:w-1/2 ">
          <img
            src="./heroImage-mobile.png"
            alt="Hero Mobile"
            className="block md:hidden w-full border-0 rounded-xl"
          />

          <img
            src="./heroImage.png"
            alt="Hero Desktop"
            className="hidden md:block w-full "
          />
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
