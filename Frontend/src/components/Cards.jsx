import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useProductStore } from "../store/product";
import { toast, ToastContainer } from "react-toastify";
import ProductForm from "./ProductForm.jsx";

function Cards({ product }) {
  const { deleteProduct } = useProductStore();
  const [check, setCheck] = useState(false);

  const handleDelete = () => {
    const { success, message } = deleteProduct(product._id);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleUpdate = () => {
    setCheck(true);
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg text-center">
      <ToastContainer />
      {check && <ProductForm check={check} setCheck={setCheck} product={product} />}
      <img
        src={product.image}
        alt="productImage"
        className="w-full h-40 object-cover rounded"
      />
      <h1 className="text-lg font-semibold mt-2">{product.name}</h1>
      <div className="text-gray-600">Price: {product.price}</div>
      <div className="flex justify-between mt-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={handleDelete}
        >
          <FaTrash /> Delete
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2"
          onClick={handleUpdate}
        >
          <FaEdit /> Update
        </button>
      </div>
    </div>
  );
}

export default Cards;
