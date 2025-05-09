import { Users } from "lucide-react";

const UsersListSkeleton = () => {
  // Create 8 skeleton items
  const skeletonUsers = Array(8).fill(null);

  return (
    <div className="h-screen w-full flex flex-col transition-all duration-200">
      <div className="border-b border-base-300 w-full p-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="size-6" />
          <span className="font-medium">Users List</span>
        </div>
      </div>
      
      <div className="overflow-y-auto w-full py-3 flex-grow">
        <div className="container mx-auto p-4">
          {skeletonUsers.map((_, idx) => (
            <div key={idx}>
                <span className="font-medium">{idx + 1}.</span> {/* Numbering */}
              <div className="chat-image avatar">
            <div className="size-12 rounded-full">
              <div className="skeleton w-full h-full rounded-full" />
            </div>
          </div>

              <div className="chat-header mb-1">
            <div className="skeleton h-4 w-32 mb-2" />
          </div>

          <div className="chat-bubble bg-transparent p-0">
            <div className="skeleton h-3 w-16" />
          </div>



              <hr className="border-t border-base-300" /> {/* Divider line */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersListSkeleton;
