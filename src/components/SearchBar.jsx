import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchQuery);
  };

  return (
    <div className='search-bar-container'>
      <TextField
        id='search'
        label='Search'
        variant='outlined'
        className='search-bar'
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      <Button onClick={handleSearchSubmit}>Search</Button>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.string.isRequired,
};

export default SearchBar;
