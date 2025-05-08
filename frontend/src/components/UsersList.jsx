import React, { useState } from 'react';

const UsersList = () => {
  // Sample users data with initial starred state
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Johnson', starred: false },
    { id: 2, name: 'Bob Smith', starred: true },
    { id: 3, name: 'Charlie Brown', starred: false },
  ]);

  // Function to delete a user by id
  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Function to toggle star status by user id
  const handleToggleStar = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        return { ...user, starred: !user.starred };
      }
      return user;
    }));
  };

  return (
      <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Users List</h2>

      {users.length === 0 ? (
        <p className="text-center text-gray-500 italic">No users available.</p>
      ) : (
        <ul className="space-y-4">
          {users.map(user => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-base-100 p-4 rounded-md shadow-sm border border-base-300"
            >
              <span className={`text-lg ${user.starred ? 'font-bold text-yellow-500' : 'text-base-content'}`}>
                {user.name}
              </span>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn btn-sm btn-error"
                  aria-label={`Delete ${user.name}`}
                >
                  Delete
                </button>
                <button
                  onClick={() => handleToggleStar(user.id)}
                  className={`btn btn-sm ${user.starred ? 'btn-warning' : 'btn-outline'}`}
                  aria-label={`${user.starred ? 'Unstar' : 'Star'} ${user.name}`}
                >
                  {user.starred ? '★' : '☆'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    
  );
};

export default UsersList;
