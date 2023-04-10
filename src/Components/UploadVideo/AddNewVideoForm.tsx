import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import UploadIcon from '@mui/icons-material/Upload';
import { Button } from '@mui/material';
import {useState} from 'react'
import { storage } from '../../Services/firebase';
import { ref,uploadBytes,uploadBytesResumable,getDownloadURL } from "firebase/storage";
import { toast } from 'react-toastify'


import './AddNewVideoForm.css'
import "react-toastify/dist/ReactToastify.css";
import 'firebase/storage';

export const AddNewVideoForm = () => {

     const [videoUpload, setVideoUpload] = useState<File | null>(null);
     const [loadingConversion, setLoadingConversion] = useState<boolean>(false);
     const [uploadedFile , setUploadedFile] = useState(false)
     const [fileName, setFileName] = useState(``);
     const [imageUrl, setImageUrl] = useState(``);
     const [imageAsFile, setImageAsFile] = useState<any>( );

     const uploadVideo = () =>{
        if (videoUpload===null) return;
        const videoRef = ref (storage, `videos/`)
        uploadBytes(videoRef,videoUpload).then(() => {
            alert(`video uploaded`);
            console.log(`video uploaded`);
        })
     }

     const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            setFileName(file.name);
            setImageAsFile(file);
        }
     }

     const handleFirebaseUpload = (e:React.MouseEvent<HTMLLabelElement, MouseEvent>) => {

        e.preventDefault();
        setLoadingConversion(true);
        toast.info(`Uploading...`);
        if (!imageAsFile) {
            toast.error(`File Error`);
        }
        const storageRef = ref (storage, `videos/`);
        const metadata = {contentType:`video/mp4`};
        let progress = `0`;
        const toastProgress = toast.info(`Your video is ${progress}% uploaded`);
        const uploadTask = uploadBytesResumable(storageRef,imageAsFile,metadata);
        uploadTask.on("state_changed",(snapshot) => {
            progress=((snapshot.bytesTransferred/snapshot.totalBytes)*100).toString();
            progress = progress.toString().substring(0,3);
            toast.update(toastProgress,{
                render:`video is ${progress}% done`,
                type:'info'
            })
            switch (snapshot.state) {
                case `paused`:
                    toast.update(toastProgress,{
                        render:`video uploading is paused`,
                        type:'warning'
                    })
                    
                    break;
            
                default:
                    toast.update(toastProgress,{
                        render:`video is ${progress}% done`,
                        type:'info'
                    })
                    break;
            }
        }, ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl)=>{
                setUploadedFile(true);
                toast.update(toastProgress,{
                    render:`video uploading is done`,
                    type:'success'
                })

                setImageUrl(downloadUrl);
                
            })
        }
        )
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
                <input accept="video/*" type="file" onChange={handleChange} />
                <Button id='uploadFile' onClick={(e)=>handleFirebaseUpload(e)} component="label" sx={{ marginTop: '3%', background: '#085ed4', borderRadius: '2px' }} variant="contained" >
                    Upload Video
                </Button>
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















