import React, { useState } from 'react';
import {
  Box,
  Tab,
  Tabs,
  Typography,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from '@mui/material';
import ExportTab from './ExportTab';
import HistoryTab from './HistoryTab';
import StartPartyTab from './StartPartyTab';
import '../styles/PartyModal.css';

function PartyControlsModal({ open, onClose, userId, value, playlist }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      className='party-control-modal'
      scroll='paper'
      sx={{
        '& .MuiDialog-container': {
          alignItems: 'flex-start',
        },
      }}
      PaperProps={{ sx: { mt: '50px' } }}
    >
      <DialogTitle>
        <Box textAlign='center'>
          <Typography variant='h6'>
            Party Controls <br />
          </Typography>
        </Box>
      </DialogTitle>
      <Box>
        <Tabs value={activeTab} onChange={handleChangeTab} centered>
          <Tab className='party-tabs' label='Start Party' />
          <Tab className='party-tabs' label='View History' />
          <Tab className='party-tabs' label='Export Playlist' />
        </Tabs>
        <Box>
          {activeTab === 0 && (
            <>
              <Typography>
                <StartPartyTab value={value} playlist={playlist} userId={userId} />
              </Typography>
            </>
          )}
          {activeTab === 1 && (
            <>
              <Typography>
                <HistoryTab userId={userId} />
              </Typography>
            </>
          )}
          {activeTab === 2 && (
            <>
              <ExportTab userId={userId} />
            </>
          )}
        </Box>
      </Box>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default PartyControlsModal;
