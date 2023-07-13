import React from 'react';
import '../styles/UserPage.css';
import UserNavBar from '../components/UserNavBar';
import SearchBar from '../components/SearchBar';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();
  const handleSearch = (query) => {
    const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
  };

  return (
    <div className='user-page'>
      <header className='user-page-header'>
        <UserNavBar userId={userId} />
      </header>
      <div className='user-page-body'>
        <div className='user-page-search-bar'>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
