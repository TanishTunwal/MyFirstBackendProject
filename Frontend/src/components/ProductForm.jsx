import { useState } from "react";
import { useProductStore } from "../store/product.js";
import { toast, ToastContainer } from "react-toastify";

const ProductForm = ({ check, setCheck, product }) => {
  const [formData, setFormData] = useState(product || { name: "", price: "", image: "" });

  const { updateProduct } = useProductStore();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { success, message } = updateProduct(product._id, formData);

    setCheck(false);
  };

  const onClose = () => {
    setCheck(false);
  };

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 text-black ${check ? "flex items-center justify-center" : "hidden"}`}>
      <ToastContainer />
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
