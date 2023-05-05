import { Card, Divider, IconButton } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToastContainer } from 'react-toastify';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
import 'react-toastify/dist/ReactToastify.css';

import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import './navbar.css';
import SliderSideBar from '../SideNav/SliderSideBar';
import { useAppSelector } from '../../app/hooks';
import { selectUser } from '../../features/user/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { LightModeButton } from '../ThemeApp/ThemeApp';

export const NavBar = () => {
    const user = useAppSelector(selectUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home')
        }
    })

    const handleNavigateHome = () => {
        navigate('/home')
    }


    return <>
        <Card className='myDiv'>
            <ToastContainer />
            <IconButton>
                <SliderSideBar />
            </IconButton>
            <img onClick={handleNavigateHome} className='logoIcon' width='100' alt="youtube logo" src='./Assets/Logos/YouTube-Logo.png' />
            {/* {googleUser && googleUser.email} */}
            <div className='search' >
                <button className='micIconButton' ><MicIcon /></button>
                <div className='divInput'>
                    <input className='input' placeholder='search'></input>
                    <button className='searchButton'><SearchIcon /></button>
                </div>
                <button className='kayBoardButton keyboardButton'><KeyboardIcon className='keyboardIcon' /></button>
            </div>

            {user && <AddNewVideoPopup />}
            <IconButton >
                <NotificationsNoneOutlinedIcon />
            </IconButton>
            {!user && <LoginPopup />}
            <ProfileMenu />
            <LightModeButton />
        </Card>
        <Divider />
    </>
}



// const GetLoggedInUser = () => {
//     let user = localStorage.getItem('user')
//     if (!user)
//         return null
//     return JSON.parse(user)
// }
