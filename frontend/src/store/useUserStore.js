import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useUserStore = create((set, get) => ({
  users: [],
  selectedUser: null,
  isDeletingUser: false,
  isTogglingAdmin: false,
  isUsersLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/users/get-users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  deleteUser: async (userId) => {
    set({ isDeletingUser: true });
    try {
      const res = await axiosInstance.delete(`/users/${userId}`);
      set((prevUsers) => ({
        users: prevUsers.users.filter((user) => user._id !== userId)
      }));
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isDeletingUser: false });
    }
  },
  
  toggleAdmin: async (userId) => {
    set({ isTogglingAdmin: true });
    try {
      const res = await axiosInstance.patch(`/users/${userId}`);
      set((prevUsers) => ({
        users: prevUsers.users.map((user) =>
          user._id === userId ? { ...user, role: res.data.role } : user
        )
      }));
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isTogglingAdmin: false });
    }
  },
  
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
