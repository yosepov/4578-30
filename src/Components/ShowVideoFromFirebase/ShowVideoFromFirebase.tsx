import "firebase/storage";

export const ShowVideoFromFirebase = () => {


// Get the download URL for your video file
// export const downloadURL = getDownloadURL(ref(storage, '/videos/'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       const blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     console.log(url)

//     // // Or inserted into an <img> element
//     // const vid = document.getElementById('iframeID');
//     // if (vid)
//     // vid.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log(error)
//   });




  return <>
        <video >
          <source id="iframeID" src="" width={`200px`} height={`200px`} />
        </video>
        </>

}



 