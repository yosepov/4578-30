import { Box, Button, Typography } from '@mui/material'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';


import React from 'react'

export const ModalSubscribe = () => {

    const [, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };

    return <>
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
            }}>

            <Button sx={{
                borderRadius: '50px',
                backgroundColor: 'rgba(0,0,0,0.05)',
                width: '60px',
                height: '35px',
                padding: '0px 75px',
                marginLeft: '15px'
            }}>
                <NotificationsNoneOutlinedIcon fontSize='small' />
                <Typography sx={{
                    textTransform: 'capitalize',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '600'
                }}>Subscribed</Typography>
                <KeyboardArrowDownOutlinedIcon fontSize='small' />
            </Button>
        </Box>
    </>
}
