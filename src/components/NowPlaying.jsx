import React from 'react';
import { ListItemText } from '@mui/material';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
import PropTypes from 'prop-types';
import '../styles/NowPlaying.css';
import './NowPlayingControls';
import NowPlayingControls from './NowPlayingControls';

const NowPlaying = ({
  nowPlaying,
  playingArtist,
  playingAlbum,
  playColour,
  pauseColour,
  ffColour,
  handlePlayClick,
  handlePauseClick,
  handleFFClick,
  showControls,
}) => {
  NowPlaying.propTypes = {
    nowPlaying: PropTypes.object.isRequired,
    playing: PropTypes.bool.isRequired,
    playingArtist: PropTypes.string.isRequired,
    playingAlbum: PropTypes.string.isRequired,
    playColour: PropTypes.string.isRequired,
    pauseColour: PropTypes.string.isRequired,
    ffColour: PropTypes.string.isRequired,
    handlePlayClick: PropTypes.func.isRequired,
    handlePauseClick: PropTypes.func.isRequired,
    handleFFClick: PropTypes.func.isRequired,
    showControls: PropTypes.bool.isRequired,
  };

  return (
    <div className='now-playing'>
      <h2>
        Now Playing
        <div className='now-playing-animation'>
          <Lottie animationData={musicAnimation} isPaused={false} />
        </div>
      </h2>
      <div className='now-playing-song-details'>
        <ListItemText
          primary={nowPlaying?.name || 'Unknown Track'}
          secondary={`${playingArtist || 'Unknown Artist'} - ${playingAlbum || 'Unknown Album'}`}
          style={{ textAlign: 'center' }}
        />
      </div>
      {showControls && (
        <NowPlayingControls
          playColour={playColour}
          pauseColour={pauseColour}
          ffColour={ffColour}
          handlePlayClick={handlePlayClick}
          handlePauseClick={handlePauseClick}
          handleFFClick={handleFFClick}
        />
      )}
    </div>
  );
};

export default NowPlaying;
