import React, { useEffect, useRef, useState } from 'react'
import { Avatar, IconButton } from '@mui/material'
import ClosedCaptionOutlinedIcon from '@mui/icons-material/ClosedCaptionOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import ClosedCaptionDisabledOutlinedIcon from '@mui/icons-material/ClosedCaptionDisabledOutlined';

import { ModalVideo } from './ModalVideo';
import './videoCard.css'
import { useNavigate } from 'react-router-dom';
import { getDocs, collection } from 'firebase/firestore';
import { database } from '../../Services/firebase';

export const VideoCard = () => {

    const navigate = useNavigate()

    const [allVideos, setAllVideos] = useState<any>([])

    const [url, setUrl] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')


    const [volume, setVolume] = useState(false)
    const [subtitle, setSubtitle] = useState(true)

    const handleVolume = () => setVolume(!volume)
    const handleSubtitle = () => setSubtitle(!subtitle)

const getVideoFromFirestore = async () => {

    const querySnapshot = await getDocs(collection(database, "videos"));
    querySnapshot.forEach((doc) => {
        
        setAllVideos((video: any) => [...video, doc.data()])  
        setUrl(doc.data().url);
        setTitle(doc.data().title);
        setDate(doc.data().uploadDate);
        
    });
}
useEffect(() => {
    getVideoFromFirestore()
}, [])

console.log(allVideos);
const handleMouse = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  }

const handlePause = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  }


return <>

    <section className='sectionVideo'>
        <div className='videoCardDiv'>
            <div className='image' onClick={() => navigate('/videoPage')}>
                <video 
                onMouseOver={handleMouse}
                onMouseOut={handlePause}
                src={url} 
                controls={false} 
                muted={volume}
                className='imageTeaser' 
                onClick={handlePause}></video>
            </div>

            <div className='hide'><span className='volumeAndSubtitle'>
                <IconButton onClick={handleVolume} >
                    {volume ? <VolumeOffOutlinedIcon sx={{ color: 'white' }} /> :
                    <VolumeUpOutlinedIcon sx={{ color: 'white' }} />}
                </IconButton>
                |
                <IconButton onClick={handleSubtitle}>
                    {subtitle ? <ClosedCaptionOutlinedIcon sx={{ color: 'white' }} /> :
                        <ClosedCaptionDisabledOutlinedIcon sx={{ color: 'white' }} />}
                </IconButton>
            </span></div>

            <div className='allHeader'>
                <div className='titleAndAvatar'>
                    <IconButton>
                        <Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' />
                    </IconButton>
                    <p className='headerText'>{title}</p>
                </div>
                <div className='moreOption'>
                    <ModalVideo />
                </div>
            </div>
            <div className='channelNameDiv'>
                <p className='channelName'>Javascript</p>
            </div>
            <div className='whatching'>
                <p className='channelName'><span>{date}</span> <span className='dot'>•</span>views 3,847 </p>
            </div>
        </div>
    </section>
</>
}
