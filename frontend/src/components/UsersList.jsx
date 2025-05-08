import React, { useState } from 'react';

const AdminIcon = () => (
  <svg
    className="w-3 h-3 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M10 0L3 4v6c0 5 4 9 7 10 3-1 7-5 7-10V4l-7-4zM9 7h2v4H9V7zm1-4a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
);

const UsersList = () => {
  // Sample users data with profile picture, email, and starred status
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      avatar: 'https://i.pravatar.cc/48?img=1',
      starred: false,
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      avatar: 'https://i.pravatar.cc/48?img=2',
      starred: true,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      avatar: 'https://i.pravatar.cc/48?img=3',
      starred: false,
    },
  ]);

  // Delete user handler
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Toggle star handler
  const handleToggleStar = (id) => {
    setUsers(users.map(user => (user.id === id ? { ...user, starred: !user.starred } : user)));
  };

  return (
    <div className="w-screen h-screen bg-base-200 flex flex-col p-6">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Users List
      </h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500 italic flex-grow flex items-center justify-center">
          No users available.
        </p>
      ) : (
        <ul className="flex-grow overflow-auto space-y-4">
          {users.map(user => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-md border border-base-300"
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12">
                  <img
                    src={user.avatar}
                    alt={`${user.name} avatar`}
                    className="w-12 h-12 rounded-full border border-base-300"
                    loading="lazy"
                  />
                  {user.starred && (
                    <span className="absolute top-0 right-0 bg-green-500 rounded-full p-[1.5px] border border-white">
                      <AdminIcon />
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-lg font-medium text-base-content">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-error"
                  aria-label={`Delete ${user.name}`}
                >
                  Delete
                </button>

                {/* Checkbox toggle for star */}
                <label className="label cursor-pointer py-0 m-0">
                  <input
                    type="checkbox"
                    checked={user.starred}
                    onChange={() => handleToggleStar(user.id)}
                    className="checkbox checkbox-primary"
                    aria-label={`Admin toggle for ${user.name}`}
                  />
                </label>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsersList;
