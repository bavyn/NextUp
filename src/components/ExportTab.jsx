import React from 'react';
import { DialogContent, DialogActions, Typography } from '@mui/material';
import '../styles/ExportTab.css';
import ExportButton from './ExportButton';

const ExportTab = ({ userId }) => {
  return (
    <div className='export-playlist-tab'>
      <DialogContent>
        <Typography>Export your playlist to Spotify to save the songs from your event!</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', position: 'relative' }}>
        <ExportButton userId={userId} />
      </DialogActions>
    </div>
  );
};

export default ExportTab;
