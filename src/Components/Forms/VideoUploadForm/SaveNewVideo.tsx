import { useNavigate } from "react-router-dom";
import { uploadVideoToFirebase } from "../../../Services/videos/videosDB";
import { useAppSelector } from "../../../app/hooks"
import { selectVideo } from "../../../features/uploadVideo/uploadVideoSlice"
import { Button, Box } from "@mui/material";

export const SaveNewVideo = () => {
  const navigate = useNavigate();

  const video = useAppSelector(selectVideo);
  const handleGoHome = () => {
    uploadVideoToFirebase(video);
    setTimeout(() => {
      navigate('/home')
    }, 1500)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ p: 3, borderRadius: 2, boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.3)', backgroundColor: '#fff', maxWidth: 600, width: '100%', textAlign: 'center' }}>
        <h2>Saving...</h2>
        <Button onClick={handleGoHome} variant="contained" color="primary">
          Save and Go Home
        </Button>
      </Box>
    </Box>
  )
}
