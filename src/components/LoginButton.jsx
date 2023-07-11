import React from 'react';
import '../styles/LoginButton.css';
import Button from '@mui/material/Button';

const LoginButton = () => {
  return (
    <div>
      <a href='http://localhost:3000/login'>
        <Button variant='contained'>Login</Button>
      </a>
    </div>
  );
};

export default LoginButton;
