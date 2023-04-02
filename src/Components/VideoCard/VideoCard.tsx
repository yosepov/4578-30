import React from 'react'
import { Avatar, IconButton } from '@mui/material'
import './videoCard.css'
import { ModalVideo } from './ModalVideo';

export const VideoCard = () => {
  return <>

  <section className='sectionVideo'>

  <div className='videoCardDiv'>
    <div className='image'>
        <img className='imageTeaser' src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"  />
    </div>
        <div className='timeVideoDiv'><span className='timeVideo'>20:45</span></div>
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
            
            <ModalVideo/>
            
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
