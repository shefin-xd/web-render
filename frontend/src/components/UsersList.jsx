import { Zap } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";

const UsersList = () => {
  const { authUser } = useAuthStore();

  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50">
      <div className="max-w-md text-center space-y-6">
        

        {/* Welcome Text */}
        <h2 className="text-2xl font-bold">Hi {authUser?.name}!</h2>
      </div>
    </div>
  );
};

export default UsersList;
