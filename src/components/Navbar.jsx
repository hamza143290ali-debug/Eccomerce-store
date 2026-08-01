import React from "react";
import { House } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContex";
import { Link } from "react-router-dom";

function Navbar() {
  const { cartCount } = useCart();
  return (
    <>
      <nav className="w-full h-15  bg-gray-950/95 flex justify-between border-b-1 border-orange-500 items-center sticky md:pt-5 md:pb-5 ">
        {/* left side */}
        <div className="flex space-x-1 ml-5 text-2xl font-extrabold items-center md:text-4xl md:font-extrabold">
          <Link to="/">
            <span>
              <House className="text-orange-400 curstor-pointer hover:text-orange-500 transition-all duration-200" />
            </span>
          </Link>
          <h1>
            HAMZA<span className="text-orange-500">STORE</span>
          </h1>
        </div>

        {/* right side */}
        <Link to="/Cartpage">
          <div className="mr-4 bg-orange-500/40 p-1 rounded-md border-orange-900 border-1 relative">
            <ShoppingCart className=" text-orange-600 hover:text-orange-500 cursor-pointer transition-all duration-200" />
            {cartCount > 0 && (
              <span className="absolute top=0 right-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none text-white transform translate-x-1/2 -translate-y/12 bg-red-600 rounded-full min-w-6">
                {cartCount}
              </span>
            )}
          </div>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
