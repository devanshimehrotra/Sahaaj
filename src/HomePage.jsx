import { useEffect } from "react";
import { LuShoppingBag } from "react-icons/lu";
import { FaLeaf } from "react-icons/fa";
import { PiPlantFill } from "react-icons/pi";

import TopBanner from "./components/topBanner";
import NavBar from "./components/navBar";
import About from "./components/aboutSahaaj";
import Products from "./components/products";
import heroSection from "./components/heroSection";
import HeroSection from "./components/heroSection";

function HomePage() {
  return (
    <div className="w-screen ">
      <div className="sticky top-0 z-[999]">
        <TopBanner />
        {/* Navbar */}
        <NavBar />
      </div>
      {/* Hero Section */}
      <HeroSection />

      <div className="flex bg-[#2A3524] h-20"></div>

      {/*  products section */}
      <Products />

      <div className="flex bg-[#2A3524] h-20"></div>
    </div>
  );
}

export default HomePage;
