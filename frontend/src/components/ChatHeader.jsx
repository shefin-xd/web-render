import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";
import { formatTimeForDisplay } from "../lib/utils";
import { useEffect } from "react";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers, lastSeenUsers, getLastSeen } = useAuthStore();

  useEffect(() => {
    if (selectedUser && !onlineUsers.includes(selectedUser._id) && !lastSeenUsers[selectedUser._id]) {
      getLastSeen(selectedUser._id);
    }
  }, [selectedUser, onlineUsers]);

  const isOnline = selectedUser ? onlineUsers.includes(selectedUser._id) : false;
  const lastSeen = lastSeenUsers[selectedUser._id];

  let statusText = isOnline 
    ? "Online"
    : (lastSeen ? `Last seen: ${formatTimeForDisplay(lastSeen, "lastSeen")}` : "Offline");

  return (
    <div className="p-2.5 border-b border-base-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="avatar">
            <div className="size-10 rounded-full relative">
              <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.name} />
            </div>
          </div>
          {/* User info */}
          <div>
            <h3 className="font-medium">{selectedUser.name}</h3>
            <p className="text-sm text-base-content/70">
              {statusText}
            </p>
          </div>
        </div>
        {/* Close button */}
        <button onClick={() => setSelectedUser(null)}>
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
