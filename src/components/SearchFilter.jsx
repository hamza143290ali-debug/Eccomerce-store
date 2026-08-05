import React from "react";
import { Search } from "lucide-react";

function SearchFilter() {
  return (
    <>
      <div className="mb-7 p-4  rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="flex items-center border  roundex-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-400 transition duration-300  rounded-2xl ">
          <Search className="text-gray-500 ml-3 w-5 h-5 " />
          <input
            type="text"
            className="w-full p-4 outline-none text-gray-900 placeholder-gray-500 text-base font-medium"
            placeholder="Search high-performance product by name or feature..."
          />
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
