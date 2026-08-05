import React from "react";
import { useCart } from "../context/CartContex";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronLeft, Zap } from "lucide-react";
import CartItem from "../components/CartItem";

function CartPage() {
  const { cart, cartTotal, cartCount, clearCart } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div className="flex items-center mb-10">
          <Link
            to="/"
            className="flex items-center text-gray-400 hover:text-orange-400 font-semibold text-lg transition duration-200"
          >
            <ChevronLeft className="w-6 h-6 mr-1" />
            Back to Store
          </Link>
        </div>

        <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
          Shopping Cart {cartCount}
        </h2>

        {/* clear cart */}
        <h2 className="text-xl p-2 font-extrabold text-gray-900 mb-10 tracking-tight cursor-pointer">
          <button
            onClick={() => {
              clearCart();
            }}
            className="shadow-2xl shadow-gray-600  p-4 tracking-tighter rounded-full hover:bg-orange-400/40 transition-all duration-300 cursor-pointer"
          >
            Clear All
          </button>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="lg:col-span-1 p-8  rounded-xl shadow-2xl sticky top-20 h-fit shadow-gray-600">
            <h3 class="text-3xl font-bold text-gray-900/92 mb-5 border-b border-gray-700 p-3 flex space-x-2 items-center">
              <div className="flex justify-between">
                <span className="w-6 h-6 text-orange-400">$</span>
                <span>Order Total </span>
              </div>
            </h3>

            <div className="space-y-4 text-gray-500">
              {/* subtotal */}
              <div className="flex justify-between text-xl">
                <span className="font-semibold text-gray-500">SubTotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>

              {/* shipping express */}
              <div className="flex justify-between text-xl">
                <span className="font-semibold text-gray-500">
                  Shipping (Express):
                </span>
                <span className="text-gray-400">Free</span>
              </div>
            </div>

            {/* estemate total */}

            <div className="flex justify-between text-xl pt-6 border-t border-gray-700">
              <span className=" text-gray-500 text-2xl font-extrabold">
                Estimated Total:
              </span>
              <span className="text-orange-400">${cartTotal.toFixed(2)}</span>
            </div>

            <Link
              to={"/Checkout"}
              className="w-full mt-8 py-4 bg-orange-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/50
          cursor-pointer hover:bg-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 transform 
          hover:ring-4 hover:ring-pink-600/70 uppercase tracking-wider"
            >
              <Zap className="w-6 h-6" />
              <span>Proceed Securely</span>
            </Link>

            <p className="text-xs text-gray-500 text-center mt-4">
              All transactions are encrypted and secure.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
