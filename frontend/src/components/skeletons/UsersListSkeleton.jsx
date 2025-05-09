import { Users } from "lucide-react";

const UsersListSkeleton = () => {
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
                  <div className="font-medium truncate">Name</div>
                  <div className="text-sm text-zinc-400 truncate">email</div>
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
