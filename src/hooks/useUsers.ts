import { useEffect, useContext } from 'react';

import { fetchUsers } from '../api/usersApi';
import { UserContext } from '../context/UserContext';

export const useUsers = () => {
  const { setUsers } = useContext(UserContext);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, [setUsers]);
};
