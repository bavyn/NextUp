import React from 'react';
import { ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
import PropTypes from 'prop-types';
import '../styles/NowPlaying.css';

const NowPlaying = ({
  nowPlaying,
  playing,
  playingArtist,
  playingAlbum,
  playColour,
  pauseColour,
  handlePlayClick,
  handlePauseClick,
  handleFFClick,
}) => {
  NowPlaying.propTypes = {
    nowPlaying: PropTypes.object.isRequired,
    playing: PropTypes.bool.isRequired,
    playingArtist: PropTypes.string.isRequired,
    playingAlbum: PropTypes.string.isRequired,
    playColour: PropTypes.string.isRequired,
    pauseColour: PropTypes.string.isRequired,
    handlePlayClick: PropTypes.func.isRequired,
    handlePauseClick: PropTypes.func.isRequired,
    handleFFClick: PropTypes.func.isRequired,
  };

  return (
    <div className='now-playing'>
      <h2>
        Now Playing
        <div className='now-playing-animation'>
          <Lottie animationData={musicAnimation} setSpeed={playing ? 0 : 20} />
        </div>
      </h2>
      <div className='now-playing-song-details'>
        <ListItemText
          primary={nowPlaying?.name || 'Unknown Track'}
          secondary={`${playingArtist || 'Unknown Artist'} - ${playingAlbum || 'Unknown Album'}`}
          style={{ textAlign: 'center' }}
        />
      </div>
      <div className='now-playing-avatars'>
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
          <Avatar className={pauseColour === 'clicked' ? 'paused' : ''}>
            <FastForwardIcon onClick={handleFFClick} />
          </Avatar>
        </ListItemAvatar>
      </div>
    </div>
  );
};

export default NowPlaying;
