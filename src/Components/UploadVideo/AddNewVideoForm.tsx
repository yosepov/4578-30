import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Box, Button } from '@mui/material';
import { useState, useCallback } from 'react';
import { storage } from '../../Services/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify';
import IconButton from '@mui/material/IconButton';
import Dropzone from './Drag&Drop/Dropzone';
import VideoUploadForm from '../Forms/VideoUploadForm/VideoUploadForm';

import './AddNewVideoForm.css';
import "react-toastify/dist/ReactToastify.css";
import 'firebase/storage';

export const AddNewVideoForm = () => {

    const [loadingConversion, setLoadingConversion] = useState<boolean>(false);
    const [uploadedFile, setUploadedFile] = useState(false)
    const [fileName, setFileName] = useState(``);
    const [imageUrl, setImageUrl] = useState(``);
    const [imageAsFile, setImageAsFile] = useState<any>( );
    const [showUploadForm, setShowUploadForm] = useState<boolean>(false);

    const handleFirebaseUpload = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        e.preventDefault();
        setLoadingConversion(true);
        toast.info(`Uploading...`);
        if (!imageAsFile) {
            toast.error(`File Error`);
            return;
        }
        const storageRef = ref(storage, `videos/`);
        const metadata = {contentType:`video/mp4`};
        let progress = `0`;
        const toastProgress = toast.info(`Your video is ${progress}% uploaded`);
        const uploadTask = uploadBytesResumable(storageRef, imageAsFile, metadata);
        uploadTask.on("state_changed", (snapshot) => {
            progress=((snapshot.bytesTransferred/snapshot.totalBytes)*100).toString();
            progress = progress.toString().substring(0,3);
            toast.update(toastProgress, {
                render: `video is ${progress}% done`,
                type: 'info'
            })
            switch (snapshot.state) {
                case `paused`:
                    toast.update(toastProgress, {
                        render: `video uploading is paused`,
                        type: 'warning'
                    })
                    break;
                default:
                    toast.update(toastProgress, {
                        render: `video is ${progress}% done`,
                        type: 'info'
                    })
                    setShowUploadForm(true);
                    closeUploadLandingPage();

                    break;
            }
        });
    }

    function closeUploadLandingPage() {

        const uploadLandingPage = document.getElementById(`uploadLandingPage`);
        if (uploadLandingPage)
            uploadLandingPage.style.display = 'none';
    }

    const onDrop = useCallback((acceptedFile:File[]) => {
        if (acceptedFile.length > 0) {
            const file = acceptedFile[0];
            setFileName(file.name);
            setImageAsFile(file);
            toast.info(file.name);
        }
    }, []);

    const closeModal = () => {
        const modal = document.getElementById(`popup`);
        if (modal) modal.style.display = `none`;
    }

    return <>
            <section>
                <div className='titleDiv'>
                    <p>Upload videos</p>
                    <div>
                        <p><AnnouncementOutlinedIcon sx={{ cursor: 'pointer' }} /></p>
                        <p><CloseOutlinedIcon sx={{ cursor: 'pointer' }} onClick={closeModal}/></p>
                </div>
            </div>
            <br />

            <div id='test'>
            {showUploadForm && <VideoUploadForm />}
            </div>

            <div id="uploadLandingPage">
                    <div className='uploadDiv'>
                    <IconButton sx={{scale:`1.6`}}>
                    <Dropzone onDrop={onDrop} accept="video/*"/>
                    </IconButton>
                    </div>
                    <div className='textDiv'>
                        <p id='firstP'>Drag and drop video files to upload</p>
                        <p id='secondP'>Your videos will be private until you publish them.</p>
                        <Button
            id='uploadFile'
            onClick={(e) => {
              handleFirebaseUpload(e);
            }}
            component="label"
            sx={{ marginTop: '3%', background: '#085ed4', borderRadius: '2px' }}
            variant="contained"
          >
            Upload Video
          </Button>
                    </div>
            </div>

          
            {imageUrl && <a href={imageUrl} download>Click here to download </a>}
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















