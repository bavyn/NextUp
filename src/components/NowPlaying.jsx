import React from 'react';
import { ListItemText } from '@mui/material';
import Lottie from 'lottie-react';
import musicAnimation from '../lotties/music.json';
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
  return (
    <div className='now-playing'>
      <h2>
        Now Playing
        <div className='now-playing-animation'>
          <Lottie animationData={musicAnimation} />
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
