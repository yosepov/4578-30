// Import the useDropzone hooks from react-dropzone
import { useDropzone } from "react-dropzone";
import UploadIcon from '@mui/icons-material/Upload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });

  /* 
    useDropzone hooks exposes two functions called getRootProps and getInputProps
    and also exposes isDragActive boolean
  */

  return (
    <div className="dropzone-div" {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (

            <CloudUploadIcon sx={{scale:`3.2`,color: `#686666`}}/>
            ) : (
            <UploadIcon sx={{scale:`3.2`,color: `#686666`, width: `auto`}}/>


        )}
      </div>
    </div>
  );
};

export default Dropzone;