import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { Box, Button, Dialog, IconButton, Modal } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

import { storage, database } from '../../../Services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import {doc, updateDoc } from 'firebase/firestore'

import '../UploadVideo/AddNewVideoForm.css'
import { toast } from 'react-toastify';
import { getAuth } from 'firebase/auth';
import { addNewVideo } from '../../../Services/videos/AddNewVideo';

export const AddNewVideoForm = () => {

    const [videoUpload, setVideoUpload] = useState<File | null>(null)
    const [videoUrl, setVideoUrl] = useState('')
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const uploadVideo = () => 
    {
        if(videoUpload === null) return;
       
        addNewVideo(videoUpload.name, videoUpload.type, videoUpload.size)
        const videoRef = ref(storage, `videos/${videoUpload.name}`)
        const metadata = {contentType: 'video/mp4'}
        const uploadTask = uploadBytesResumable(videoRef, videoUpload, metadata)
        let progress = '0'
        const toastProgress = toast.info(`Your video is ${progress}% uploaded`); 
        uploadTask.on("state_changed" , (snapshot) => {
        progress = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toString().substring(0,3);

        switch (snapshot.state) {
          case 'running' :
            toast.update(toastProgress, {
                render: `video is ${progress}% uploaded`,
                type: 'info'
            }) 
            break; 

        }}, error => toast.update(toastProgress, {
            render: `Failed uploading: ${error}`,
            type: 'error'

        }) , () => {
            toast.update(toastProgress, {
                render: `video is ${progress}% done`,
                type: 'success'
            })
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
                setVideoUrl(url);                
            })
        }) 

}


// update user///////////////////////////////////////////
const user = getAuth().currentUser?.uid

const db = database
const docRef = doc(db, `users`, `${user}`)
const data = {videoURL: videoUrl}
 updateDoc(docRef, {
    'videos' : data
 })

//////////////////////////////////////////////////////////
    
useEffect(() => {
    // if(videoUpload !== null) {
        uploadVideo()
    // }
}, [videoUpload])

const inputRef = useRef<HTMLInputElement>(null)

const handleClick = () => {
    inputRef?.current?.click();
};

const handleFileChange = (event: any) => {
    setVideoUpload(event.target.files[0])
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) return;
    event.target.value = null;
}

return <>
<IconButton onClick={handleOpen} style={{ marginRight: '20px' }}>
        <VideoCallOutlinedIcon />
</IconButton>

<Dialog open={open} onClose={handleClose}>
    <Box>
        <div className='titleDiv' >
            <p>Upload videos</p>
            <div>
                <p><AnnouncementOutlinedIcon sx={{ cursor: 'pointer' }} /></p>
                <p><CloseOutlinedIcon onClick={handleClose} sx={{ cursor: 'pointer' }} /></p>
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
            <input accept='video/mp4' ref={inputRef} onChange={handleFileChange} type={'file'} style={{display: 'none'}}/>
        </div>
        <div className='endTextDiv'>
            <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <span>Terms of Service</span> and<span> Community Guidelines</span>.
                <br />
                <br />
                Please be sure not to violate others' copyright or privacy rights. <span> Learn more</span>
            </p>
        </div>
    </Box> 
</Dialog>
</>
}