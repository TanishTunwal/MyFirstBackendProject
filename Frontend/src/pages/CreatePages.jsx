import React, { useState } from 'react';
import { useProductStore } from '../store/product.js';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreatePages() {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    image: ''                                                              
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });//important concept
  };

  const { createProduct } = useProductStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { success, message } = await createProduct(formData);
    
    if(success){
      toast.success(message)
    }
    else{
      toast.error(message)
    }
    setFormData({ name: '', price: '', image: '' });
  };

  return (
    <div className="flex text-black justify-center items-center min-h-screen w-full">
      <ToastContainer />
      <div className="bg-white shadow-2xl rounded-xl p-10 w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Create Your Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input 
            type="text" 
            name="name"
            placeholder="Enter Name of Product" 
            value={formData.name}
            onChange={handleChange} 
            required
            className="p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
          />
          <input 
            type="text" 
            name="price" 
            placeholder="Enter Price of Product" 
            value={formData.price}
            onChange={handleChange} 
            required
            className="p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
          />
          <input 
            type="text" 
            name="image"
            placeholder="Image URL" 
            value={formData.image}
            onChange={handleChange} 
            required
            className="p-4 border border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
          />
          <button 
            type="submit" 
            className="bg-blue-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePages;
