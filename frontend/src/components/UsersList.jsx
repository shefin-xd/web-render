import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersListSkeleton from "./skeletons/UsersListSkeleton";
import { Users } from "lucide-react";

const UsersList = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useUserStore();
  const { onlineUsers } = useAuthStore();
  const [showAdminOnly, setShowAdminOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showAdminOnly
    ? users.filter((user) => user.role === "admin")
    : users;

  if (isUsersLoading) return <UsersListSkeleton />;
  
  return (
    <div
      className="h-screen w-full border-r border-base-300 flex flex-col"
    >
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium">Users List</span>
        </div>
      </div>

      {/* Skeleton Users */}
      <div className="overflow-y-auto w-full py-3 flex-grow">
        {filteredUsers.map((user, index) => (
          <div key={user._id} className={`w-full p-3 flex items-center gap-3 ${index < filteredUsers.length - 1 ? 'border-b border-base-300' : ''}`}>
            {/* Numbering on the left */}
            <div className="font-medium w-6 text-center select-none">
              {index + 1}
            </div>

            {/* Avatar skeleton */}
            <div className="relative">
              <div className="skeleton size-12 rounded-full" />
            </div>

            {/* User info skeleton */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="font-medium truncate">{user.name}</div>
              <div className="text-sm text-zinc-400 truncate">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
