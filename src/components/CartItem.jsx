import React from "react";
import { useCart } from "../context/CartContex";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import { X } from "lucide-react";

function CartItem({ item }) {
  const { addToCart, removeFromCart, cartTotal } = useCart();

  const increase = () => addToCart(item);
  const descreased = () => removeFromCart(item);
  return (
    <>
      <div
        className="flex flex-col items-center  sm:flex-row justify-between p-4 sm:p-6 mb-4  rounded-xl
 transition-all duration-300 shadow-2xl shadow-gray-600/50 hover:shadow-gray-700/70 hover:scale-105"
      >
        {/* image area */}
        <div className=" ">
          <img
            src={item.image}
            alt="item.name"
            className="w-24 h-24 object-cover rounded-lg shadow-2xl shadow-gray-500/50"
          />
          <div>
            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
              {item.name}
            </h3>

            {/* item price */}
            <p className="text-lg text-orange-400 font-semibold">
              ${item.price.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
          <div className="flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg">
            <button
              onClick={descreased}
              // decrease quantity
              className="duration-250 w-8 h-8 justify-center p-2 transition-all hover:bg-gray-700 hover:text-white text-gray-900 items-center "
            >
              -
            </button>

            <span className="px-3 text-base font-bold text-gray-900">
              {item.quantity}
            </span>

            {/* increase quantit */}
            <button
              onClick={increase}
              className="duration-250 w-8 h-8 justify-center p-2 transition-all hover:bg-gray-700 hover:text-white  text-gray-900 items-center "
            >
              +
            </button>
          </div>

          {/* indivdual item total price */}
          <p className="font-extrabold text-orange-300 w-24 text-right hidden md:block">
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          {/* cross button */}
          <button onClick={()=>{
            removeFromCart(item)
          }}
          className=" p-3  cursor-pointer text-red-400  transition-all duration-150 shadow-md rounded-full">
          <X className="w-5 h-5"/>
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
