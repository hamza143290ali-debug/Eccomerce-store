import React from "react";
import { initialProducts } from "../data/product";
import { Tag } from "lucide-react";

const availableCategories = [
  "All",
  ...new Set(initialProducts.map((p) => p.category)),
];

function CategoryFilter() {
  const selectedCategory = "Phone";

  return (
    <>
      <div className="flex flex-wrap gap-3 border-b border-gray-800 pb-6">
        <Tag className="w-5 h-5 text-orange-500 mt-4 mr-2 hidden sm:block" />

        {availableCategories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-bold rounded-full text-sm  text-gray-900 transition duration-200 shadow-md ${
              selectedCategory === category
                ? "bg-orange-600 text-white shadow-orange-800/50"
                : " text-gray-300 hover:bg-gray-700 hover:text-orange-400 "
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

export default CategoryFilter;
