import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersListSkeleton from "./skeletons/UsersListSkeleton";
import { Users, ShieldCheck } from "lucide-react";

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
    <div className="h-screen w-full border-r border-base-300 flex flex-col">
      {/* Header */}
      <div className="border-b border-base-300 w-full p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium">Users List</span>
        </div>

        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showAdminOnly}
            onChange={(e) => setShowAdminOnly(e.target.checked)}
            className="checkbox checkbox-sm"
          />
          <span className="text-sm">Show admin only</span>
        </label>
      </div>

      {/* Users */}
      <div className="overflow-y-auto w-full py-3 flex-grow">
        {filteredUsers.map((user, index) => (
          <div
            key={user._id}
            className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
              index < filteredUsers.length - 1
                ? "border-b border-base-300"
                : ""
            } ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}`}
            onClick={() => setSelectedUser(user)}
          >
            {/* Numbering on the left */}
            <div className="font-medium w-6 text-center select-none">{index + 1}</div>

            {/* Avatar */}
            <div className="relative">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-12 object-cover rounded-full"
              />
              {onlineUsers.includes(user._id) && (
                <span
                  className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900"
                />
              )}
            </div>

            {/* User info */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="flex items-center justify-between w-full">
                <div className="font-medium truncate">{user.name}</div>
                {user.role === "admin" && (
                  <ShieldCheck
                    className="ml-2 text-red-500"
                    size={20}
                    title="Admin"
                  />
                )}
              </div>
              <div className="text-sm text-zinc-400 truncate">{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;

