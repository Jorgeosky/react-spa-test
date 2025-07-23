import React from 'react';

import { Button, TextField } from '@mui/material';

const SearchBar: React.FC<any> = ({
  searchTerm,
  setSearchTerm,
  handleOpenForm,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        id="filled-search"
        label="Buscar"
        placeholder="Nombre, Apellido, Email"
        type="search"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button
        size="large"
        variant="contained"
        style={{ marginLeft: '10px' }}
        onClick={() => handleOpenForm(null)}
      >
        Agregar Usuario
      </Button>
    </div>
  );
};

export default SearchBar;
