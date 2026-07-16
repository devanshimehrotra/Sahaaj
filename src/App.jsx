import MyComponent from "./screen";
import { LuShoppingBag } from "react-icons/lu";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { useEffect } from "react";

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
  LuUsers,
  LuBookOpen,
  LuMail,
  LuTruck,
  LuPackageCheck,
  LuHistory,
  LuUserRound,
} from "react-icons/lu";

import { PiPlantLight } from "react-icons/pi";

import { FaCircle, FaRegCircle } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // animate only once
      easing: "ease-in-out",
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
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
      <nav className="bg-[#faf5ed] border-b border-[#273524]/20 shadow-sm  sticky top-0 z-50">
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

      <div className="flex flex-col md:flex-row bg-[#FAF6ED] text-[#2A3524] ">
        {/* <MyComponent /> */}
        <div className="w-full md:w-3/12 ">
          {/* Mobile image */}
          <img
            src="./img-4.png"
            className="block md:hidden w-full h-auto"
            data-aos="fade-down"
            alt=""
          />

          {/* Desktop image */}
          <img
            src="./img-1.png"
            className="hidden md:block w-full h-auto"
            data-aos="fade-right"
            alt=""
          />
        </div>
        <div
          className="w-full md:w-6/12 flex flex-col justify-center items-center text-[#2A3524] px-5"
          data-aos="zoom-in"
        >
          <div className="text-center leading-12 text-4xl font mb-1 lg:text-5xl lg:mb-2 xl:text-5xl">
            Sahaaj{" "}
          </div>

          <div className="text-center text-base mb-4 font-bold lg:text-xl">
            What does it really mean?
          </div>
          <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8">
            Sahaaj means living in harmony with nature through simple, mindful
            choices. We believe that creating a greener tomorrow doesn't require
            extraordinary efforts. It begins with everyday decisions—carrying a
            reusable bag, planting a tree, caring for a plant, or leaving water
            for birds during summer. Together, these small acts become a
            movement that benefits people, nature, and the wildlife around us.
          </div>
        </div>
        <div className="w-full md:w-3/12">
          {/* Mobile image */}
          <img
            src="./img-5.png"
            className="block md:hidden w-full h-auto"
            data-aos="fade-up"
            alt=""
          />

          {/* Desktop image */}
          <img
            src="./img-2.png"
            className="hidden md:block w-full h-auto animate-kenBurns"
            data-aos="fade-left"
            alt=""
          />
        </div>
      </div>

      <div className="w-full px-5  flex flex-col bg-[#2A3524] text-white py-10 md:px-15 md:py-15 relative">
        <div
          className=" w-full text-4xl leading-12 font mb-2 lg:text-5xl lg:mb-2 xl:text-5xl "
          data-aos="fade-right"
        >
          One Reusable Bag. Hundreds of Plastic Bags Avoided.
        </div>

        <div className="flex flex-col min-h-12    md:flex-row gap-10 justify-center items-center">
          <div className=" md:w-7/12 ">
            <div
              className=" text-base mb-4 font-bold lg:text-xl"
              data-aos="fade-right"
            >
              Say No to Single-Use Plastic Bags
            </div>
            <div
              className=" text-base mb-6 font-light tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8"
              data-aos="fade-right"
            >
              A cloth bag may seem like a small choice, but its impact lasts far
              beyond a single shopping trip. Single-use plastic often ends up in
              streets, rivers, forests, and open fields, where it harms both the
              environment and animals
            </div>
            <div
              className=" text-2xl leading-12 font mb-2 md:text-xl  xl:text-3xl "
              data-aos="fade-right"
            >
              We Believe
            </div>
            <div
              className="flex relative py-11 px-2 bg-[#CCE96C] text-[#273524] mb-5 border-0 md:py-7 max-w-85 rounded-sm shadow-xl transition-all
duration-500
hover:-rotate-1
hover:-translate-y-1
hover:shadow-2xl
"
              data-aos="flip-left"
            >
              <FaQuoteLeft className="text-4xl absolute top-2 md:text-xl" />
              <div className="text-lg md:text-sm py-2 lg:text-xl font-bold ">
                It's our efforts that matter,
                <br />
                Doesn't matter how small they are
              </div>
              <FaQuoteRight className="text-4xl absolute bottom-2 right-2 md:text-xl" />
            </div>
            <button
              className="bg-[#CCE96C] border-0 flex flex-row gap-2 rounded-md font-bold text-[#2A3524] px-4 py-2  items-center "
              data-aos="flip-right"
            >
              <LuShoppingBag className="text-3xl text-[#273524]" />
              <div> Get yours Today</div>
            </button>
          </div>
          <div className="w-full md:w-5/12 ">
            <img
              src="./img-6.png"
              className=" w-full h-auto animate-float "
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="w-full px-5  flex flex-col bg-[#2A3524] text-white py-10 md:px-15 md:py-15 relative ">
        <div
          className="text-3xl leading-10 mb-4 md:text-2xl md:mb-6 font-bold  text-center lg:text-3xl"
          data-aos="zoom-in"
        >
          How you are helping them
        </div>
        <div className="py-5 flex flex-col justify-center items-center md:flex-row ">
          <div
            className="flex flex-col justify-center items-center md:w-1/4  px-3 py-2 md:border-r md:border-r-white/40 "
            data-aos="fade-right"
          >
            <img src="./img-9.png" className="w-30 mb-3"></img>
            <div className="text-center text-base mb-1 font-bold lg:text-xl">
              Protect Animals
            </div>
            <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 xl:text-base xl:leading-6 ">
              Stray cows often mistake plastic bags for food, which can cause
              serious health problems or even death.
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center px-3 py-2 md:w-1/4 md:border-r md:border-r-white/40 




"
            data-aos="zoom-in"
          >
            <img src="./img-10.png" className="w-30 mb-3"></img>
            <div className="text-center text-base mb-1 font-bold lg:text-xl ">
              Keep Them Safe
            </div>
            <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 xl:text-base xl:leading-6 ">
              Doge and efher animuls can besorne trapped in discarded plastic
              waste.
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center py-2 px-3 md:w-1/4 md:border-r md:border-r-white/40 "
            data-aos="zoom-in"
          >
            <img src="./img-11.png" className="w-30 mb-3"></img>
            <div className="text-center text-base mb-1 font-bold lg:text-xl">
              Harm to Birds
            </div>
            <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 xl:text-base xl:leading-6 ">
              Birds may use plastics in nears atraccidentally insest small
              plastic pieces.
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center px-3 py-2  md:w-1/4 "
            data-aos="fade-left"
            md:data-aos="zoom-in"
          >
            <img src="./img-12.png" className="w-30 mb-3"></img>
            <div className="text-center text-base mb-1 font-bold lg:text-xl">
              Pollutes Our Planet
            </div>
            <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 xl:text-base xl:leading-6 ">
              Plastic evrually ivate down info mto splacios. hat polute. our
              ssit and wate:.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
