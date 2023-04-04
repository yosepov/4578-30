import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import SideNav from './SideNav';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export default function SliderSideBar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = (isOpen: boolean) => setIsOpen(isOpen);

    return (
        <div >
            <React.Fragment >
                <Button onClick={() => toggleDrawer(!isOpen)}><MenuOutlinedIcon color='action' /></Button>
                <SwipeableDrawer
                    anchor={'left'}
                    open={isOpen}
                    onClose={() => toggleDrawer(false)}
                    onOpen={() => toggleDrawer(true)}>
                    <SideNav />
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
}