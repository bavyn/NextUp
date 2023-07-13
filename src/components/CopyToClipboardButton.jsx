import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@mui/material';

const CopyToClipboardButton = ({ link }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(link);
  };

  return (
    <div>
      <Button onClick={handleClick}>Copy link to Clipboard</Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message='Copied to clipboard'
      />
    </div>
  );
};

CopyToClipboardButton.propTypes = {
  link: PropTypes.string.isRequired,
};

export default CopyToClipboardButton;
