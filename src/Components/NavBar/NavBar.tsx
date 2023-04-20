import { IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToastContainer } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
import 'react-toastify/dist/ReactToastify.css';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';


import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
// import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import './navbar.css';
import SliderSideBar from '../SideNav/SliderSideBar';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import { VideoPage } from '../VideoPage/VideoPage';
import { AddNewVideoForm } from '../Forms/UploadVideo/AddNewVideoForm';
import { useState } from 'react';

export const NavBar = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    return <><div className='myDiv'>
        <ToastContainer />
        <IconButton>
            <SliderSideBar />
        </IconButton>
        <img width='100' alt="youtube logo" src='./Assets/Logos/YouTube-Logo.png' />
        {/* {googleUser && googleUser.email} */}
        <div className='search' >
            <button className='micIconButton' ><MicIcon /></button>
            <div className='divInput'>
                <input className='input' placeholder='search'></input>
                <button className='searchButton'><SearchIcon /></button>
            </div>
            <button className='kayBoardButton keyboardButton'><KeyboardIcon className='keyboardIcon' /></button>
        </div>

    
        <AddNewVideoForm /> 
        <IconButton >
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        {/* <LoginPopup toParent={GetLoggedInUserFromLoginComponent} />
        <ProfileMenu user={user} /> */}


        <LoginPopup />
        <ProfileMenu />
    </div>
<VideoPage/>

    </>
}



// const GetLoggedInUser = () => {
//     let user = localStorage.getItem('user')
//     if (!user)
//         return null
//     return JSON.parse(user)
// }
