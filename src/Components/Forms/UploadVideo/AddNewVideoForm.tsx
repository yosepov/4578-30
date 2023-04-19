import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { Box, Button } from '@mui/material';
import { useRef, useState } from 'react';

import '../UploadVideo/AddNewVideoForm.css'

export const AddNewVideoForm = () => {

    const inputRef = useRef<HTMLInputElement>(null)
    const [closePopup, setClosePopup] = useState(false)

    const handlePopup = () => {
        setClosePopup(!closePopup)
    }

    const handleClick = () => {
        inputRef?.current?.click();
      };
    const handleFileChange = (event: any) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
          return;
    }
    event.target.value = null;
}

    return <>
         <Box>
            <div className='titleDiv' >
                <p>Upload videos</p>
                <div>
                    <p><AnnouncementOutlinedIcon sx={{ cursor: 'pointer' }} /></p>
                    <p><CloseOutlinedIcon onClick={handlePopup} sx={{ cursor: 'pointer' }} /></p>
                </div>

            </div>
            <br />
            <div className='uploadDiv'>
                <UploadIcon />
            </div>
            <div className='textDiv'>
                <p id='firstP'>Drag and drop video files to upload</p>
                <p id='secondP'>Your videos will be private until you publish them.</p>
                <Button onClick={handleClick} sx={{ marginTop: '3%', background: '#085ed4', borderRadius: '2px' }} variant="contained" >SELECT FILES</Button>
                <input ref={inputRef} onChange={handleFileChange} type={'file'} style={{display: 'none'}}/>
            </div>
            <div className='endTextDiv'>
                <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <span>Terms of Service</span> and<span> Community Guidelines</span>.
                    <br />
                    <br />
                    Please be sure not to violate others' copyright or privacy rights. <span> Learn more</span>
                </p>
            </div>
        </Box> 

    </>
}















