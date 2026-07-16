import { LuShoppingBag } from "react-icons/lu";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
export default function About() {
  return (
    <>
      <div className="w-screen overflow-hidden">
        {/* About sahaaj */}
        <div className="flex flex-col md:flex-row bg-[#FAF6ED] text-[#2A3524] ">
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
              choices. We believe that creating a greener tomorrow doesn't
              require extraordinary efforts. It begins with everyday
              decisions—carrying a reusable bag, planting a tree, caring for a
              plant, or leaving water for birds during summer. Together, these
              small acts become a movement that benefits people, nature, and the
              wildlife around us.
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

        {/* green border */}
        <div className="w-full bg-[#2A3524] h-12 shadow-sm"></div>

        {/* Every tree matters */}
        <div className="w-full px-5  flex flex-col md:flex-row gap-8 text-white py-10 md:px-15 md:py-15 ">
          <div
            className="w-full md:w-1/2flex flex-col justify-center items-start text-[#2A3524] px-5  "
            data-aos="zoom-in"
          >
            <div className=" leading-12 text-4xl font mb-1  lg:text-5xl lg:mb-3  xl:text-5xl xl:mb-4 ">
              Every Tree Matters
            </div>

            <div className=" text-base mb-4 font-bold lg:text-xl">
              We believe environmental change begins with simple actions.
            </div>

            <div className=" text-base mb-4 font-bold lg:text-xl">
              Planting one tree may seem like a{" "}
              <span className="text-[#BC6216]">small act</span>,
              <br /> but when thousands of people plant one tree each,
              <br /> together those small efforts,
              <br />
              will definitely{" "}
              <span className="text-[#BC6216]">bring change.</span>
            </div>

            <div className=" text-base font-light mb-5 tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8 max-w-200">
              Trees quietly give us everything we need- clean air, shade, cooler
              cities, food, and homes for countless birds and animals. Every
              tree planted today is a gift to future generations.
            </div>

            <button
              className="group bg-[#CCE96C] rounded-md px-4 py-2 flex items-center gap-2 font-bold text-[#2A3524]
             transition-all duration-500 ease-out
             hover:scale-101 hover:-translate-y-1
             hover:shadow-lg"
            >
              <LuShoppingBag className="text-3xl transition-transform duration-500 group-hover:rotate-6" />
              <span>Plant a Tree Today</span>
            </button>
          </div>

          <div className="group relative w-full md:w-1/2 bg-[#CCE96C]/80 shadow-xl rounded-lg cursor-pointer">
            {/* Popup */}
            <div
              className="absolute left-1/2 -top-6 -translate-x-1/2
               w-72 bg-white rounded-xl shadow-2xl
               p-4 text-center
               opacity-0 scale-90 -translate-y-4
               group-hover:opacity-100
               group-hover:scale-100
               group-hover:-translate-y-0
               transition-all duration-300
               pointer-events-none z-20"
            >
              <h3 className="text-lg font-bold text-[#273524] mb-2">
                🌿 Money Plant
              </h3>
              <p className="text-gray-600 text-sm">
                Money Plants are easy to grow, can thrive in water or soil, and
                symbolize growth, prosperity, and a greener future.
              </p>

              {/* Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
            </div>

            {/* Plant Image */}
            <img
              src="./plant-1.png"
              className="w-full h-auto animate-float transition-transform duration-300 group-hover:scale-105"
              alt=""
            />
          </div>
        </div>

        {/* Bags */}
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
                A cloth bag may seem like a small choice, but its impact lasts
                far beyond a single shopping trip. Single-use plastic often ends
                up in streets, rivers, forests, and open fields, where it harms
                both the environment and animals
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
                className="group bg-[#CCE96C] rounded-md px-4 py-2 flex items-center gap-2 font-bold text-[#2A3524]
             transition-all duration-500 ease-out
             hover:scale-101 hover:-translate-y-1
             hover:shadow-lg"
              >
                <LuShoppingBag className="text-3xl transition-transform duration-500 group-hover:rotate-6" />
                <span>Plant a Tree Today</span>
              </button>
            </div>
            <div className="group relative w-full md:w-5/12">
              {/* Popover */}
              <div
                className="absolute left-1/2 top-8 -translate-x-1/2
               w-72 rounded-xl bg-white p-4
               shadow-[0_15px_40px_rgba(0,0,0,0.2)]
               border border-gray-100
               opacity-0 scale-90 -translate-y-4
               group-hover:opacity-100
               group-hover:scale-100
               group-hover:-translate-y-0
               transition-all duration-500
               ease-out
               pointer-events-none
               z-20"
              >
                <h3 className="text-lg font-bold text-[#273524] mb-2">
                  🌿 Eco-Friendly Bags
                </h3>

                <p className="text-sm text-gray-600 leading-6">
                  Choose sustainability every day. Thoughtfully crafted products
                  that help reduce plastic waste and inspire greener living.
                </p>

                {/* Arrow */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-gray-100"></div>
              </div>

              {/* Image */}
              <img
                src="./img-6.png"
                className="w-full h-auto animate-float transition-transform duration-500 group-hover:scale-105"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* How you are helping nature */}
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

        {/* better choice */}
        <div className="w-full flex flex-row text-white  bg-[#2A3524] justify-end items-end ">
          <div className="w-1/3 ">
            {/* Mobile image */}
            <img
              src="./img-16.png"
              className="block md:hidden w-full h-auto animate-float"
              alt=""
            />

            {/* Desktop image */}
            <img
              src="./img-13.png"
              className="hidden md:block w-full h-auto animate-float"
              alt=""
            />
          </div>

          <div
            className="w-full   md:w-1/3  flex  flex-col justify-center items-center gap-3 "
            data-aos="zoom-in"
          >
            <img src="./img-14.png" className="w-30 h-auto " alt="" />
            <div className="text-center text-base mb-4 font-bold lg:text-xl">
              A Better Choice
            </div>
          </div>

          <div className="w-1/3 ">
            {/* Mobile image */}
            <img
              src="./img-17.png"
              className="block md:hidden w-full h-auto animate-float"
              alt=""
            />

            {/* Desktop image */}
            <img
              src="./img-15.png"
              className="hidden md:block w-full h-auto animate-float"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
