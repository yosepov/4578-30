import React, {  useEffect, useState } from 'react'
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

    const [volume, setVolume] = useState(false)
    const [subtitle, setSubtitle] = useState(true)

    const handleVolume = () => setVolume(!volume)
    const handleSubtitle = () => setSubtitle(!subtitle)


useEffect(() => {

    const getVideoFromFirestore =async () => {
    const querySnapshot = await getDocs(collection(database, "videos"));
    const newData = querySnapshot.docs.map((doc) => doc.data())            
    setAllVideos(newData)  
    }
    getVideoFromFirestore()
}, [])

const handleMouse = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.play();
  }

const handlePause = (e: React.MouseEvent<HTMLVideoElement>) => {
    e.currentTarget.pause();
  }

const handleNavigation = (videoId: string) => {
    navigate(`/videoPage/${videoId}`);
    
}

return <>
    <section className='sectionVideo'>
        {allVideos.map((res: any) => {
            return <>
        <div className='videoCardDiv' key={res.id}>
            <div className='image'  onClick={() => handleNavigation(res.id)}>
                <video 
                onMouseOver={handleMouse}
                onMouseOut={handlePause}
                src={res.url} 
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
                    <p className='headerText'>{res.title}</p>
                </div>
                <div className='moreOption'>
                    <ModalVideo />
                </div>
            </div>
            <div className='channelNameDiv'>
                <p className='channelName'>Javascript</p>
            </div>
            <div className='whatching'>
                <p className='channelName'><span>{res.uploadDate}</span> <span className='dot'>•</span>views 3,847 </p>
            </div>
        </div>
            </>
        })}
    </section>
</>
}
