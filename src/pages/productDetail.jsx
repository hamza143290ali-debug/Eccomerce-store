import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/product";
import { ChevronLeft, Tag, Zap } from "lucide-react";
import { useCart } from "../context/CartContex";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState();

  useEffect(() => {
    const foundProduct = initialProducts.find((data) => data.id === Number(id));

    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div
      className="container mx-auto px-4 md:px-8 min-h-screen rounded-2xl shadow-2xl shadow-gray-500
    my-8 p-6 md:p-12 "
    >
      <Link to="/">
        <button
          className="cursor-pointer flex items-center text-gray-600 hover:text-orange-400 transition-all 
        duration-150 mb-12 font-semi-bold text-lg"
        >
          <ChevronLeft className="w-6 h-6 mr-1" />
          Back to all Products
        </button>
      </Link>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-1">
        <div className="w-full">
          <img
            className="w-100 h-100 obect-cover rounded-2xl shadow-2xl shadow-gray-950/50 transform hover:scale-105 transition-all duration-250"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* div for text */}
        <div className="flex flex-col justify-between">
          {/* product name */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tighter">
            {product.name}
          </h1>
          {/* product price */}
          <p className="text-3xl font-extrabold text-orange-400 mb-4">
            ${product.price.toFixed(2)}
          </p>

          <h2 className="text-xl font-bold text-gray-400 mb-2 border-b border-e-orange-900/50 pb-2 flex items-center space-x-2">
            <Tag className="w-5 h-5 text-orange-500" />
            <span>Product Overview</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed">
            {product.description}
          </p>

          <ul className="space-y-3 text-gray-500 p-4  rounded-xl shadow-2xl shadow-gray-500/50 mt-4">
            <li className="flex items-center space-x-3 text-lg ">
              <Zap className="w-5 h-5 text-orange-500" />
              <span>High-Quality, Professional Grade Material</span>
            </li>

            <li className="flex items-center space-x-3 text-lg ">
              <Zap className="w-5 h-5 text-orange-500" />
              <span>Comprehensive 1-Year Manufacturer Waranty</span>
            </li>

            <li className="flex items-center space-x-3 text-lg ">
              <Zap className="w-5 h-5 text-orange-500" />
              <span>Immediate Shipping for in-Stock items</span>
            </li>
          </ul>

          <div className="flex justify-center items-center w-full mt-4 mb-2 flex-col space-y-8">
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="bg-orange-500 p-2 rounded-full  text-white font-bold w-full cursor-pointer "
            >
              ADD TO CART
            </button>

            <Link to="/" className="w-full">
              <button className="w-full border text-gray-500 border-orange-500/90 py-2 font-bold text-xl rounded-full hover:bg-orange-500/40 transition-all duration-500 hover:text-white">
                KEEP SHOPING
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
