import React from 'react';
import '../styles/LoginButton.css';
import Button from '@mui/material/Button';

const LoginButton = () => {
  return (
    <div className='login-button-container'>
      <a href='https://api.nextup.rocks/login'>
        <Button variant='contained' sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}>Create a Party!</Button>
      </a>
    </div>
  );
};

export default LoginButton;
