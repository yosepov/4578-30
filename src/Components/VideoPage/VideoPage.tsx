import React from 'react'
import { Avatar, Button, ButtonGroup, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'


import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareIcon from '@mui/icons-material/Share';

import { Comments } from './Comments';
import './videoPage.css'
import { ModalSubscribe } from './ModalSubscribe';
import { MoreOption } from './MoreOption';
import { AllVideo } from './AllVideo';

export const VideoPage = () => {
  return <>
  
  <Box sx={{
    flexDirection: 'row',
    display: 'flex',
    padding: '5%',
    marginLeft: '24px'
}}>

  <Box>
  <iframe allowFullScreen width="640" height="360" src="https://www.youtube.com/embed/FgnxcUQ5vho" title="Introduction To Testing In JavaScript With Jest"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
  <Typography sx={{
    fontSize: '18px',
    fontWeight: '600'
  }}>
  Introduction To Testing In JavaScript With Jest
  </Typography>

  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '20px',
    
  }}>


    <IconButton><Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' /></IconButton>
    <Box sx={{
        width: '100px',
        flexDirection: 'colmun',
    }}>
    <Typography sx={{
      fontSize: '14px',
      fontWeight: '600',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}>Web Dev Simplified</Typography>
    <Typography sx={{
      fontSize: '14px',
      fontWeight: '600'
    }}>1.27M</Typography>

    </Box>
      
      <ModalSubscribe/>

      <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',
        }}>

          <ButtonGroup sx={{
            backgroundColor: 'rgba(0,0,0,0.05)',
            marginLeft: '40px',
            borderRadius: '50px',
            color: 'black'
          }} variant="text" aria-label="text button group" >
            <Button sx={{borderRadius: '50px', color: 'black'}}>
            <ThumbUpOutlinedIcon fontSize='small'/>
            <Typography sx={{paddingLeft: '5px'}}>10K</Typography>
            </Button>

            <Button sx={{borderRadius: '50px', color: 'black'}}>
            <ThumbDownOutlinedIcon fontSize='small'/>
            </Button>
            </ButtonGroup>
      </Box>

      <Box sx={{
          display: 'flex',
          alignItems: 'flex-start',

        }}>
          <Button sx={{
          borderRadius: '50px',
          color: 'black',
          backgroundColor: 'rgba(0,0,0,0.05)',
          width: '60px',
          height: '35px',
          padding: '0px 50px',
          marginLeft: '15px'
             }}>
          <ShareIcon fontSize='small'/>
          <Typography  sx={{
            textTransform: 'capitalize',
            padding: '10px',
            fontSize: '14px',
            fontWeight: '600'
          }}>Share</Typography>
          </Button>

      </Box>

      <Box sx={{
        marginLeft: '15px'
      }}>
      </Box>
      <MoreOption/>

    </Box>

    <Box sx={{
      backgroundColor: 'rgba(0,0,0,0.05)',
      borderRadius: '12px',
      marginTop: '20px',
      width: '100%',
      height: '100px',
      cursor: 'pointer'
    }}>

  </Box>

      <Box sx={{
        marginTop: '50px'
      }}>
        <Comments />
      </Box>
  </Box>

  <Box><AllVideo/></Box>

</Box>
</>
}
