import { useEffect, useState } from "react";

function MyComponent() {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    breakpoint: "",
  });

  const getBreakpoint = (width) => {
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  };

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        breakpoint: getBreakpoint(window.innerWidth),
      });
    };

    handleResize(); // Set initial values
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-sm">
        <p>Width: {screen.width}px</p>
        <p>Tailwind: {screen.breakpoint}</p>
      </div>

      {/* Your component */}
    </>
  );
}

export default MyComponent;
