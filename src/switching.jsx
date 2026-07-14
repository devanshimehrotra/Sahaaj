import { useEffect, useState } from "react";

function Component() {
  const [bgImage, setBgImage] = useState("/bg-image.png");

  useEffect(() => {
    const updateBg = () => {
      if (window.innerWidth >= 768) {
        setBgImage("/bg-image-desktop.png");
      } else {
        setBgImage("/bg-image.png");
      }
    };

    updateBg();
    window.addEventListener("resize", updateBg);

    return () => window.removeEventListener("resize", updateBg);
  }, []);

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Content */}
    </div>
  );
}
