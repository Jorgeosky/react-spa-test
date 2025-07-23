import React, { useState, useEffect, useContext } from 'react';

import { UserContext } from '../context/UserContext';

import { Button, Modal, Box, Typography, TextField } from '@mui/material';

const UserForm: React.FC<any> = ({ userToEdit, showForm, setShowForm }) => {
  const { addUser, editUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const handleClose = () => {
    setShowForm(false);
    setFirstName('');
    setLastName('');
    setEmail('');
    setAvatar('');
  };

  useEffect(() => {
    if (userToEdit) {
      setFirstName(userToEdit.first_name);
      setLastName(userToEdit.last_name);
      setEmail(userToEdit.email);
      setAvatar(userToEdit.avatar);
    }
  }, [userToEdit]);

  const handleSubmit = () => {
    if (userToEdit) {
      editUser({
        ...userToEdit,
        first_name: firstName,
        last_name: lastName,
        email,
        avatar,
      });
    } else {
      addUser({ first_name: firstName, last_name: lastName, email, avatar });
    }
    setShowForm(false);
  };

  return (
    <Modal
      open={showForm}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          {userToEdit ? 'Editar Usuario' : 'Agregar Usuario'}
        </Typography>
        <form onSubmit={handleSubmit} className="user-form">
          <TextField
            id="first-name"
            label="Nombre"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />
          <TextField
            id="last-name"
            label="Apellido"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />
          <TextField
            id="avatar"
            label="Avatar URL"
            variant="outlined"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            required
            style={{ marginBottom: '10px' }}
          />
          <br />
          <Button
            variant="outlined"
            type="submit"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            style={{ marginRight: '10px' }}
            disabled={
              firstName && lastName && email && avatar ? undefined : true
            }
          >
            {userToEdit ? 'Actualizar Usuario' : 'Agregar Usuario'}
          </Button>
          <Button
            variant="outlined"
            color="error"
            type="button"
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default UserForm;
