import React from 'react';
import { Snackbar } from '@mui/material';
import PropTypes from 'prop-types';

const SnackbarMessage = ({ open, onClose, message }) => {
  return <Snackbar open={open} onClose={onClose} autoHideDuration={2000} message={message} />;
};

SnackbarMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
};

export default SnackbarMessage;
