import React from 'react';
import { ListItemText } from '@mui/material';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
import PropTypes from 'prop-types';
import '../styles/NowPlaying.css';

const NowPlaying = ({ nowPlaying, playing, playingArtist, playingAlbum }) => {
  NowPlaying.propTypes = {
    nowPlaying: PropTypes.object.isRequired,
    playing: PropTypes.bool.isRequired,
    playingArtist: PropTypes.string.isRequired,
    playingAlbum: PropTypes.string.isRequired,
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
    </div>
  );
};

export default NowPlaying;
