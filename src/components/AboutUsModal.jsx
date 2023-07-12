import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';

const AboutUsModal = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className='about-modal'>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', textDecoration: 'underline' }}>About Us</DialogTitle>
        <DialogContent>
          <p>NextUp welcomes you! We are dedicated to revolutionizing the way you and your friends enjoy music together. With NextUp, you and your friends can create your own personalized playlist for any party or gathering without the need for a professional DJ.</p>
          {/* Add other content */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

AboutUsModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default AboutUsModal;
