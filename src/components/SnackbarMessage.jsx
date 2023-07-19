import React from 'react';
import { Snackbar } from '@mui/material';

const SnackbarMessage = ({ open, onClose, message }) => {
  return <Snackbar open={open} onClose={onClose} autoHideDuration={2000} message={message} />;
};

export default SnackbarMessage;
