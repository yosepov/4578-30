import { useNavigate } from "react-router-dom";
import { uploadVideoToFirebase } from "../../../Services/videos/videosDB";
import { useAppSelector } from "../../../app/hooks"
import { selectVideo } from "../../../features/uploadVideo/uploadVideoSlice"
import { Button } from "@mui/joy";



export const SaveNewVideo = () => {
    const navigate = useNavigate();

    const video = useAppSelector(selectVideo);
    const handleGoHome = () => {
        uploadVideoToFirebase(video);
        setTimeout(() => {
            navigate('/home')
        }, 1500)
    }

    return <>saving...
    <Button onClick={handleGoHome}>Save and Go home!!!!</Button></>
}