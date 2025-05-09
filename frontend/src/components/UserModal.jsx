import React from "react";
import { X, Trash2, ShieldCheck } from "lucide-react";

const UserModal = ({ user, onClose, onDelete, onMakeAdmin }) => {
  if (!user) return null;

  return (
    <>
      {/* DaisyUI modal requires checkbox input controlling the modal visibility */}
      <input type="checkbox" id="user-modal" className="modal-toggle" checked readOnly />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative max-w-md w-full">
          {/* Close button on top right */}
          <button
            onClick={onClose}
            className="btn btn-sm btn-circle absolute right-2 top-2"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="text-lg font-bold mb-4 text-center">{user.name}</h3>

          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.profilePic || "/avatar.png"}
              alt={user.name}
              className="w-24 h-24 object-cover rounded-full"
            />
            <p className="text-center text-sm text-gray-600 truncate max-w-full">{user.email}</p>
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
            >
              <Trash2 size={18} />
              Delete
            </button>
            {user.role !== "admin" && (
              <button
                onClick={() => onMakeAdmin(user._id)}
                className="btn btn-primary flex items-center gap-2"
                title="Make Admin"
              >
                <ShieldCheck size={18} />
                Make Admin
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModal;
