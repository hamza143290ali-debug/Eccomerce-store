import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContex";
import ProductCart from "../components/productCart";

function ProductList() {
  const { products } = useCart();

  return (
    <div className="container mx-auto px-5 py-6">
      <SearchFilter />
      <CategoryFilter />

      <h1 className="text-2xl font-extrabold px-4 pt-4 mb-3">
        Feature Gear ({products.length} items)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
