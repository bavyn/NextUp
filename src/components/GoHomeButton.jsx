import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const GoHomeButton = () => {
  return (
    <div className='go-home-button'>
      <Link to={'/'}>
        <Button variant='contained'>Home</Button>
      </Link>
    </div>
  );
};

export default GoHomeButton;
