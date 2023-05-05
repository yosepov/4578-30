import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import ClosedCaptionOutlinedIcon from '@mui/icons-material/ClosedCaptionOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import ClosedCaptionDisabledOutlinedIcon from '@mui/icons-material/ClosedCaptionDisabledOutlined';
import { ModalVideo } from './ModalVideo';

import './videoCard.css'

export const VideoCard = (): JSX.Element => {

    const [volume, setVolume] = React.useState(true)
    const [subtitle, setSubtitle] = React.useState(true)
    


    const handleVolume = (): void => {
        setVolume(prev => !prev)
    }

    const handleSubtitle = (): void => {
        setSubtitle(prev => !prev)
    }

    return <>

        <section className='sectionVideo'>

            <div className='videoCardDiv'>
                <div className='image'>
                    <img className='imageTeaser' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt='Learen JavaScript' />
                </div>
                <div className='timeVideoDiv'><span className='timeVideo'>20:45</span></div>

                <div className='hide'><span className='volumeAndSubtitle'>
                    <IconButton onClick={handleVolume}>
                        {volume ? <VolumeUpOutlinedIcon sx={{ color: 'white' }} /> :
                            <VolumeOffOutlinedIcon sx={{ color: 'white' }} />}
                    </IconButton>
                    |
                    <IconButton onClick={handleSubtitle}>
                        {subtitle ? <ClosedCaptionOutlinedIcon sx={{ color: 'white' }} /> :
                            <ClosedCaptionDisabledOutlinedIcon sx={{ color: 'white' }} />}
                    </IconButton>
                </span></div>

                <div className='headerAndAvatatr'>
                    <div className='avatar'>
                        <IconButton>
                            <Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' />
                        </IconButton>
                    </div>
                    <div className='header'>
                        <p className='headerText'>test your skills in Javascript in our toturial</p>
                    </div>
                    <div className='moreOption'>

                        <ModalVideo />

                    </div>
                </div>
                <div className='channelNameDiv'>
                    <p className='channelName'>Javascript</p>
                </div>
                <div className='whatching'>
                    <p className='channelName'><span>2 days ago</span> <span className='dot'>•</span>views 3,847 </p>
                </div>
            </div>

        </section>
    </>
}
