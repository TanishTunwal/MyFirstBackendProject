import React, { useEffect } from "react";
import Cards from "../components/Cards";
import { useProductStore } from "../store/product";
import { Link } from "react-router-dom";
// import ProductForm from "../components/ProductForm.jsx";

function HomePages() {
  const {getProducts, products } = useProductStore();
  useEffect(() => {
    getProducts();
  }, []);

  if (products.length === 0) {
    return (
      <h1 className="text-2xl font-semibold text-center">
        No Products Available.{" "}
        <Link to="/create" className="underline text-blue-700">
          Create Products
        </Link>
      </h1>
    );
  }

  return (
    <div className="overflow-hidden flex justify-center">
      {/* <productForm /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <Cards key={product._id} product={product} className="p-4 shadow-lg rounded-lg" />
        ))}
      </div>
    </div>
  );
}

export default HomePages;
