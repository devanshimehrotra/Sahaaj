import { useEffect, useState } from "react";

function MyComponent() {
  const getBreakpoint = (width) => {
    if (width < 640) return "xs";
    if (width < 768) return "sm";
    if (width < 1024) return "md";
    if (width < 1280) return "lg";
    if (width < 1536) return "xl";
    return "2xl";
  };

  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    breakpoint: getBreakpoint(window.innerWidth),
  });

  useEffect(() => {
    const handleResize = () => {
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
        breakpoint: getBreakpoint(window.innerWidth),
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-black p-3 text-sm text-white shadow-lg">
        <p>Width: {screen.width}px</p>
        <p>Height: {screen.height}px</p>
        <p>Breakpoint: {screen.breakpoint}</p>
      </div>

      {/* Your component */}
    </>
  );
}

export default MyComponent;
