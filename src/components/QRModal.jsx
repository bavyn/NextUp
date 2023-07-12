import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import PropTypes from 'prop-types';
import QRCodeDisplay from './QRCodeDisplay';

const QRCodeModal = ({ open, onClose, value }) => {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className='qrcode-modal'>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', fontFamily: 'Abril Fatface, serif' }}>
                    Share with friends to get started!                </DialogTitle>
                <DialogContent>
                    <QRCodeDisplay value={value} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

QRCodeModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default QRCodeModal;
