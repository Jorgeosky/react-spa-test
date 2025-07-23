import React, { useState, useEffect, useContext } from 'react';

import UserList from './components/UserList';
import SearchBar from './components/SearchBar';
import UserForm from './components/UserForm';
import { useUsers } from './hooks/useUsers';
import { UserContext } from './context/UserContext';

import { Divider, Box, Typography } from '@mui/material';

const App: React.FC = () => {
  useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const { filterUsers } = useContext(UserContext);
  const [userToEdit, setUserToEdit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const handleOpenForm = (user = null) => {
    setUserToEdit(user);
    setShowForm(true);
  };

  useEffect(() => {
    filterUsers(searchTerm);
  }, [searchTerm, filterUsers]);

  return (
    <div className="App">
      <Box
        sx={{
          width: '95%',
          height: 'auto',
          borderRadius: 10,
          margin: 5,
          bgcolor: 'white',
          boxShadow: 20,
        }}
      >
        <div className="NavBar">
          <Typography
            variant="h2"
            component="span"
            style={{ margin: '20px', fontWeight: 'bold' }}
          >
            UserHub
          </Typography>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleOpenForm={handleOpenForm}
          />
        </div>
        <Divider style={{ margin: '20px 0' }} />
        <UserForm
          userToEdit={userToEdit}
          showForm={showForm}
          setShowForm={setShowForm}
        />
        <UserList handleOpenForm={handleOpenForm} />
      </Box>
    </div>
  );
};

export default App;
