import { IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToastContainer } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';

import { SetTimeEndSearch } from './HistortSearch'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import './navbar.css';
import SliderSideBar from '../SideNav/SliderSideBar';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';

export const NavBar = () => {

    const [user, setUser] = useState(null);

    const GetLoggedInUserFromLoginComponent = (user: any) => {
        if (user != null)
            setUser(user);
    }

    const googleUser = useAppSelector(selectUser);



    return <div className='myDiv'>
        <ToastContainer />
        <IconButton>
            <SliderSideBar />
        </IconButton>
        <img width='100' alt="youtube logo" src='./Assets/Logos/YouTube-Logo.png' />
        {googleUser && googleUser.email}

        <SetTimeEndSearch />
        <AddNewVideoPopup />
        <IconButton >
            <NotificationsNoneOutlinedIcon />
        </IconButton>
        <LoginPopup toParent={GetLoggedInUserFromLoginComponent} />
        <ProfileMenu user={user} />
    </div>
}




