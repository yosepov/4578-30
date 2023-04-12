import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import { AddNewVideoForm } from '../UploadVideo/AddNewVideoForm';
import Fade from '@mui/material/Fade';

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
  display: 'flex',
};

export const AddNewVideoPopup = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    const modal = document.getElementById(`popup`);
    if (modal) modal.style.display = 'block';
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen} style={{ marginRight: '20px' }}>
        <VideoCallOutlinedIcon />
      </IconButton>
      <Modal
        id="popup"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
      >
        <Fade in={open}>
          <Box id="popup" sx={style}>
            <AddNewVideoForm />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
