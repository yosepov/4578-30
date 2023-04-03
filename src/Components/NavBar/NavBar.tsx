
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
import { ProfileMenu } from '../ProfileMenu/ProfileMenu';
import { useEffect, useState } from 'react';

export const NavBar = () => {

    const [user, setUser] = useState(null);

    const GetLoggedInUserFromLoginComponent = (user: any) => {
        if (user != null)
            setUser(user);
    }

    return <div className='myDiv'>
        <ToastContainer />
        <IconButton>
            <MenuOutlinedIcon />
        </IconButton>
        <img width='100' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
        <div className='search'>
            <Search />
        </div>
        <AddNewVideoPopup />
        <IconButton style={{ marginRight: '20px' }}>
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