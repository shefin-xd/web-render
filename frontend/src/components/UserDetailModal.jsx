import React from 'react';

const UserDetailModal = ({ user, onClose, onMakeAdmin, onDelete }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-96">
        <h2 className="text-lg font-bold mb-4">{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <div className="flex justify-between mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => onMakeAdmin(user._id)}
          >
            Make Admin
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onDelete(user._id)}
          >
            Delete User
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
