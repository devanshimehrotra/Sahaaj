import { LuShoppingBag } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";

export default function Products() {
  return (
    <div className="flex flex-col  mb-4 md:mb-0">
      <div className="flex  justify-center  min-h-30 " data-aos="zoom-in">
        <div className="hidden md:flex md:w-3/12 self-start">
          {/* Desktop image */}
          <img
            src="./img_14.png"
            className="hidden md:block w-full h-auto animate-kenBurns"
            data-aos="fade-right"
            alt=""
          />
        </div>
        <div className="w-6/12 self-end">
          <div className=" text-2xl font-bold    md:text-xl  xl:text-3xl  text-center mt-6 mb-2">
            For Nature
          </div>
          <div className="text-center text-base font-light tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8 ">
            Small Efforts Big Imapct
          </div>
        </div>
        <div className="hidden md:flex md:w-3/12 self-start">
          {/* Desktop image */}
          <img
            src="./img_15.png"
            className="hidden md:block w-full h-auto animate-kenBurns"
            data-aos="fade-left"
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex flex-col justify-center px-5 py-10 md:flex-row gap-8  lg:gap-15 overflow-x-scroll no-scrollbar xl:px-30  ">
        <div
          className=" xl:w-1/3 group relative flex flex-col bg-white shadow-lg border border-[#2A3524]/20
          rounded-xl overflow-hidden
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative bg-[#EBEADF] flex justify-center py-5 overflow-hidden">
            <img
              src="./img_1.png"
              alt=""
              className="w-40 transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-[#d8ef87]/75
              flex items-center justify-center text-center px-6 
              opacity-0 group-hover:opacity-100
              transition-all duration-500"
            >
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-[#2A3524] text-xl font-bold mb-2">
                  Money Plant
                </h3>

                <p className="text-[#2A3524]/90 text-sm leading-6">
                  Purifies indoor air, symbolizes prosperity, and is one of the
                  easiest plants to care for.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start p-3">
            <div className="text-base mb-2 lg:text-xl">
              Money plant with 4-inch wide
            </div>

            <div className="text-base font-bold mb-4 lg:text-xl">₹100</div>

            <button
              className="group/button rounded-md w-full py-3 flex items-center
              justify-center gap-3 font-bold text-[#2A3524]
              transition-all duration-300 bg-[#d8ef87]"
            >
              <LuShoppingBag className="text-3xl transition-transform duration-300 group-hover/button:rotate-6" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <div
          className=" xl:w-1/3 group relative flex flex-col bg-white shadow-lg border border-[#2A3524]/20
          rounded-xl overflow-hidden
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative bg-[#EBEADF] flex justify-center py-5 overflow-hidden">
            <img
              src="./img_1.png"
              alt=""
              className="w-40 transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-[#d8ef87]/75
              flex items-center justify-center text-center px-6 
              opacity-0 group-hover:opacity-100
              transition-all duration-500"
            >
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-[#2A3524] text-xl font-bold mb-2">
                  Money Plant
                </h3>

                <p className="text-[#2A3524]/90 text-sm leading-6">
                  Purifies indoor air, symbolizes prosperity, and is one of the
                  easiest plants to care for.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start p-3">
            <div className="text-base mb-2 lg:text-xl">
              Money plant with 4-inch wide
            </div>

            <div className="text-base font-bold mb-4 lg:text-xl">₹100</div>

            <button
              className="group/button rounded-md w-full py-3 flex items-center
              justify-center gap-3 font-bold text-[#2A3524]
              transition-all duration-300 bg-[#d8ef87]"
            >
              <LuShoppingBag className="text-3xl transition-transform duration-300 group-hover/button:rotate-6" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <div
          className=" xl:w-1/3 group relative flex flex-col bg-white shadow-lg border border-[#2A3524]/20
          rounded-xl overflow-hidden
          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="relative bg-[#EBEADF] flex justify-center py-5 overflow-hidden">
            <img
              src="./img_1.png"
              alt=""
              className="w-40 transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay */}
            <div
              className="absolute inset-0 bg-[#d8ef87]/75
              flex items-center justify-center text-center px-6 
              opacity-0 group-hover:opacity-100
              transition-all duration-500"
            >
              <div className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-[#2A3524] text-xl font-bold mb-2">
                  Money Plant
                </h3>

                <p className="text-[#2A3524]/90 text-sm leading-6">
                  Purifies indoor air, symbolizes prosperity, and is one of the
                  easiest plants to care for.
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start p-3">
            <div className="text-base mb-2 lg:text-xl">
              Money plant with 4-inch wide
            </div>

            <div className="text-base font-bold mb-4 lg:text-xl">₹100</div>

            <button
              className="group/button rounded-md w-full py-3 flex items-center
              justify-center gap-3 font-bold text-[#2A3524]
              transition-all duration-300 bg-[#d8ef87]"
            >
              <LuShoppingBag className="text-3xl transition-transform duration-300 group-hover/button:rotate-6" />
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center  min-h-20  ">
        <div className="hidden md:flex md:w-3/12 self-end">
          {/* Desktop image */}
          <img
            src="./img_17.png"
            className="hidden md:block w-full h-auto animate-kenBurns"
            data-aos="fade-right"
            alt=""
          />
        </div>
        <div className="w-6/12 self-start">
          <div className="flex w-full justify-center ">
            <button
              className="group min-w-60  bg-[#2A3524] rounded-2xl px-10 py-3 flex items-center justify-center gap-2 font-bold text-white hover:bg-[#d8ef87] hover:text-[#2A3524]
                     transition-all duration-500 ease-out 
                     hover:scale-101 hover:-translate-y-1 
                     hover:shadow-lg"
            >
              {/* <PiPlantFill className="text-3xl transition-transform duration-500 group-hover:rotate-6" /> */}
              <span>Explore More</span> <span className="ml-1">&rarr;</span>
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:w-3/12 self-end">
          {/* Desktop image */}
          <img
            src="./img_16.png"
            className="hidden md:block w-full h-auto animate-kenBurns"
            data-aos="fade-left"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
