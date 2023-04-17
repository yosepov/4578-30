import { storageRef } from "../../Services/firebase";
import "firebase/storage";
import { Box } from "@mui/material";


export const ShowVideoFromFirebase = () => {

    const videoBox = document.getElementById('videoBoxID');
 

// Get the download URL for your video file
storageRef.child('videos/').getDownloadURL()
  .then((url:string) => {
    // Use the URL to display the video in a HTML5 video element
    const video = document.createElement('video');
    video.src = url;
    video.controls = true;

    if(videoBox)
    videoBox.append(video);
  })
  .catch((error:Error) => {
    console.error(error);
  });



  return <>
    <Box id='videoBoxID'>


    </Box>
  </>

}