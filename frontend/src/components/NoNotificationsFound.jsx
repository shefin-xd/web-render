import { BellIcon } from "lucide-react";

const NoNotificationsFound = () => {
  return (
    <div className="h-screen container mx-auto px-4 pt-20 max-w-5xl">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">Choose a theme for your chat interface</p>
        </div>
        
        <div className="size-16 rounded-full bg-base-300 flex items-center justify-center mb-4">
          <BellIcon className="size-8 text-base-content opacity-40" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No notifications yet</h3>
        <p className="text-base-content opacity-70 max-w-md">
          When you receive friend requests or messages, they'll appear here.
        </p>
      </div>
    </div>
  );
}

export default NoNotificationsFound;
