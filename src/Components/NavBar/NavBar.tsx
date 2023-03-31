import './navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import { Search } from '../Search/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { AddNewVideoPopup } from '../Popup/AddNewVideoPopup';
import { UserManager } from '../User Manager/UserManager';
import ToggleColorMode from '../DarkModeToggle/DarkModeToggle';

export const NavBar = () => {
    return <div id='navBarID' className='myDiv'>
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
        <ToggleColorMode/>
        <UserManager/>
        
    </div>
}