import { React, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/HostPage.css';
// import SideMenu from '../components/SideMenu';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import QRCodeDisplay from '../components/QRCodeDisplay';

const HostPage = () => {
  const { userId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  const [nowPlaying, setNowPlaying] = useState({});
  const [playingArtist, setPlayingArtist] = useState('');
  const [playingAlbum, setPlayingAlbum] = useState('');

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`https://api.nextup.rocks/events/${userId}/playlist`);
        const { playlist, currentlyPlaying } = response.data;
        setPlaylist(playlist.queue);
        setNowPlaying(currentlyPlaying);
        if (currentlyPlaying && currentlyPlaying.artists && currentlyPlaying.artists.length > 0) {
          setPlayingArtist(currentlyPlaying.artists[0].name);
        }

        if (currentlyPlaying && currentlyPlaying.artists && currentlyPlaying.artists.length > 0) {
          setPlayingAlbum(currentlyPlaying.album.name);
        }
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    };

    fetchPlaylist();
    const intervalId = setInterval(fetchPlaylist, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handlePlayClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/resume`);
      console.log(response.data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  const handlePauseClick = async () => {
    try {
      const response = await axios.get(`https://api.nextup.rocks/events/${userId}/pause`);
      console.log(response.data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  return (
    <div className='host-page'>
      <header className='host-page-header'>
        <h1>{`Welcome ${userId}`}</h1>
      </header>
      {/* <SideMenu /> */}

      <section className='host-page-playlist'>
        <h2> Now Playing </h2>
        <div className='host-page-song-details'>
          <ListItemText
            primary={nowPlaying?.name || 'Unknown Track'}
            secondary={`${playingArtist || 'Unknown Artist'} - ${playingAlbum || 'Unknown Album'}`}
          />
        </div>
        <div className='host-page-avatars'>
          <ListItemAvatar>
            <Avatar>
              <PlayCircleIcon onClick={handlePlayClick} />
            </Avatar>
          </ListItemAvatar>
          <ListItemAvatar>
            <Avatar>
              <PauseCircleIcon onClick={handlePauseClick} />
            </Avatar>
          </ListItemAvatar>
        </div>
        <h2>Your Playlist</h2>
        <List>
          {playlist &&
            playlist.map((item) => {
              const track = item?.Track;
              const artist = track?.Artist?.name;
              const album = track?.Album?.name;
              return (
                <ListItem key={item.id} className='host-page-song-item'>
                  <div className='host-page-song-details'>
                    <ListItemText
                      primary={track?.name || 'Unknown Track'}
                      secondary={`${artist || 'Unknown Artist'} - ${album || 'Unknown Album'}`}
                    />
                  </div>
                  <div className='host-page-avatars'>
                    <ListItemAvatar>
                      <Avatar>
                        <DeleteIcon />
                      </Avatar>
                    </ListItemAvatar>
                  </div>
                </ListItem>
              );
            })}
        </List>
        <QRCodeDisplay value={`https://nextup.rocks/event/${userId}`} />
      </section>
    </div>
  );
};

export default HostPage;
