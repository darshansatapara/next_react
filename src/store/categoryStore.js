import { create } from "zustand";
import API from "../utils/axios";

export const useCategoryStore = create((set) => ({
  categories: [],
  loading: false,
  error: null,

  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const res = await API.get("/categories");
      set({ categories: res.data });
    } catch (err) {
      set({
        error: err.response?.data?.message || "Failed to fetch categories",
      });
    } finally {
      set({ loading: false });
    }
  },
  addCategory: async (name) => {
    try {
      if (!name) throw new Error("Category name is required"); // validation

      const res = await API.post("/categories", { name }); // <-- Axios instance
      set((state) => ({ categories: [res.data, ...state.categories] }));
    } catch (err) {
      console.error(err);
    }
  },

  deleteCategory: async (id) => {
    try {
      await API.delete(`/categories/${id}`);
      set((state) => ({
        categories: state.categories.filter((c) => c.id !== id),
      }));
    } catch (err) {
      console.error(err);
    }
  },

  updateCategory: async (id, name) => {
    try {
      const res = await API.patch(`/categories/${id}`, { name });
      set((state) => ({
        categories: state.categories.map((c) => (c.id === id ? res.data : c)),
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));
