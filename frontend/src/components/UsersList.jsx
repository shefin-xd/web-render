import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";
import UsersListSkeleton from "./skeletons/UsersListSkeleton";
import { Users, ShieldCheck, Trash2, Star, Loader2 } from "lucide-react";

const UsersList = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading, deleteUser, toggleAdmin, isDeletingUser, isTogglingAdmin } = useUserStore();
  const { onlineUsers } = useAuthStore();
  const [showAdminOnly, setShowAdminOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showAdminOnly
    ? users.filter((user) => user.role === "admin")
    : users;

  if (isUsersLoading) return <UsersListSkeleton />;

  const handleToggleAdmin = (userId) => {
    const confirmPromote = window.confirm("Are you sure you want to promote/demote this user?");
    if (confirmPromote) {
      toggleAdmin(userId);
    }
  };

  const handleDeleteUser  = (userId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      deleteUser (userId);
    }
  };

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
        {filteredUsers.length === 0 ? (
          <div className="text-center text-gray-500">No users found</div>
        ) : (
          filteredUsers.map((user, index) => (
            <div
              key={user._id}
              className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
                index < filteredUsers.length - 1 ? "border-b border-base-300" : ""
              } ${selectedUser ?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}`}
              onClick={() => setSelectedUser (user)}
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
                  <div className="flex items-center">
                    <div className="font-medium truncate">{user.name}</div>
                    {user.role === "admin" && (
                      <ShieldCheck
                        className="ml-2 text-red-500"
                        size={18}
                        title="Admin"
                      />
                    )}
                  </div>
                </div>
                <div className="text-sm text-zinc-400 truncate">{user.email}</div>
              </div>

              {/* Admin Toggle and Delete Icon */}
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the onClick of the user div
                    handleToggleAdmin(user._id);
                  }}
                  className={`btn btn-sm ${user.role === "admin" ? "btn-secondary" : "btn-primary"}`}
                >
                  {isTogglingAdmin[user._id] ? (
                    <>
                      <Loader2 className="size-5 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    user.role === "admin" ? "Demote" : "Promote"
                  )}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the onClick of the user div
                    handleDeleteUser (user._id);
                  }}
                  className="text-red-500 hover:text-red-700"
                  aria-label="Delete User"
                >
                  {isDeletingUser[user._id] ? (
                    <Loader2 className="size-5 animate-spin" />
                  ) : (
                    <Trash2 size={20} />
                  )}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsersList;
