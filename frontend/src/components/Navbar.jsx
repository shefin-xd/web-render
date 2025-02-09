import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-blue-500 border-b border-blue-700 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-opacity-90"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-red-100 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-red-500" />
              </div>
              <h1 className="text-3xl font-bold text-red-700">
                Chat Application
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            {authUser && (
              <>
                <Link to={"/profile"} className="btn btn-sm gap-2 text-red-200 bg-red-500 hover:bg-red-600">
                  <User className="size-5 text-white" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center text-red-200 bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition"
                  onClick={logout}
                >
                  <LogOut className="size-5 text-white" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
