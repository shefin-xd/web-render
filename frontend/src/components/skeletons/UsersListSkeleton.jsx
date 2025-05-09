import { Users } from "lucide-react";

const UsersListSkeleton = () => {
  // Create 8 skeleton items
  const skeletonUsers = Array(8).fill(null);

  return (
    <div
      className="h-screen w-full border-r border-base-300 
    flex flex-col transition-all duration-200"
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
        {skeletonUsers.map((_, idx) => (
          <div key={idx} className={`w-full p-3 flex items-center gap-3 ${idx < skeletonUsers.length - 1 ? 'border-b border-base-300' : ''}`}>
            {/* Numbering on the left */}
            <div className="font-medium w-6 text-center select-none">
              {idx + 1}
            </div>

            {/* Avatar skeleton */}
            <div className="relative">
              <div className="skeleton size-12 rounded-full" />
            </div>

            {/* User info skeleton */}
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <div className="skeleton h-4 w-32 mb-2" />
              <div className="skeleton h-3 w-16" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersListSkeleton;

