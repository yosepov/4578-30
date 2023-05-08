import React, { useState, useEffect } from 'react'
import { Avatar, Box, Button, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, MenuList, TextField, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useParams } from 'react-router-dom';
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { database } from '../../Services/firebase';

export const Comments = () => {
    const { id } = useParams();

    const [value, setValue] = useState({})
    const [commentFromFirebase, setCommentFromFirebase] = useState([])
    const [showButtons, setShowButtons] = useState(<></>)
    const [inputValue, setInputValue] = useState('')

    useEffect(() => {

        const getDataOfIdVideoFromFirebase = async () => {
            const docRef = doc(database, "videos", `${id}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const comment =  docSnap.data().comments
                setCommentFromFirebase(comment)
            }
        }
        getDataOfIdVideoFromFirebase()

    }, [id, value])



  

const updateCommentToFirebase = async () => {
    if(inputValue) {
        setInputValue('')
        console.log(value);
        
        const updateVideoComment = doc(database, 'videos', `${id}`)
        await updateDoc(updateVideoComment, {
            comments:arrayUnion(value)
        })
        setValue({})
    } else {
        alert('this is empty comment ')
    }

    
    setShowButtons(<></>)
}

const hideButtons = () => {
        setShowButtons(<></>)
        setValue('')
}

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



const commentsShow = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault()
    const value = event.target.value
    setInputValue(value)
    console.log(value);
    
    const date = new Date()
    const newComment = {
        value : value,
        date: date.toLocaleDateString()
    }
    setValue(newComment)


    setShowButtons(<>
            <Button
                onClick={hideButtons}
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    fontWeight: '600',
                }}>
                Cancel
            </Button>

            <Button
                type='submit'
                onClick={updateCommentToFirebase}
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                    fontWeight: '600',
                    backgroundColor: '#065fd4',
                    borderRadius: '18px',
                    padding: '0 16px',
                    "&:hover": { backgroundColor: '#065fd4' }

                }}>
                Comment
            </Button>

        </>)


    }

    const deleteComment = (index: number) => {
        console.log(index);
        
    }

    return <>
        <Box sx={{ width: '640px', marginTop: '50px' }}>
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
                onBlur={commentsShow}
                value={inputValue}
                onSubmit={(e => {
                    e.preventDefault()
                })}
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
            {commentFromFirebase.slice().reverse().map((comment, index) => {  
            return <>
            <Box 
             key={index}
             sx={{
                display: 'flex',
                alignItems: 'flex-start',
                width: '640px',
                marginTop: '50px'
            }}>
                <IconButton><Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' /></IconButton>
                <Box sx={{ display: 'block' }}>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '600px'
                        
                        }}>
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: '600',
                    }}>David amagid</Typography>
                    &nbsp;
                    <Typography sx={{
                        fontSize: '14px',
                        fontWeight: '600',
                    }}>{(comment as any).date}</Typography>
                    </Box>
  
                    <Typography sx={{
                        textTransform: 'capitalize',
                        fontSize: '14px',
                        fontWeight: '400',
                        maxWidth: '90%',
                        overflowWrap: 'break-word'
                    }}>{(comment as any).value}</Typography>
                </Box>
                <Box>
                    <IconButton
                    
                        key={index}
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
                        key={index}
                        id="long-menu"
                        sx={{ borderRadius: '50px' }}
                        MenuListProps={{
                            'aria-labelledby': 'long-button',

                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '30ch',
                            },
                        }}
                    >
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <ModeEditOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Edit" />
                            </MenuItem>

                            <MenuItem>
                                <ListItemIcon >
                                    <DeleteOutlineOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Delete" />
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
        </>
        })}
        </Box>
    </>

}
