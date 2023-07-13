import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import SnackbarMessage from './SnackbarMessage';

const CopyToClipboardButton = ({ link }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(link);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}>Copy link to Clipboard</Button>
      <SnackbarMessage open={open} onClose={handleClose} message='Copied to clipboard' />
    </div>
  );
};

CopyToClipboardButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyToClipboardButton;
