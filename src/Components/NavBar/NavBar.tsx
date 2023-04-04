

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import SideNav from '../SideNav/SideNav';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
import 'react-toastify/dist/ReactToastify.css';

import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import './navbar.css';

export const NavBar = () => {


    return <>
        <div className='myDiv'>
            <ToastContainer />
            <IconButton>
                <MenuOutlinedIcon />
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

            <LoginPopup />
            <IconButton style={{ marginRight: '20px' }}>
                <Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' />
            </IconButton>
        </div>
        <Outlet />
        <SideNav />
    </>
}