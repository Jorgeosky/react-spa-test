import React from 'react';

import { Divider, Modal, Box, Button, Typography } from '@mui/material';

const Confirm: React.FC<{
  showConfirm: boolean;
  setShowConfirm: (value: boolean) => void;
  onDelete: () => void;
}> = ({ showConfirm, setShowConfirm, onDelete }) => {
  if (!showConfirm) return null;

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const handleConfirm = () => {
    // Handle confirmation logic here
    onDelete();
    setShowConfirm(false);
  };

  return (
    <Modal
      open={showConfirm}
      onClose={handleCancel}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '70%',
            sm: 400,
          },
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 2,
        }}
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <Typography>
              <h2>Eliminar Usuario</h2>
            </Typography>
            <Divider />
            <Typography>
              <p className="mt-4">Esta Seguro de eliminar este usuario?</p>
            </Typography>
            <div style={{ marginTop: '50px' }}>
              <Button
                variant="outlined"
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleConfirm}
                style={{ marginRight: '10px' }}
              >
                Confirmar
              </Button>
              <Button
                variant="outlined"
                type="button"
                color="error"
                onClick={handleCancel}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Confirm;
