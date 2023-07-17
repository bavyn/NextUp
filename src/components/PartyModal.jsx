import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
} from '@mui/material';
import PropTypes from 'prop-types';
import StartThePartyButton from '../components/StartThePartyButton';
import axios from 'axios';

const PartyModal = ({ open, onClose, userId, playlist }) => {
  const [devices, setDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.nextup.rocks/events/${userId}/devices`)
      .then((response) => {
        setDevices(response.data);
        setSelectedDevice(response.data[0]?.id || '');
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box textAlign='center'>
          <Typography variant='h6'>
            Start the party!! <br />
          </Typography>
        </Box>
      </DialogTitle>

      <DialogContent>
        <Typography>Please pick from the below clients associated with your account:</Typography>
        <Box display='flex' justifyContent='center'>
          <Select value={selectedDevice} onChange={handleDeviceChange}>
            {devices.map((device) => (
              <MenuItem key={device.id} value={device.id}>
                {device.name}
              </MenuItem>
            ))}
          </Select>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', position: 'relative' }}>
        <StartThePartyButton userId={userId} playlist={playlist} selectedDevice={selectedDevice} />
        <Button onClick={onClose} sx={{ position: 'absolute', right: '16px' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

PartyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
};

export default PartyModal;
