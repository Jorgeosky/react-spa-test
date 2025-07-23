import React, { useState } from 'react';

import { User } from '../types/User';
import Confirm from './Confirm';

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
  Divider,
} from '@mui/material';

const UserCard: React.FC<{
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
  handleOpenForm: (value: User | null) => void;
}> = ({ user, onEdit, onDelete, handleOpenForm }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    handleOpenForm(user);
  };

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{ margin: '25px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
    >
      <CardContent>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            alt={`${user.first_name} ${user.last_name}`}
            src={user.avatar}
            sx={{ width: 112, height: 112 }}
            style={{ marginRight: '16px' }}
          />
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {`${user.first_name} ${user.last_name}`}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {user.email}
            </Typography>
          </div>
        </div>
      </CardContent>
      <Divider />
      <CardActions style={{ justifyContent: 'right' }}>
        <Button
          aria-describedby={user.id.toString()}
          size="small"
          onClick={handleClick}
        >
          Editar
        </Button>

        <Button size="small" color="error" onClick={() => setShowConfirm(true)}>
          Eliminar
        </Button>
        <Confirm
          showConfirm={showConfirm}
          setShowConfirm={setShowConfirm}
          onDelete={() => onDelete(user.id)}
        />
      </CardActions>
    </Card>
  );
};

export default UserCard;
