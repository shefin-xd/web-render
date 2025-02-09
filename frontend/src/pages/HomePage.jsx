import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100 dark:bg-blue-900">
      <div className="w-full max-w-6xl h-[calc(100vh-6rem)] bg-white dark:bg-blue-800 rounded-2xl shadow-lg overflow-hidden flex">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Chat View */}
        <div className="flex-1 flex items-center justify-center p-4">
          {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
