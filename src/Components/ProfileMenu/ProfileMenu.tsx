import * as React from 'react';
import Menu from '@mui/material/Menu';
import { IconButton, Avatar, Divider } from '@mui/material';
import { ProfileMenuCard } from './ProfileMenuCard/ProfileMenuCard';
import { ProfileMenuItem } from './ProfileMenuItem/ProfileMenuItem';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import NotStartedOutlinedIcon from '@mui/icons-material/NotStartedOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LocalParkingOutlinedIcon from '@mui/icons-material/LocalParkingOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardOutlinedIcon from '@mui/icons-material/KeyboardOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SmsFailedOutlinedIcon from '@mui/icons-material/SmsFailedOutlined';

import './ProfileMenu.css';

interface ProfileMenuProps {
    user: any
}

export const ProfileMenu = (props: ProfileMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        <div>

            <IconButton style={{ marginRight: '20px' }} onClick={handleClick}>
                <Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' />
            </IconButton>

            <Menu
                className='Menu'
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <ProfileMenuCard user={props.user} />
                <Divider className='divider' />
                <br />

                <ProfileMenuItem MenuItemText='Your Channel' MenuitemImage={<PortraitOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Youtube Studio' MenuitemImage={<NotStartedOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Switch Account' MenuitemImage={<ContactsOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Sign Out' MenuitemImage={<LoginOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <Divider className='divider' />

                <ProfileMenuItem MenuItemText='Your Premuim Benefits' MenuitemImage={<LocalParkingOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Parchase and membership' MenuitemImage={<MonetizationOnOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Your Data on Youtube' MenuitemImage={<LocalPoliceOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <Divider className='divider' />

                <ProfileMenuItem MenuItemText='Apperance Devise Theme' MenuitemImage={<ModeNightOutlinedIcon />} ShowArrow={true} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Language English' MenuitemImage={<TranslateOutlinedIcon />} ShowArrow={true} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Restricted Mode Off' MenuitemImage={<AdminPanelSettingsOutlinedIcon />} ShowArrow={true} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Location Israel' MenuitemImage={<LanguageOutlinedIcon />} ShowArrow={true} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Keyboard Shortcuts' MenuitemImage={<KeyboardOutlinedIcon />} ShowArrow={true} handleClose={handleClose} />

                <Divider className='divider' />

                <ProfileMenuItem MenuItemText='Settings' MenuitemImage={<SettingsOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />

                <Divider className='divider' />

                <ProfileMenuItem MenuItemText='Help' MenuitemImage={<HelpOutlineOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />
                <ProfileMenuItem MenuItemText='Send feedback' MenuitemImage={<SmsFailedOutlinedIcon />} ShowArrow={false} handleClose={handleClose} />

            </Menu>
        </div>
    );
}