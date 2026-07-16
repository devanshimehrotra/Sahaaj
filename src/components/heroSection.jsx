import { PiPlantFill } from "react-icons/pi";

export default function HeroSection() {
  return (
    <div className="flex pb-8 md:pb-0 flex-col gap-3 md:gap-0 md:flex-row bg-[#FAF6ED] text-[#2A3524] items-end ">
      <div className="w-full md:w-5/12 flex flex-col  text-[#2A3524] px-5 md:pl-10 self-start py-5 ">
        <div
          className="text-base mb-2 font-bold lg:mb-4 lg:text-xl"
          data-aos="zoom-in"
        >
          Welcome to
        </div>
        <div
          className=" leading-12 text-4xl font mb-1 lg:text-5xl lg:mb-2 xl:text-5xl"
          data-aos="zoom-in"
        >
          Sahaaj{" "}
        </div>

        <div
          className=" text-base  mb-3 lg:mb-4 font-light tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8"
          data-aos="zoom-in"
        >
          Where Everyday Choices Shape Nature and the Environment
        </div>

        <div
          className=" text-2xl font-bold  font mb-2 md:text-xl  xl:text-3xl "
          data-aos="zoom-in"
        >
          For People.
          <br /> For Nature.
          <br /> For Tomorrow.
        </div>

        <div
          className=" text-base mb-4 font-light tracking-wide md:text-xs md:leading-5 lg:text-base lg:leading-6 xl:text-xl xl:leading-8"
          data-aos="zoom-in"
        >
          Sahaaj is an initiative that brings together thoughtfully crafted
          products that care for people, nature, and the world around us.
        </div>
        <button
          className="group max-w-80  bg-[#CCE96C] rounded-md px-4 py-2 flex items-center gap-2 font-bold text-[#2A3524]
                     transition-all duration-500 ease-out
                     hover:scale-101 hover:-translate-y-1
                     hover:shadow-lg"
        >
          <PiPlantFill className="text-3xl transition-transform duration-500 group-hover:rotate-6" />
          <span>Start your Sustainble Journey</span>
        </button>
      </div>
      <div
        className="w-full md:w-4/12 flex flex-col  text-[#2A3524]  px-10 md:px-0 "
        data-aos="zoom-in"
      >
        <img
          className="flex justify-center animate-float"
          src="./img_12.png"
        ></img>
      </div>
      <div className="w-full md:w-3/12 ">
        {/* Desktop image */}
        <img
          src="./img-24.png"
          className="hidden md:block w-full h-auto animate-kenBurns"
          data-aos="fade-left"
          alt=""
        />
      </div>
    </div>
  );
}
