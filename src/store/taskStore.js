import { create } from "zustand";
import API from "../utils/axios";

export const useTaskStore = create((set, get) => ({
  tasks: [],
  loading: false,
  error: null,

  fetchTasks: async () => {
    set({ loading: true, error: null });
    try {
      const res = await API.get("/tasks");
      set({ tasks: res.data });
    } catch (err) {
      set({ error: err.response?.data?.message || "Failed to fetch tasks" });
    } finally {
      set({ loading: false });
    }
  },

  addTask: async (task) => {
    try {
      const res = await API.post("/tasks", task);
      set((state) => ({ tasks: [res.data, ...state.tasks] }));
    } catch (err) {
      console.error(err);
    }
  },

  updateTask: async (id, task) => {
    try {
      const res = await API.patch(`/tasks/${id}`, task);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? res.data : t)),
      }));
    } catch (err) {
      console.error(err);
    }
  },

  deleteTask: async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) }));
    } catch (err) {
      console.error(err);
    }
  },
}));
