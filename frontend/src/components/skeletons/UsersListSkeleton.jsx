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
      
      <div className="overflow-y-auto w-full py-3">
        {skeletonUsers.map((_, idx) => (
          <div key={idx} className="w-full p-3 flex items-center gap-3">
            {/* Avatar skeleton */}
            <div className="relative mx-auto lg:mx-0">
              <div className="skeleton size-12 rounded-full" />
            </div>


      <div className="overflow-y-auto w-full py-3 flex-grow">
        <div className="container mx-auto p-4">
          {skeletonUsers.map((_, idx, index) => (
            <div key={idx}>
                <span className="font-medium">{index + 1}.</span> {/* Numbering */}
                <div className="relative">
                  <div className="skeleton size-12 rounded-full" />
                </div>

                {/* User info - name and email */}
                <div className="flex flex-col text-left min-w-0 ml-2">
                  <div className="skeleton h-4 w-32 mb-2" />
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
