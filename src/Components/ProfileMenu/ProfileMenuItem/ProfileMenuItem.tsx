import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { MenuItem } from '@mui/material';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './ProfileMenuItem.css'
import { useState } from 'react';

interface ProfileMenuItemProps {
    MenuItemText: string;
    MenuitemImage:any;
    ShowArrow: boolean;
    handleClose : ()=>void;
}

export const ProfileMenuItem = (props: ProfileMenuItemProps) => {

    return (
        <>
            <MenuItem  onClick={props.handleClose}>
                <div className='MenuItem'>
                    <div className='MenuItem1'>
                        {props.MenuitemImage}
                        <p>{props.MenuItemText}</p>
                    </div>
                    {props.ShowArrow ? <ArrowForwardIosOutlinedIcon className='arrow' /> : null}
                </div>
            </MenuItem>
        </>
    )
}