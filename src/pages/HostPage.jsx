import { React, useEffect, useState } from 'react';
import '../styles/HostPage.css';
// import SideMenu from '../components/SideMenu';
import { useParams } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const HostPage = () => {
  const { userId } = useParams();
  const [playlist, setPlaylist] = useState([]);
  useEffect(() => {
    const fetchPlaylist = async () => {
      console.log(`Fetching playlist for user ${userId}`);
      try {
        const response = await fetch(`http://localhost:3000/events/${userId}/playlist`);
        const data = await response.json();
        setPlaylist(data.playlist.queue);
        console.log('playlist data:', data.playlist.queue);
      } catch (error) {
        console.error('Failed to fetch playlist:', error);
      }
    };

    fetchPlaylist();
  }, []);

  return (
    <div className='host-page'>
      <header className='host-page-header'>
        <h1>{`Welcome ${userId}`}</h1>
      </header>
      {/* <SideMenu /> */}

      <section className='host-page-playlist'>
        <h2>Your Playlist</h2>
        <List>
          {playlist &&
            playlist.map((item) => {
              const track = item?.Track;
              const artist = track?.Artist?.name;
              const album = track?.Album?.name;
              return (
                <ListItem key={item.id}>
                  <ListItemText
                    primary={track?.name || 'Unknown Track'}
                    secondary={`${artist || 'Unknown Artist'} - ${album || 'Unknown Album'}`}
                  />
                </ListItem>
              );
            })}
        </List>
      </section>
    </div>
  );
};

export default HostPage;

{
  /* <div key={item.id}>
<h3>{track?.name || 'Unknown Track'}</h3>
<p>
  {artist || 'Unknown Artist'} - {album || 'Unknown Album'}
</p>
</div> */
}
