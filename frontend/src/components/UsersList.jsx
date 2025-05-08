import React, { useState } from 'react';

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
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
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
                <img
                  src={user.avatar}
                  alt={`${user.name} avatar`}
                  className="w-12 h-12 rounded-full border border-base-300"
                  loading="lazy"
                />
                <div>
                  <p className={`text-lg font-medium ${user.starred ? 'text-yellow-600' : 'text-base-content'}`}>
                    {user.name}
                  </p>
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

                {/* On/Off toggle switch for star */}
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={user.starred}
                      onChange={() => handleToggleStar(user.id)}
                      className="sr-only"
                      aria-label={`${user.starred ? 'Starred' : 'Not starred'} toggle for ${user.name}`}
                    />
                    <div className="w-12 h-6 bg-gray-300 rounded-full shadow-inner"></div>
                    <div
                      className={`dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition ${
                        user.starred ? 'transform translate-x-6 bg-yellow-400' : ''
                      }`}
                    ></div>
                  </div>
                  <span className="ml-3 text-sm font-medium select-none">
                    {user.starred ? 'On' : 'Off'}
                  </span>
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
