import {
  FaLeaf,
  FaTruck,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

export default function TopBanner() {
  return (
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
        <FaYoutube size={15} className="cursor-pointer hover:text-green-300" />
      </div>
    </div>
  );
}
