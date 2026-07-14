import { useEffect, useState } from "react";

export default function ScreenSizeIndicator() {
  const [screen, setScreen] = useState("");

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) setScreen("xs");
      else if (width < 768) setScreen("sm");
      else if (width < 1024) setScreen("md");
      else if (width < 1280) setScreen("lg");
      else if (width < 1536) setScreen("xl");
      else setScreen("2xl");
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 rounded-md bg-black px-4 py-2 text-white shadow-lg">
      Screen: <span className="font-bold">{screen}</span> ({window.innerWidth}
      px)
    </div>
  );
}
