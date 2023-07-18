import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const HistoryButton = ({ onClick }) => {
  return (
    <div className='history-button'>
      <Button
        onClick={onClick}
        variant='contained'
        sx={{
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      >
        History
      </Button>
    </div>
  );
};

HistoryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HistoryButton;
