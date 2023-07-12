import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const GoHomeButton = (props) => {
  return (
    <div>
      <Link to={'/'}>
        <Button variant='contained'>{props.text}</Button>
      </Link>
    </div>
  );
};

export default GoHomeButton;
