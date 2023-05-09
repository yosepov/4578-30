import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { useEffect, useState } from 'react'
import { ModalVideo } from '../VideoCard/ModalVideo'
import { collection, getDocs } from '@firebase/firestore'
import { database } from '../../Services/firebase'
import { useNavigate } from 'react-router'

export const AllVideo = () => {

  const navigate = useNavigate()

  const [allVideos, setAllVideos] = useState<any>([])

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
  <Box>
  {allVideos.map((res: any, index: number) => {
    return <Box
      key={index.toString()}
        onClick={() => handleNavigation(res.id)}
        sx={{
        display: 'flex',
        marginLeft: '30px',
        wwidth: '402px',
        height: '94px',
        paddingBottom: '10px',
        cursor: 'pointer'
      }}>
        <Box 
        sx={{
          width: '168px',
          height: '94px'
        }}>
        <video width='168px' height='94px'
        muted
        src={res.url} 
        style={{borderRadius: '20px',cursor: 'pointer'}}
        onMouseOver={handleMouse}
        onMouseOut={handlePause}
        ></video>
        </Box>

        <Box sx={{display: 'block'}}>
        <Typography sx={{
            padding: '5px',
            margin: '0 0 4px 0',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            width: '202px',
            height: '40px',
            fontSize: '15px',
            fontWeight: '600',
        }}>test your skill in python now in this video</Typography>
    
        <Typography sx={{
            paddingLeft: '5px',
            width: '202px',
            height: '10px',
            fontSize: '12px',
            fontWeight: '400',
    
        }}>
            JavaSCript
        </Typography>
        <Typography sx={{
            paddingLeft: '5px',
            paddingTop: '5px',
            width: '202px',
            height: '10px',
            fontSize: '12px',
            fontWeight: '400',
    
        }}>
            3,847 views • 2 days ago
        </Typography>
        </Box>
        <ModalVideo/>
      </Box>

  })}
  </Box>
  </>
}
