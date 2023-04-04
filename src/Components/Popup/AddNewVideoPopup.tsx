import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { AddNewVideoForm } from '../Forms/UploadVideo/AddNewVideoForm';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '67%',
    height: '86%',
    bgcolor: 'background.paper',
    border: '1px solid rgb(168, 166, 166)',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    padding: 'none',
    display: 'flex'
};

export const AddNewVideoPopup = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton onClick={handleOpen} style={{ marginRight: '20px' }}>
                <VideoCallOutlinedIcon />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <AddNewVideoForm />
                </Box>
            </Modal>
        </div>
    );
}