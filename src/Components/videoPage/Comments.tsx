import React, { useState } from 'react'
import { Avatar, Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, TextField, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export const Comments = () => {

  // const comments: {newValue: string} [] = []

const [showButtons, setShowButtons] = useState(<></>)
const [value, setValue] = useState('')
const [comment, setComment] = useState(<></>)

const [searches, setSearches] = useState<string[]>([])
const [query, setQuery] = useState("")

const hideButtons = () => {
  setShowButtons(<></>)
  setValue('')
}

const ITEM_HEIGHT = 48;

const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};




const commentsShow = (event: React.ChangeEvent<HTMLInputElement>) => {  
  const newValue = event.target.value
  setValue(event.target.value)

  setQuery(event.target.value)
  
const publishComment = () => {
  setSearches(searches => searches.concat(query))
    // comments.push({newValue})

    setComment(<>
    <Box sx={{
      display: 'flex',
      alignItems: 'flex-start',
      width: '640px',
      marginTop: '50px'
    }}>
    <IconButton><Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' /></IconButton>
    <Box sx={{display: 'block'}}>
      <Typography sx={{
        fontSize: '14px',
        fontWeight: '600',
        color: 'black',
      }}>David amagid</Typography>

      <Typography sx={{
        textTransform: 'capitalize',
        fontSize: '14px',
        fontWeight: '400',
        color: 'black',
        maxWidth: '90%',
        overflowWrap: 'break-word'
      }}>{newValue}</Typography>
      </Box>
    <Box>
    <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}>
        <MoreVertIcon />
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
            maxHeight: ITEM_HEIGHT * 2,
            width: '30ch',
          },
        }}
      >
        <MenuList>
          <MenuItem>
            <ListItemIcon>
              <ModeEditOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Edit"/>
          </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
            <ListItemText primary="Delete"/>
          </MenuItem>
        </MenuList>
    </Menu>
    </Box>
</Box>
    </>)
  setValue('') 
}

setShowButtons(<>
    <Button 
      onClick={hideButtons}
      sx={{
        textTransform: 'capitalize',
        fontSize: '14px',
        fontWeight: '600',
        color: 'black'
      }}>
        Cancel
    </Button>

    <Button 
      onClick={publishComment}
      sx={{
      textTransform: 'capitalize',
      fontSize: '14px',
      fontWeight: '600',
      backgroundColor: '#065fd4',
      color: 'white',
      borderRadius: '18px',
      padding: '0 16px',
      "&:hover": {backgroundColor: '#065fd4',color: 'white'}
    }}>
      Comment
    </Button>
    
  </>)


}

return <>
<Box sx={{width: '640px', marginTop: '50px'}}>
  <Typography>Comments</Typography>
    </Box>
      <Box sx={{
      display: 'flex',
      alignItems: 'flex-start'
      }}>
    <IconButton><Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' /></IconButton>
    <TextField 
    sx={{
      marginRight: '16px'
      }} 
      multiline
      maxRows={4}
      id="standard-basic" 
      label="Add a comment..." 
      variant="standard" 
      fullWidth
      onChange={commentsShow}
      value={value}
      />
</Box>

<Box sx={{
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: '16px'
}}>
  {showButtons}
</Box>

<Box >
  {comment}
</Box>
</>

}
