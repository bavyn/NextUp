import React from 'react';
import '../styles/UserPage.css';
import TopNavBar from '../components/TopNavBar';
import SearchBar from '../components/SearchBar';

const UserPage = () => {
  const handleSearch = (query) => {
    const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
    window.location.href = searchUrl;
  };

  return (
    <div className='user-page'>
      <header className='user-page-header'>
        <TopNavBar />
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
