import React, { useContext } from 'react';

import UserCard from './UserCard';
import { UserContext } from '../context/UserContext';

import { TablePagination } from '@mui/material';

const UserList: React.FC<any> = ({ handleOpenForm }) => {
  const { filteredUsers, setEditingUser, deleteUser } = useContext(UserContext);
  const userList = filteredUsers;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  const paginatedUsers = userList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div
        style={{
          display: 'grid',
          justifyItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          // gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '20px',
        }}
      >
        {paginatedUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={() => setEditingUser(user)}
            onDelete={() => deleteUser(user.id)}
            handleOpenForm={(value) => handleOpenForm(value)}
          />
        ))}
      </div>
      <TablePagination
        component="div"
        count={userList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[4, 8, 12]}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default UserList;
