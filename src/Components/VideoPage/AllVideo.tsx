import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { ModalVideo } from '../VideoCard/ModalVideo'

export const AllVideo = () => {
  return <>
  <Box sx={{
    // flexDirection: 'row',
    display: 'flex',
    marginLeft: '30px',
    wwidth: '402px',
    height: '94px',

  }}>

    <img width='168px' height='94px' style={{borderRadius: '20px',cursor: 'pointer'}} src="https://i.ytimg.com/vi/ajiAl5UNzBU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCnUqkSGr7Uy-QZAcBYlJ7p1-bpRA" alt="" />
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
        fontSize: '10px',
        fontWeight: '400',

    }}>
        JavaSCript
    </Typography>
    <Typography sx={{
        paddingLeft: '5px',
        paddingTop: '5px',
        width: '202px',
        height: '10px',
        fontSize: '10px',
        fontWeight: '400',

    }}>
        JavaSCript
    </Typography>
    </Box>
    <ModalVideo/>
  </Box>
  </>
}
