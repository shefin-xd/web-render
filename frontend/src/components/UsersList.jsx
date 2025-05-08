import { useEffect, useState } from "react";
import { useUserStore } from "../store/useUserStore";
import { useAuthStore } from "../store/useAuthStore";
import { Users } from "lucide-react";

const UsersList = () => {
  const { getUsers, users, selectedUser , setSelectedUser  } = useUserStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="border-b border-base-300 w-full p-5 flex items-center justify-center">
        <div className="flex items-center gap-2 justify-center">
          <Users className="size-6" />
          <span className="font-medium">Users List</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="cursor-pointer flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-sm"
            />
            <span className="text-sm">Show admin only</span>
          </label>
          <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
        </div>
      </div>

      <div className="overflow-y-auto w-full py-3 flex-grow">
        <div className="container mx-auto p-4">
          {filteredUsers.map((user, index) => (
            <div key={user._id}>
              <button
                onClick={() => setSelectedUser (user)}
                className={`
                  w-full p-3 flex items-center gap-2
                  hover:bg-base-300 transition-colors
                  ${selectedUser  ?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}
                `}
              >
                <span className="font-medium">{index + 1}.</span> {/* Numbering */}
                <div className="relative">
                  <img
                    src={user.profilePic || "/avatar.png"}
                    alt={user.name}
                    className="size-12 object-cover rounded-full"
                  />
                  {onlineUsers.includes(user._id) && (
                    <span
                      className="absolute bottom-0 right-0 size-3 bg-green-500 
                      rounded-full ring-2 ring-zinc-900"
                    />
                  )}
                </div>

                {/* User info - name and email */}
                <div className="flex flex-col text-left min-w-0 ml-2">
                  <div className="font-medium truncate">{user.name}</div>
                  <div className="text-sm text-zinc-400 truncate">{user.email}</div>
                </div>
              </button>
              <hr className="border-t border-base-300" /> {/* Divider line */}
            </div>
          ))}

          {filteredUsers.length === 0 && (
            <div className="text-center text-zinc-500 py-4">No users available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
