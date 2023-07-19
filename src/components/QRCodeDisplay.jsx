import React from 'react';
import QRCode from 'qrcode.react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const QRCodeDisplay = ({ value, canvasId }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      fontFamily='Abril Fatface, serif'
    >
      <Card elevation={3}>
        <CardContent>
          <Typography variant='h6' align='center'>
            Your QR Code
          </Typography>
          <Box display='flex' justifyContent='center' alignItems='center' padding={2}>
            <QRCode value={value} id={canvasId} size={256} />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QRCodeDisplay;
