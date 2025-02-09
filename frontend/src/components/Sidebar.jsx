import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, ToggleLeft, ToggleRight } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-72 border-r border-gray-300 dark:border-gray-700 flex flex-col transition-all duration-200 bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-300 dark:border-gray-700 w-full p-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Users className="size-6 text-gray-800 dark:text-gray-300" />
          <span className="font-semibold text-gray-800 dark:text-gray-300 hidden lg:block">
            Contacts
          </span>
        </div>
        {/* Toggle Button */}
        <button
          onClick={() => setShowOnlineOnly(!showOnlineOnly)}
          className="flex items-center gap-2 text-gray-500 hover:text-primary transition"
        >
          {showOnlineOnly ? <ToggleRight className="size-5 text-green-500" /> : <ToggleLeft className="size-5" />}
          <span className="hidden lg:inline text-sm">Online</span>
        </button>
      </div>

      {/* User List */}
      <div className="overflow-y-auto w-full py-3 px-2">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 
              ${
                selectedUser?._id === user._id
                  ? "bg-gray-200 dark:bg-gray-800 shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {/* Profile Picture */}
            <div className="relative mx-auto lg:mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.fullName}
                className="size-12 object-cover rounded-full border border-gray-300 dark:border-gray-600 shadow-sm"
              />
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-900" />
              )}
            </div>

            {/* User Info (Visible on Large Screens) */}
            <div className="hidden lg:block text-left min-w-0">
              <div className="font-medium text-gray-800 dark:text-gray-200 truncate">{user.fullName}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="text-center text-gray-500 py-4 dark:text-gray-400">No online users</div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
