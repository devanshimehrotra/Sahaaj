import { useState } from "react";
import {
  FaLeaf,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTruck,
} from "react-icons/fa";
import { LuMenu, LuX } from "react-icons/lu";
import {
  LuHouse,
  LuShoppingBag,
  LuUsers,
  LuBookOpen,
  LuMail,
  LuTruck,
  LuPackageCheck,
  LuHistory,
  LuUserRound,
} from "react-icons/lu";

import { PiPlantLight } from "react-icons/pi";

import MyComponent from "./screen";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MyComponent />

      {/* Top Banner */}
      <div className="text-white bg-[#273524] flex justify-center md:justify-between items-center h-8 text-xs px-5 font-extralight tracking-wider">
        <div className="hidden md:flex items-center gap-2">
          <FaLeaf size={15} />
          <div>Empowering Women. Nurturing Nature.</div>
        </div>

        <div className="flex items-center gap-2">
          <FaTruck size={15} />
          <div>Free Shipping on orders above ₹999</div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <FaInstagram
            size={15}
            className="cursor-pointer hover:text-green-300"
          />
          <FaFacebookF
            size={15}
            className="cursor-pointer hover:text-green-300"
          />
          <FaYoutube
            size={15}
            className="cursor-pointer hover:text-green-300"
          />
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-[#faf5ed] border-b border-[#273524]/20 shadow-sm  sticky top-0">
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
            <li className="cursor-pointer hover:text-green-700 transition-colors">
              Home
            </li>

            <li className="cursor-pointer hover:text-green-700 transition-colors">
              Shop
            </li>

            <li className="cursor-pointer hover:text-green-700 transition-colors">
              About Us
            </li>

            <li className="cursor-pointer hover:text-green-700 transition-colors">
              Our Impact
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

              {/* <div className=" gap-5 px-6 py-5 border-t border-[#273524]/10 flex flex-col bg-[#e0e4d5] text-sm text-[#273524]">
                <div className="flex flex-row gap-3 items-center ">
                  <img src="./icon_1.png" className="h-8"></img>
                  <div>Free Shipping on orders above ₹999</div>
                </div>
                <div className="flex flex-row gap-3 items-center ">
                  <img src="./icon_2.png" className="h-8"></img>
                  <div>Secure Payments</div>
                </div>
                <div className="flex flex-row gap-3 items-center ">
                  <img src="./icon_3.png" className="h-8"></img>
                  <div>Easy Returns</div>
                </div>
                <div className="flex flex-row gap-3 items-center ">
                  <img src="./icon_2.png" className="h-8"></img>
                  <div>Support Artisans</div>
                </div>
              </div> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* herosection */}
      <div
        className="w-full  bg-center bg-cover bg-no-repeat md:flex  md:flex-row justify-center items-center "
        style={{
          backgroundImage: "url('./header_image_mobile.png')",
        }}
      >
        <div className="w-full p-5 py-8 text-[#273524] md:w-1/2 flex flex-col gap-6 md:gap-5 lg:gap-6 xl:gap-9 ">
          <div className="text-4xl font  font-bold w-full overflow-hidden leading-12 tracking-wide flex flex-col  md:text-3xl md:leading-10 lg:text-4xl lg:leading-12 xl:text-5xl xl:leading-15">
            <div className="mb-2 md:mb-1 lg:mb-3">
              Empowering Women <br />
            </div>
            <div>
              Nurturing Nature <br />
            </div>
          </div>
          <div className="leading-7 text-lg tracking-wide font-light    lg:w-full md:text-sm md:leading-5 lg:leading-7 lg:text-lg">
            Handcrafted bags by rural women and green choices for a better
            tomorrow. Together, let's create a sustainable world.
          </div>

          {/* button */}
          <div className="w-full flex flex-row gap-5  ">
            <button className="bg-[#273524] text-white w-35 py-3 border border-[#273524] rounded-lg hover:bg-[#858e6e] hover:border-[#858e6e]  md:py-2 lg:py-3">
              Shop Now
            </button>
            <button className=" w-35 py-3 border border-[#273524] rounded-lg hover:bg-[#858e6e] hover:border-[#858e6e] hover:text-white md:py-2 lg:py-3">
              Our Impact
            </button>
          </div>

          {/*  */}
          <div className="flex text-[#273524] text-[10px] flex-row leading-3 gap-5  items-end   md:gap-10 ">
            <div className="flex flex-col  items-center  gap-3 ">
              <img src="./icon-1.png" className="w-8"></img>
              <div className="text-center">
                Women <br /> Empowerment
              </div>
            </div>
            <div className="flex flex-col  items-center   gap-3 ">
              <img src="./icon-2.png" className="w-8"></img>
              <div className="text-center">
                Eco <br /> Friendly
              </div>
            </div>
            <div className="flex flex-col  items-center  gap-3 ">
              <img src="./icon-3.png" className="w-8"></img>
              <div className="text-center">
                Better Planet <br /> Better Future
              </div>
            </div>
            <div className="flex flex-col  items-center  gap-3 ">
              <img src="./icon-4.png" className="w-10"></img>
              <div className="text-center">
                Sustainable <br /> Living
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center ">
          <img
            src="/hero_image.png"
            alt="Hero"
            className="max-w-full max-h-screen object-contain"
          />
        </div>
      </div>

      {/* bag - plant section */}
      <div className="my-10 mx-7 text-[#273524] flex flex-col gap-7 md:flex-row">
        <div className=" bg-[#efe3d1] flex flex-col border-0 rounded-lg sm:flex-row  ">
          <div className="flex flex-col gap-5 p-5  pb-0 pr-0 sm:w-1/2 md:gap-3 lg:gap-4 xl:gap-6">
            <div className="text-2xl font font-bold tracking-wide md:text-xl lg:text-3xl xl:text-4xl">
              Handmade Bags
            </div>
            <div className="w-4/5 text-light md:w-full md:text-xs lg:text-base">
              Thoughtfully handmade by rural women with love and care.
            </div>
            <button className="text-base  w-36 py-3 border border-[#273524] rounded-sm  hover:border-[#273524] md:text-sm  md:py-1.5 lg:text-base lg:py-2 hover:bg-[#273524] hover:text-white">
              Explore Bags <span className="ml-1">&rarr;</span>
            </button>
          </div>
          <div className="flex justify-end items-end sm:w-1/2 ">
            <img
              src="bag.png"
              className="border-r-0 border-b-0 rounded-br-lg"
            ></img>
          </div>
        </div>
        {/* indore plants */}
        <div className=" bg-[#eae9e2] flex flex-col border-0 rounded-lg sm:flex-row  ">
          <div className="flex flex-col gap-5 p-5  pb-0 pr-0 sm:w-1/2 md:gap-3 lg:gap-4 xl:gap-6">
            <div className="text-2xl font font-bold tracking-wide md:text-xl lg:text-3xl xl:text-4xl">
              Indore Plants
            </div>
            <div className="w-4/5 text-light md:w-full md:text-xs lg:text-base">
              Bring home freshness, purify your space and nurture
            </div>
            <button className="text-base  w-36 py-3 border border-[#273524] rounded-sm  hover:border-[#273524] md:text-sm  md:py-1.5 lg:text-base lg:py-2 hover:bg-[#273524] hover:text-white">
              Explore Plants <span className="ml-1">&rarr;</span>
            </button>
          </div>
          <div className="flex justify-end items-end sm:w-1/2 ">
            <img
              src="plant.png"
              className="border-r-0 border-b-0 rounded-br-lg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
