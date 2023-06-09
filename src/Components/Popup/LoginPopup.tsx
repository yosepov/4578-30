import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { Login } from '../Forms/Login/Login';


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface LoginPopupProps {
    isEngMode: boolean;
}
export const LoginPopup = ({isEngMode}: LoginPopupProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <IconButton  onClick={handleOpen} style={{ marginRight: '20px' }}>
               <Typography variant='body2' color="primary">
               {isEngMode ? 'Signin' : 'התחבר'} &nbsp;
                </Typography>
                <AccountCircleOutlinedIcon color='primary' />
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Login closeParentModel={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}