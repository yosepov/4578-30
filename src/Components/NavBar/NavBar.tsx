import { IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToastContainer } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import './navbar.css';
import SliderSideBar from '../SideNav/SliderSideBar';

export const NavBar = () => {

    const [user, setUser] = useState(null);

    const GetLoggedInUserFromLoginComponent = (user: any) => {
        if (user != null)
            setUser(user);
    }


    return <div className='myDiv'>
        <ToastContainer />
        <IconButton>
            <SliderSideBar />
        </IconButton>
        <img width='100' alt="youtube logo" src='./Assets/Logos/YouTube-Logo.png' />
        <div className='search' >
            <button className='micIconButton' ><MicIcon /></button>
            <div className='divInput'>
                <input className='input' placeholder='search'></input>
                <button className='searchButton'><SearchIcon /></button>
            </div>
            <button className='kayBoardButton keyboardButton'><KeyboardIcon className='keyboardIcon' /></button>
        </div>

        <AddNewVideoPopup />
        <IconButton >
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        <LoginPopup toParent={GetLoggedInUserFromLoginComponent} />
        <ProfileMenu user={user} />
    </div>
}



// const GetLoggedInUser = () => {
//     let user = localStorage.getItem('user')
//     if (!user)
//         return null
//     return JSON.parse(user)
// }
