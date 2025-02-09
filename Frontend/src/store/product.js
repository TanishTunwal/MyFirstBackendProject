import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  createProduct: async (product) => {
    if (!product.name || !product.price || !product.image) {
      return { success: false, message: "All fields are required" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      // if (!res.ok) throw new Error("Failed to create product");

      const data = await res.json();
      if (!data.data) throw new Error("Invalid response from server");

      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  getProducts: async () => {
    try {
      const res = await fetch("/api/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      // if (!res.ok) throw new Error("Failed to fetch products");

      const data = await res.json();
      set({ products: data.data || [] });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },

  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      // if (!res.ok) throw new Error("Failed to delete product");

      const data = await res.json();
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));

      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  updateProduct: async (id, updatedProduct) => {
    if (!updatedProduct) {
      return { success: false, message: "Updated product data is required" };
    }

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      // if (!res.ok) throw new Error("Failed to update product");

      const data = await res.json();
      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? data.data : product
        ),
      }));

      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },
}));
