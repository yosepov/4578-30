import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ListItemIcon, ListItemText, MenuList } from '@mui/material';
import QueueMusicOutlinedIcon from '@mui/icons-material/QueueMusicOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import PlaylistAddOutlinedIcon from '@mui/icons-material/PlaylistAddOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';


const ITEM_HEIGHT = 48;

export const ModalVideo = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <QueueMusicOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Add to queue"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <WatchLaterOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Save to Watch later"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <PlaylistAddOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Save to playlist"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <FileDownloadOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Download"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <ShareOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Share"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <NotInterestedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Not interested"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <DoNotDisturbOnOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Don't recommend channel"/>
          </MenuItem>

          <MenuItem>
            <ListItemIcon>
            <OutlinedFlagIcon />
            </ListItemIcon>
            <ListItemText primary="Report"/>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}