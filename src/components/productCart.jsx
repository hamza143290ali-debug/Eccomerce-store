import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContex";

function ProductCart({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="group  rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 border-2  hover:shadow-orange-900/40">
      <NavLink
        to={`/product/${product.id}`}
        className="relative cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90"
        />

        <div className="absolute bottom-0 left-0 bg-orange-600/90 text-white px-5 py-2 text-xl font-extrabold rounded-tr-xl shadow-lg">
          ${product.price.toFixed(2)}
        </div>
      </NavLink>

      <div className="p-5 flex flex-col grow">
        <NavLink to={`/product/${product.id}`}>
          <h3 className="text-2xl font-extrabold text-gray-800 mb-2 cursor-pointer hover:text-orange-400 transition-all duration-200 line-clamp-1">
            {product.name}
          </h3>
        </NavLink>

        <p className="text-gray-400 text-small mb-4 line-clamp-3 flex">
          {product.description}
        </p>

        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span className="px-3 py-1 font-semibold">
            {product.category}
          </span>
        </div>

        {/* add to cart button */}
        <button
          onClick={() => {
            addToCart(product);
          }}
          className="mx-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shaodw-lg shadow-orange-800/50 cursor-pointer
        hover:bg-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase
        tracking-wider"
        >
          <ShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCart;
