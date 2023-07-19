import React from 'react';
import { ListItemAvatar, Avatar } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';

const NowPlayingControls = ({
  playColour,
  pauseColour,
  ffColour,
  handlePlayClick,
  handlePauseClick,
  handleFFClick,
}) => {
  return (
    <div className='now-playing-controls'>
      <ListItemAvatar>
        <Avatar className={playColour === 'clicked' ? 'playing' : ''}>
          <PlayCircleIcon onClick={handlePlayClick} />
        </Avatar>
      </ListItemAvatar>
      <ListItemAvatar>
        <Avatar className={pauseColour === 'clicked' ? 'paused' : ''}>
          <PauseCircleIcon onClick={handlePauseClick} />
        </Avatar>
      </ListItemAvatar>
      <ListItemAvatar>
        <Avatar className={ffColour === 'clicked' ? 'ff' : ''}>
          <FastForwardIcon onClick={handleFFClick} />
        </Avatar>
      </ListItemAvatar>
    </div>
  );
};

export default NowPlayingControls;
