import React from "react";
import { Camera, Mail, User, X, Trash2, ShieldCheck, Loader2 } from "lucide-react";

const UserModal = ({ user, isOpen, onClose, onDelete, onMakeAdmin }) => {
  if (!isOpen || !user) return null;

  return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="modal modal-open">
            <div className="modal-box">
              <button
                onClick={onClose}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                aria-label="Close modal"
                type="button"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="font-bold text-center text-lg">Profile Information</h2>
              <div className="flex flex-col items-center">
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt="Profile"
                  className="size-20 rounded-full object-cover border-2 mb-2"
                />
                <p className="text-sm text-zinc-400">Full Name: {user.name}</p>
                <p className="text-sm text-zinc-400">Email: {user.email}</p>
                <p className="text-sm text-zinc-400">Member Since: {user.createdAt?.split("T")[0]}</p>
                <p className="text-sm text-zinc-400">Status: Active</p>
              </div>
              <div className="modal-action">
                <button onClick={() => setShowProfileModal(false)} className="btn">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    {/*
    <div className="fixed inset-0 flex items-center justify-center z-50" >
      <div className="modal modal-open">
        <div className="modal-box">
        
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          aria-label="Close modal"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-bold text-center text-lg">{user.name}</h2>

        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.profilePic || "/avatar.png"}
            alt={user.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          <p className="text-center text-sm text-gray-600 truncate max-w-full">
            {user.email}
          </p>
          <p className="text-center font-medium text-gray-700">
            Role:{" "}
            {user.role === "admin" ? (
              <span className="text-red-500 flex items-center justify-center gap-1">
                Admin <ShieldCheck size={18} />
              </span>
            ) : (
              "User"
            )}
          </p>
        </div>

        <div className="modal-action justify-between mt-6">
          <button
            onClick={() => onDelete(user._id)}
            className="btn btn-error flex items-center gap-2"
            title="Delete User"
            type="button"
          >
            <Trash2 size={18} />
            Delete
          </button>
          {user.role !== "admin" && (
            <button
              onClick={() => onMakeAdmin(user._id)}
              className="btn btn-primary flex items-center gap-2"
              title="Make Admin"
              type="button"
            >
              <ShieldCheck size={18} />
              Make Admin
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  );
  */}
};

export default UserModal;

