import { useSelector } from 'react-redux';
import { selectVideoUrl } from '../../features/uploadVideo/uploadVideoSlice';
import { Box } from '@mui/material';
import { Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const ShowVideoFromFirebase = () => {

  const videoUrl = useSelector(selectVideoUrl);
  console.log(videoUrl)

  return <>
        <Box sx={{maxWidth:'300px'}}>
          <Card>
          <CardMedia
            sx={{maxWidth:'300px',maxHeight:'200px'}}
            component='video'
            image={videoUrl}
            controls
        />
        <CardContent>
            <Box sx={{display:'flex'}}>
            <Typography sx={{fontSize:'12px',fontWeight:'bolder'}}>Video link</Typography>
            </Box>
            <Typography variant="caption">{videoUrl}</Typography>        
        </CardContent>
          </Card>
        </Box>
        </>
}



 