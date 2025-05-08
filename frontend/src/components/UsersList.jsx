import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";

const UsersList = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useUserStore();
  const { onlineUsers } = useAuthStore();
  
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        <h1>Shefin</h1>

        
      </div>
    </div>
  );
};

export default UsersList;

