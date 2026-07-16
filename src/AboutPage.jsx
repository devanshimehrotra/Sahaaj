import { useEffect } from "react";

import TopBanner from "./components/topBanner";
import NavBar from "./components/navBar";
import About from "./components/aboutSahaaj";

import { useState } from "react";

function AboutPage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen ">
      <div className="sticky top-0 z-[999]">
        <TopBanner />
        {/* Navbar */}
        <NavBar />
      </div>
      {/* about */}
      <About />
    </div>
  );
}

export default AboutPage;
