import React from 'react';
import { X, Trash2, ShieldCheck } from 'lucide-react';

const UserModal = ({ user, onClose, onDelete, onMakeAdmin }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-5 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">{user.name}</h2>
          <button onClick={onClose}>
            <X className="text-gray-500" />
          </button>
        </div>
        <div className="mt-4">
          <img
            src={user.profilePic || "/avatar.png"}
            alt={user.name}
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
          <p className="mt-2 text-center">{user.email}</p>
          <p className="mt-2 text-center">{user.role}</p>
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="text-red-500 flex items-center"
            onClick={() => onDelete(user._id)}
          >
            <Trash2 className="mr-1" /> Delete
          </button>
          <button
            className="text-blue-500 flex items-center"
            onClick={() => onMakeAdmin(user._id)}
          >
            <ShieldCheck className="mr-1" /> Make Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
