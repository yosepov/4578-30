import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';

import React from 'react'

const ITEM_HEIGHT = 48;

export const MoreOption = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <>
      <IconButton sx={{backgroundColor: 'rgba(0,0,0,0.05)'}}
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="long-menu"
        sx={{borderRadius: '50px'}}
        MenuListProps={{
          'aria-labelledby': 'long-button',
          
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 7,
            width: '30ch',
          },
        }}
      >
    <MenuList>
        <MenuItem>
            <ListItemIcon>
            <FileDownloadOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Download"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <PaidOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Thanks"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <ContentCutOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Clip"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <PlaylistAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Save"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <OutlinedFlagIcon />
            </ListItemIcon>
            <ListItemText primary="Report"/>
          </MenuItem>

        <MenuItem>
            <ListItemIcon>
            <DisplaySettingsOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Show transcript"/>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
}
