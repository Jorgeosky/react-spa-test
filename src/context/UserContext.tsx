import React, { createContext, useState, ReactNode } from 'react';
import { User } from '../types/User';

interface UserContextType {
  users: User[];
  filteredUsers: User[];
  editingUser: User | null;
  addUser: (user: Omit<User, 'id'>) => void;
  editUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  filterUsers: (query: string) => void;
  setEditingUser: (user: User | null) => void;
  setUsers: (users: User[]) => void;
}

interface UserProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
  users: [],
  filteredUsers: [],
  editingUser: null,
  addUser: () => {},
  editUser: () => {},
  deleteUser: () => {},
  filterUsers: () => {},
  setEditingUser: () => {},
  setUsers: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const addUser = (user: Omit<User, 'id'>) => {
    const newUser: User = { ...user, id: Date.now() };
    setUsers([...users, newUser]);
    setFilteredUsers([...filteredUsers, newUser]);
  };

  const editUser = (updatedUser: User) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user,
    );
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
    setEditingUser(null);
  };

  const deleteUser = (userId: number) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    setFilteredUsers(updatedUsers);
  };

  const filterUsers = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.first_name.toLowerCase().includes(lowercasedQuery) ||
        user.last_name.toLowerCase().includes(lowercasedQuery) ||
        user.email.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredUsers(filtered);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        filteredUsers,
        editingUser,
        addUser,
        editUser,
        deleteUser,
        filterUsers,
        setEditingUser,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
