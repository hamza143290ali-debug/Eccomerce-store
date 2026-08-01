import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MapPin } from "lucide-react";
import { useCart } from "../context/CartContex";

function CheckOut() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function formHandler(data) {
    console.log(data);
  }
  return (
    <div className="container mx-auto px-6 min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 relative">
      {/* left side */}

      <p className="absolute top-10 left-10 text-xl font-bold">
        Finalize Order
      </p>

      <form
        className="bg-gray-900 flex flex-col items-start px-8 rounded-xl mt-20 py-10 justify-evenly"
        onSubmit={handleSubmit(formHandler)}
      >
        {/* shipping information with icon */}
        <p className="flex gap-3 text-orange-400/92 tracking-tight font-extrabold border-b border-orange-400 w-full mb-4 pb-3 ">
          <MapPin />
          Shipping information
        </p>

        <div className="w-full bg-gray-600/92 rounded-xl p-3 text-white space-x-4 border border-transparent focus-within:border-orange-400 borde-2 transition-all duration-300">
          <label htmlFor="name">Name</label>
          <input
            className="outline-none "
            {...register("Name")}
            type="text"
            id="name"
          />
        </div>

        <div className="w-full bg-gray-600/92 rounded-xl p-3 text-white space-x-4 border border-transparent focus-within:border-orange-400 borde-2 transition-all duration-300">
          <label htmlFor="Address">Address</label>
          <input
            className="outline-none"
            {...register("Address")}
            type="text"
            id="Address"
          />
        </div>

        <div className="w-full bg-gray-600/92 rounded-xl p-3 text-white space-x-4 border border-transparent focus-within:border-orange-400 borde-2 transition-all duration-300">
          <label htmlFor="city">City</label>
          <input
            className="outline-none"
            {...register("City")}
            type="text"
            id="city"
          />
        </div>

        <div className="w-full bg-gray-600/92 rounded-xl p-3 text-white space-x-4 border border-transparent focus-within:border-orange-400 borde-2 transition-all duration-300">
          <label htmlFor="zip">Zip</label>
          <input
            className="outline-none"
            {...register("Zip")}
            type="text"
            id="zip"
          />
        </div>

        <div className="w-full bg-orange-400 rounded-full p-3 text-lg tracking-tight font-extrabold">
          <button className="w-full">$PAY AND CONFIRM ORDER</button>
        </div>
      </form>
    </div>
  );
}

export default CheckOut;
