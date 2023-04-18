import "firebase/storage";
import { getStorage, ref, getDownloadURL } from "firebase/storage";



export const ShowVideoFromFirebase = () => {


// Get the download URL for your video file
const storage = getStorage();
getDownloadURL(ref(storage, 'videos/'))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    console.log(url)

    // Or inserted into an <img> element
    const vid = document.getElementById('iframeID');
    if (vid)
    vid.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });




  return <>
        <video id="iframeID"></video>
        </>

}