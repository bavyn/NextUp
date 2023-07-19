import React, { useEffect, useState } from 'react';
import { DialogContent, DialogActions, Typography, Box, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import StartThePartyButton from '../components/StartThePartyButton';
import axios from 'axios';

const PartyModal = ({ userId, playlist }) => {
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
    <div className='start-party-tab'>
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
      </DialogActions>
    </div>
  );
};

PartyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  playlist: PropTypes.array.isRequired,
};

export default PartyModal;
