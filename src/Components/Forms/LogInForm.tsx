import './SignUp.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from '@mui/material';
import {useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { UserLoginForm } from '../LogIn/LogIn';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid grey',
    boxShadow: 24,
    p: 4,
};

export const SignUp = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return <>
        <div className="SignUpContainer">
            <IconButton onClick={handleOpen} style={{marginRight:`2%`}}>
                <p>Sign In</p>&nbsp;<AccountCircleOutlinedIcon/>
            </IconButton>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <UserLoginForm/>
                </Box>
            </Modal>
        </div>
    </>
}