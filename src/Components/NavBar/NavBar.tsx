
import './navbar.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { IconButton } from '@mui/material';
import { Search } from '../Search/Search';

export const NavBar = () => {
    return <div className='myDiv'>
        <IconButton>
        <MenuOutlinedIcon />
        </IconButton>
        <img width='100' src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' />
        <div className='search'>
        <Search />
        </div>
    </div>
}