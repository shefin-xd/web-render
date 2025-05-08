import React, { useState } from 'react';

const AdminIcon = () => (
  <svg
    className="w-4 h-4 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M10 0L3 4v6c0 5 4 9 7 10 3-1 7-5 7-10V4l-7-4zM9 7h2v4H9V7zm1-4a1 1 0 110 2 1 1 0 010-2z" />
  </svg>
);

const DeleteIcon = () => (
  <svg
    className="w-6 h-6 text-red-600 transition-transform duration-300 ease-in-out hover:scale-110"
    fill="currentColor"
    viewBox="0 0 20 20"
    aria-hidden="true"
  >
    <path d="M6 2a1 1 0 00-1 1v1H2a1 1 0 000 2h1v12a2 2 0 002 2h10a2 2 0 002-2V6h1a1 1 0 000-2h-3V3a1 1 0 00-1-1H6zm0 2h8v1H6V4zm1 3h6v12H7V7z" />
  </svg>
);

const UsersList = () => {
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

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleToggleStar = (id) => {
    setUsers(users.map(user => (user.id === id ? { ...user, starred: !user.starred } : user)));
  };

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex flex-col p-8 select-none">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-8 flex flex-col flex-grow">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-12 tracking-wider drop-shadow-md">
          Users List
        </h2>

        {users.length === 0 ? (
          <p className="text-center text-gray-400 italic flex-grow flex items-center justify-center text-lg">
            No users available.
          </p>
        ) : (
          <ul className="space-y-6 overflow-auto flex-grow custom-scrollbar">
            {users.map(user => (
              <li
                key={user.id}
                className="flex justify-between items-center p-5 rounded-lg border border-gray-200 bg-white shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-5">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <img
                      src={user.avatar}
                      alt={`${user.name} avatar`}
                      className={`w-14 h-14 rounded-full border-4 transition-all duration-300 ease-in-out ${
                        user.starred ? 'border-yellow-400 shadow-yellow-300' : 'border-gray-300'
                      }`}
                      loading="lazy"
                    />
                    {user.starred && (
                      <span className="absolute top-0 right-0 bg-green-500 rounded-full p-1 border-2 border-white shadow-lg">
                        <AdminIcon />
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-gray-900 tracking-wide">{user.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-ghost p-2 rounded-full hover:bg-red-100 transition-colors duration-300"
                    aria-label={`Delete ${user.name}`}
                    title="Delete user"
                  >
                    <DeleteIcon />
                  </button>

                  <label className="label cursor-pointer m-0 p-0">
                    <input
                      type="checkbox"
                      checked={user.starred}
                      onChange={() => handleToggleStar(user.id)}
                      className="checkbox checkbox-primary checkbox-md transition-transform hover:scale-110"
                      aria-label={`Admin toggle for ${user.name}`}
                    />
                  </label>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <style>{`
        /* Custom scrollbar */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #a78bfa; /* Indigo-400 */
          border-radius: 20px;
          border: 2px solid transparent;
          background-clip: content-box;
        }
      `}</style>
    </div>
  );
};

export default UsersList;
