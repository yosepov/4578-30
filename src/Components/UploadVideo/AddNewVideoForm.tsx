import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import {useState} from 'react'
import { storage } from '../../Services/firebase';
import { ref,uploadBytes } from "firebase/storage";

import './AddNewVideoForm.css'
import 'firebase/storage';

export const AddNewVideoForm = () => {

     const [videoUpload, setVideoUpload] = useState<File | null>(null);

     const uploadVideo = () =>{
        if (videoUpload===null) return;
        const videoRef = ref (storage, `videos/`)
        uploadBytes(videoRef,videoUpload).then(() => {
            alert(`video uploaded`);
            console.log(`video uploaded`);
        })
     }

    return <>
        <section>
            <div className='titleDiv' >
                <p>Upload videos</p>
                <div>
                    <p><AnnouncementOutlinedIcon sx={{ cursor: 'pointer' }} /></p>
                    <p><CloseOutlinedIcon sx={{ cursor: 'pointer' }} /></p>
                </div>

            </div>
            <br />
            <div className='uploadDiv'>
                <UploadIcon />
            </div>
            <div className='textDiv'>
                <p id='firstP'>Drag and drop video files to upload</p>
                <p id='secondP'>Your videos will be private until you publish them.</p>
                <Button id='uploadFile' onSubmit={uploadVideo} component="label" sx={{ marginTop: '3%', background: '#085ed4', borderRadius: '2px' }} variant="contained" >
                    SELECT FILES
                    <input  hidden accept="video/*" multiple type="file" onChange={(event)=>{if (event.target.files != null) setVideoUpload(event.target.files[0])}} />
                </Button>
            </div>
            <div className='endTextDiv'>
                <p>By submitting your videos to YouTube, you acknowledge that you agree to YouTube's <span>Terms of Service</span> and<span> Community Guidelines</span>.
                    <br />
                    <br />
                    Please be sure not to violate others' copyright or privacy rights. <span> Learn more</span>
                </p>
            </div>
        </section>

    </>
}















