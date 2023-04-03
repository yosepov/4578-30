
import './navbar.css';

import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import { Search } from '../Search/Search';
import Avatar from '@mui/material/Avatar'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { LoginPopup } from '../Popup/LoginPopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MicIcon from '@mui/icons-material/Mic';
export const NavBar = () => {


    return <>
        <div className='myDiv'>

            <ToastContainer />
            <IconButton>

                <MenuOutlinedIcon />
            </IconButton>
            <img width='100' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
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
    </>
}