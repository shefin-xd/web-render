import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useUserStore = create((set, get) => ({
  users: [],
  admins: [],
  selectedUser: null,
  isUsersLoading: false,
  isAdminsLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/user/get-users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getAdmins: async () => {
    set({ isAdminsLoading: true });
    try {
      const res = await axiosInstance.get("/user/get-admins");
      set({ admins: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isAdminsLoading: false });
    }
  },
  
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
