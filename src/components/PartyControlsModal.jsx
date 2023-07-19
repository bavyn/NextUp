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
import ExportPlaylistButton from './ExportPlaylistButton';
import HistoryTab from './HistoryTab';

function PartyControlsModal({ open, onClose, userId }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Box textAlign='center'>
          <Typography variant='h6'>
            Party Controls <br />
          </Typography>
        </Box>
      </DialogTitle>
      <Box>
        <Tabs value={activeTab} onChange={handleChangeTab} centered>
          <Tab label='Start the Party' />
          <Tab label='View Song History' />
          <Tab label='Export Playlist' />
        </Tabs>
        <Box>
          {activeTab === 0 && <Typography>Content for Tab 1</Typography>}
          {activeTab === 1 && (
            <>
              <Typography>
                <HistoryTab />
              </Typography>
            </>
          )}
          {activeTab === 2 && (
            <>
              <Typography>
                Export your playlist to Spotify to save the songs from your event!
              </Typography>
              <ExportPlaylistButton userId={userId} />
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
